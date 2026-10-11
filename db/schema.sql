-- ============================================================
-- KrishiMitra AI
-- schema.sql  —  relational schema for survey data collection
--
-- PostgreSQL DDL derived 1:1 from the Google Forms question
-- definitions in google_forms/definitions/*.js. Column names
-- deliberately match each question's snake_case `field` value so
-- form responses map straight onto columns.
--
-- Phase note: this is an ARCHITECTURE artifact (research-first
-- phase). No server is provisioned yet. Apply it later against a
-- real Postgres instance once an ingest pipeline exists.
--
-- Conventions:
--   * BOOLEAN columns  <- form "yesno" items. Ingest maps
--     "Yes / होय" -> true, "No / नाही" -> false.
--   * SMALLINT 1..5    <- form "rating"/scale items.
--   * TEXT[]           <- form "checkbox" (multi-select) items.
--                         A fully-normalized alternative is a
--                         junction table per multi-select; arrays
--                         are used here to stay close to the form.
--   * *_photo / *_report / gps_location <- pasted Drive/Maps URLs.
--   * Controlled-vocabulary TEXT columns are left unconstrained on
--     purpose while option wording is still being standardized
--     (see db/README.md). Add CHECK/enum once options stabilize.
-- ============================================================

BEGIN;

-- ------------------------------------------------------------
-- Lookup tables (seed from google_forms/constants.js)
-- ------------------------------------------------------------

CREATE TABLE ref_districts (
    district_name TEXT PRIMARY KEY
);

CREATE TABLE ref_crops (
    crop_name TEXT PRIMARY KEY
);

-- Focus districts for the current pilot (Maharashtra grape belt).
-- Load the full DISTRICTS / CROPS lists from constants.js.
INSERT INTO ref_districts (district_name) VALUES
    ('Nashik'), ('Sangli'), ('Pune')
ON CONFLICT DO NOTHING;

-- ------------------------------------------------------------
-- farmers  <- FARMER_QUESTIONS (person, contact, tech, prefs)
-- ------------------------------------------------------------
-- Identity strategy: farmer_id is a surrogate key ISSUED BY INGEST
-- on registration (the form does not collect it). mobile_number is
-- the natural key and the reliable join target for the Weekly /
-- Harvest forms, where farmers hand-type an id. Ingest should
-- resolve those free-text ids back to farmer_id via mobile_number.

CREATE TABLE farmers (
    farmer_id            TEXT PRIMARY KEY,
    mobile_number        TEXT UNIQUE NOT NULL,          -- natural/join key
    whatsapp_number      TEXT,
    farmer_name          TEXT NOT NULL,
    gender               TEXT,
    age                  SMALLINT CHECK (age BETWEEN 10 AND 120),
    education            TEXT,
    experience           TEXT,

    -- location (residence; farm plots reference this farmer)
    village              TEXT,
    taluka               TEXT,
    district             TEXT REFERENCES ref_districts,
    state                TEXT DEFAULT 'Maharashtra',
    pincode              TEXT CHECK (pincode ~ '^[1-9][0-9]{5}$'),

    -- technology usage
    smartphone           BOOLEAN,
    internet             BOOLEAN,
    languages            TEXT[],
    mobile_usage         TEXT,
    upi_usage            BOOLEAN,
    government_apps      BOOLEAN,

    -- smart-farming interest
    ai_interest          BOOLEAN,
    required_features    TEXT[],
    technology_interest  SMALLINT CHECK (technology_interest BETWEEN 1 AND 5),
    expectations         TEXT,

    -- challenges
    major_challenges     TEXT[],
    other_challenges     TEXT,

    -- traditional knowledge
    traditional_methods         TEXT,
    rain_prediction             TEXT,
    traditional_pest_control    TEXT,
    traditional_fertilizer      TEXT,
    other_traditional_knowledge TEXT,

    -- future IoT interest
    interested_iot       BOOLEAN,
    preferred_sensors    TEXT[],

    -- feedback & consent
    form_experience      SMALLINT CHECK (form_experience BETWEEN 1 AND 5),
    suggestions          TEXT,
    consent              BOOLEAN NOT NULL,

    farmer_photo         TEXT,                          -- Drive URL

    -- lineage / audit
    source_response_id   TEXT,                          -- Google Forms response id
    form_version         TEXT NOT NULL DEFAULT 'v1',
    submitted_at         TIMESTAMPTZ,
    ingested_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ------------------------------------------------------------
-- farms  <- FARMER_QUESTIONS (farm-level attributes)
-- ------------------------------------------------------------
-- One registration currently captures a single farm. The Weekly /
-- Harvest forms key on farm_id, so farms is modeled as its own
-- entity (a farmer may own multiple plots). farm_id is issued by
-- ingest.

CREATE TABLE farms (
    farm_id              TEXT PRIMARY KEY,
    farmer_id            TEXT NOT NULL REFERENCES farmers ON DELETE CASCADE,
    farm_name            TEXT,
    farm_area            NUMERIC(10,2) CHECK (farm_area >= 0),   -- acres
    ownership            TEXT,
    soil_type            TEXT[],
    water_source         TEXT[],
    irrigation           TEXT,
    electricity          BOOLEAN,
    gps_location         TEXT,                          -- Maps URL / free text
    latitude             NUMERIC(9,6),                  -- parsed by ingest
    longitude            NUMERIC(9,6),                  -- parsed by ingest

    -- crop snapshot at registration time
    main_crop            TEXT REFERENCES ref_crops,
    current_crops        TEXT[],
    crop_variety         TEXT,
    crop_cycles          TEXT,                          -- "1".."3" / "More than 3"
    average_yield        NUMERIC(12,2),                 -- kg

    major_crop_problem   TEXT,

    -- assets
    farm_machinery       TEXT[],
    soil_testing         BOOLEAN,
    weather_station      BOOLEAN,

    -- media
    farm_photo           TEXT,
    crop_photo           TEXT,
    soil_report          TEXT,

    source_response_id   TEXT,
    form_version         TEXT NOT NULL DEFAULT 'v1',
    submitted_at         TIMESTAMPTZ,
    ingested_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ------------------------------------------------------------
-- weekly_observations  <- WEEKLY_QUESTIONS (one row per weekly form)
-- ------------------------------------------------------------

CREATE TABLE weekly_observations (
    obs_id               BIGSERIAL PRIMARY KEY,
    farmer_id            TEXT REFERENCES farmers,       -- resolved by ingest
    farmer_name          TEXT,                          -- as entered (verification)
    farm_id              TEXT REFERENCES farms,         -- resolved by ingest
    observation_date     DATE,
    district             TEXT REFERENCES ref_districts,

    -- crop details
    crop_name            TEXT REFERENCES ref_crops,
    crop_variety         TEXT,
    crop_stage           TEXT,
    crop_age             INTEGER,                        -- days
    plant_height         NUMERIC(6,2),                   -- cm
    crop_health          TEXT,
    health_rating        SMALLINT CHECK (health_rating BETWEEN 1 AND 5),

    -- irrigation & water
    irrigation_done      BOOLEAN,
    irrigation_method    TEXT,
    irrigation_frequency SMALLINT,
    soil_moisture_level  TEXT,
    water_related_issues TEXT,

    -- fertilizer
    fertilizer_applied   BOOLEAN,
    fertilizer_type      TEXT[],
    fertilizer_quantity  NUMERIC(10,2),                  -- kg
    foliar_spray         BOOLEAN,
    fertilizer_notes     TEXT,

    -- pest & disease
    pest_found           BOOLEAN,
    pest_name            TEXT,
    disease_found        BOOLEAN,
    disease_name         TEXT,
    disease_severity     TEXT,
    pesticide_used       BOOLEAN,
    pest_control_method  TEXT,

    -- weather
    weekly_weather       TEXT,
    rainfall             BOOLEAN,
    estimated_rainfall   NUMERIC(7,2),                   -- mm
    temperature_level    TEXT,
    humidity_level       TEXT,

    -- sensors (future)
    sensor_installed     BOOLEAN,
    available_sensors    TEXT[],
    sensor_observations  TEXT,

    -- activities
    weekly_activities    TEXT[],
    activity_notes       TEXT,

    -- traditional practice
    traditional_practice TEXT,
    farmer_observation   TEXT,
    recommendations      TEXT,

    -- media
    crop_photo_front     TEXT,
    crop_photo_closeup   TEXT,
    disease_photo        TEXT,
    farm_photo           TEXT,

    -- AI assistance
    need_ai_help         BOOLEAN,
    required_ai_support  TEXT[],

    -- feedback & consent
    weekly_form_rating   SMALLINT CHECK (weekly_form_rating BETWEEN 1 AND 5),
    weekly_feedback      TEXT,
    weekly_consent       BOOLEAN NOT NULL,

    source_response_id   TEXT,
    form_version         TEXT NOT NULL DEFAULT 'v1',
    submitted_at         TIMESTAMPTZ,
    ingested_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ------------------------------------------------------------
-- harvest_reports  <- HARVEST_QUESTIONS (one row per harvest form)
-- ------------------------------------------------------------

CREATE TABLE harvest_reports (
    harvest_id           BIGSERIAL PRIMARY KEY,
    farmer_id            TEXT REFERENCES farmers,        -- resolved by ingest
    farmer_name          TEXT,                           -- as entered (verification)
    farm_id              TEXT REFERENCES farms,          -- resolved by ingest
    harvest_date         DATE,
    district             TEXT REFERENCES ref_districts,

    -- crop
    crop_name            TEXT REFERENCES ref_crops,
    crop_variety         TEXT,
    cultivated_area      NUMERIC(10,2),                  -- acres
    crop_duration        INTEGER,                        -- days
    season               TEXT,                           -- Kharif/Rabi/Summer/Perennial

    -- harvest details
    total_yield          NUMERIC(12,2),                  -- kg
    yield_per_acre       NUMERIC(12,2),                  -- kg
    crop_quality         TEXT,
    quality_rating       SMALLINT CHECK (quality_rating BETWEEN 1 AND 5),
    crop_loss            BOOLEAN,
    loss_reason          TEXT,

    -- storage
    stored_crop          BOOLEAN,
    storage_type         TEXT,
    storage_notes        TEXT,

    -- market & selling
    crop_sold            BOOLEAN,
    selling_place        TEXT,
    selling_price_per_kg NUMERIC(10,2),                  -- ₹
    total_income         NUMERIC(14,2),                  -- ₹
    market_satisfaction  TEXT,
    market_challenges    TEXT,

    -- expenses & profit (₹)
    seed_cost            NUMERIC(12,2),
    fertilizer_cost      NUMERIC(12,2),
    pesticide_cost       NUMERIC(12,2),
    labour_cost          NUMERIC(12,2),
    irrigation_cost      NUMERIC(12,2),
    other_expenses       NUMERIC(12,2),
    estimated_profit     NUMERIC(14,2),

    -- sustainable farming
    organic_practices    BOOLEAN,
    water_conservation   BOOLEAN,
    soil_conservation    BOOLEAN,
    sustainable_notes    TEXT,

    -- weather during harvest
    harvest_weather          TEXT,
    weather_affected_harvest BOOLEAN,
    weather_notes            TEXT,

    -- media
    harvest_photo        TEXT,
    yield_photo          TEXT,
    storage_photo        TEXT,

    -- AI insights & planning
    need_ai_analysis     BOOLEAN,
    required_ai_services TEXT[],
    next_crop_plan       TEXT REFERENCES ref_crops,
    future_farming_goals TEXT,

    -- feedback
    overall_harvest_satisfaction SMALLINT CHECK (overall_harvest_satisfaction BETWEEN 1 AND 5),
    would_recommend_platform     BOOLEAN,
    platform_feedback            TEXT,
    additional_comments          TEXT,

    -- government schemes
    government_scheme_used   BOOLEAN,
    government_scheme_name   TEXT,
    need_scheme_information  BOOLEAN,

    harvest_consent      BOOLEAN NOT NULL,

    source_response_id   TEXT,
    form_version         TEXT NOT NULL DEFAULT 'v1',
    submitted_at         TIMESTAMPTZ,
    ingested_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ------------------------------------------------------------
-- Indexes (join keys + time-series access)
-- ------------------------------------------------------------

CREATE INDEX idx_farms_farmer            ON farms (farmer_id);
CREATE INDEX idx_weekly_farmer           ON weekly_observations (farmer_id);
CREATE INDEX idx_weekly_farm             ON weekly_observations (farm_id);
CREATE INDEX idx_weekly_date             ON weekly_observations (observation_date);
CREATE INDEX idx_harvest_farmer          ON harvest_reports (farmer_id);
CREATE INDEX idx_harvest_farm            ON harvest_reports (farm_id);
CREATE INDEX idx_harvest_date            ON harvest_reports (harvest_date);

COMMIT;
