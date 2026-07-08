# KrishiMitra AI — Database Schema (design only)

This folder holds the **relational schema design** for the survey data.
It is an architecture artifact for the current *research-first* phase —
**no server is provisioned yet**. Apply `schema.sql` to a real Postgres
instance only once an ingest pipeline (Google Forms → DB) exists.

## Files

| File | Purpose |
|------|---------|
| `schema.sql` | PostgreSQL DDL for all survey tables, derived 1:1 from `google_forms/definitions/*.js`. |

## Tables

```
farmers ──1:N──> farms ──1:N──> weekly_observations
   │                 │
   │                 └────1:N──> harvest_reports
   └── (join key: farmer_id, natural key: mobile_number)
```

- **farmers** ← `FARMER_QUESTIONS` — person, contact, tech usage, preferences, consent.
- **farms** ← `FARMER_QUESTIONS` — farm-level attributes (area, soil, water, assets, crop snapshot).
- **weekly_observations** ← `WEEKLY_QUESTIONS` — one row per weekly form.
- **harvest_reports** ← `HARVEST_QUESTIONS` — one row per harvest form.
- **ref_districts / ref_crops** — lookup tables (seed from `constants.js`).

Column names match each question's `field` value exactly, so a form
response maps straight onto a column.

## Key design decisions

1. **Identity / join key (fixes the "IDs don't link" gap).**
   `farmer_id` and `farm_id` are surrogate keys **issued by ingest** —
   the forms don't collect them. `mobile_number` is the natural key and
   the reliable join target: the Weekly/Harvest forms let farmers *type*
   a Farmer/Farm ID, so ingest must resolve those free-text values back
   to `farmer_id` via `mobile_number` before insert.

2. **Field → column mapping (fixes the "field names are decorative" gap).**
   Because columns equal `field` names, the future ingest step is a
   direct rename from the Google Sheet's bilingual headers to these
   columns. Generate that mapping (codebook) from the definition arrays.

3. **Type conventions.**
   - `yesno` items → `BOOLEAN` (ingest maps `Yes / होय`→true, `No / नाही`→false).
   - `rating`/scale items → `SMALLINT` with `CHECK (… BETWEEN 1 AND 5)`.
   - `checkbox` (multi-select) → `TEXT[]`. Fully-normalized alternative:
     a junction table per multi-select.
   - photos / reports / `gps_location` → `TEXT` (pasted URLs); `farms`
     also has parsed `latitude`/`longitude`.

4. **Lineage columns** on every fact table — `source_response_id`,
   `form_version`, `submitted_at`, `ingested_at` — so each row is
   traceable to its Form submission and self-describes which form
   version produced it (fixes the "no version stamp" gap).

5. **Controlled vocabularies left as unconstrained `TEXT`** for now,
   because option wording is still being standardized (English-only vs
   bilingual). Add `CHECK`/`enum` once options stabilize.

## Identity & ingest (canonical join key)

**Decision: `mobile_number` is the canonical join key across all three
forms.** The forms don't issue Farmer/Farm IDs, and the free-text IDs
farmers type on the Weekly/Harvest forms are unreliable (they won't know
them; typos). Every form already collects and validates a mobile number,
so it is the one field that reliably ties a farmer's records together.

This needs **no change to any live form** — it's an ingest rule.

How the forms link:

```
Farmer Registration  --(mobile_number)-->  farmers.farmer_id  (issued by ingest)
Weekly Observation   --(mobile_number)-->  resolve to farmer_id / farm_id
Harvest Report       --(mobile_number)-->  resolve to farmer_id / farm_id
```

Ingest responsibilities (for the future ETL step):

1. On registration, look up `mobile_number`; create `farmer_id` (+ `farm_id`)
   if new, else reuse the existing one.
2. On a Weekly/Harvest submission, resolve `mobile_number` → `farmer_id`.
   Keep the farmer-typed id/name in `farmer_name` only for verification.
3. Rename the Sheet's bilingual column headers to schema columns using the
   **codebook** (see below), then insert.

### Codebook (field → column map)

`google_forms/Codebook.js` → run `generateCodebook()` in the Apps Script
editor. It reads the three question definition arrays and emits a table
(Google Sheet + CSV log) of `form, section, field, db_column, type,
required, options, title`. `db_column` mirrors `field`, so it is the
literal mapping from each Form's response columns onto `db/schema.sql`.
Regenerate it whenever the form definitions change.

## Not done yet (deliberately, per phase)

- No live database, migrations tool, ORM, or ingest/ETL code.
- No CHECK/enum constraints on controlled-vocabulary columns.
- Full district/crop seed lists (only pilot districts seeded).
