# Architecture Review & Reconciliation

Review of `GrapeFarm_Smart_Platform_Architecture.pdf` (v1.0) against the
repo, plus the decisions that make it the single source of truth. Where
this doc and older docs disagree, **this doc wins**; update `README.md`
and `docs/Roadmap.md` to match once the ⚑ decisions below are ratified.

## Verdict

The architecture is strong and does **not** need reworking. Domain
modeling (disease→sensor trigger matrix, GDD phenology) is the standout.
The risks are about **sequencing and dependencies**, not design.

## Strengths (keep as-is)

- Disease→sensor trigger matrix and GDD phenology engine — real
  viticulture, directly drives the predictive alert model.
- Edge-first (TFLite on Pi) + offline-first mobile + WhatsApp alerts —
  correct for rural Maharashtra.
- Clean 6-layer separation; cost-aware BOM (~₹15.4k/acre).

## Gaps / risks (ranked)

1. **Sensor-first architecture vs form-first data collection.** Modules 3
   (Predictive Alert) and 4 (GDD) consume continuous sensor streams, but
   the only data being collected now is manual weekly farmer reports.
   → **Ship disease-risk as a rules engine over the trigger matrix +
   weather API first (no sensors)**, refine with ML later. Treat the
   weekly form as the "human sensor" that bootstraps Module 3.
2. **Module 1 dataset can't cover its classes.** PlantVillage grape set =
   Black Rot, Esca, Leaf Blight, Healthy — it has **no** Powdery/Downy/
   Botrytis (3 of the 4 target classes). Reconcile the class taxonomy
   across NGLD (Niphad) + farm photos before training. See
   [datasets.md](datasets.md).
3. **Yield & market intelligence missing from the AI engine** though the
   harvest form collects exactly that data. → Add **Module 5**.
4. **LLM advisor:** cloud-only (won't work offline — state it); per-query
   cost model needed; **agrochemical dosages must come from a validated
   NRCG/ICAR table with human-in-the-loop, not free LLM generation**
   (wrong dosage = real harm + export-MRL risk).
5. **"Affordable / small farms" vs AWS + LLM + ₹15.4k/acre** — needs a
   who-pays / unit-economics model (FPO-shared units, subsidy, or a
   sensor-free freemium tier powered by the rules engine in #1).
6. **GDD** should floor at 0 below T-base (and usually cap ~30°C).
   **Phenology calendar** — validate against the Nashik double-pruning
   export cycle with NRCG.

## ⚑ Decisions (recommended — ratify or override)

| # | Contradiction | Decision | Rationale |
|---|---|---|---|
| D1 | API: Node.js (pp.2,5) vs FastAPI (p.1,5) | **FastAPI** | All AI is Python; one framework, not two. |
| D2 | Web dashboard: Vue.js (PDF) vs React.js (README) | **Vue.js** | Matches the newer artifact (the PDF). |
| D3 | Three different roadmaps | **The consolidated one below** | Single source of truth. |
| D4 | Disease risk delivery | **Rules engine + weather API first, ML/sensors later** | Delivers value without hardware; de-risks critical path. |
| D5 | AI modules | **Add Module 5: Yield & Market intelligence** | Harvest form already feeds it. |

## Consolidated roadmap (single source of truth)

Reconciles the PDF (P0–P6), `Roadmap.md`, and `README.md` sprints, with
the D4 sequencing change folded in.

| Phase | Theme | Key outputs |
|---|---|---|
| **P0 — Research** *(← you are here)* | Domain study + data groundwork | Farmer interviews, NRCG corpus, trigger matrix, **Google Forms live**, **DB schema + codebook** |
| **P1 — Sensor-free MVP** *(new, from D4)* | Value before hardware | Weather-API ingest, **disease-risk rules engine over the trigger matrix**, GDD engine, WhatsApp alerts |
| **P2 — Backend + ingest** | Serve the data | FastAPI + Postgres/InfluxDB, Forms→DB ingest (join on `mobile_number`), auth |
| **P3 — Dataset collection** | Training data | Grape disease images (NGLD + farm), labeled weekly-obs, weather history, train/val/test splits |
| **P4 — AI models** | ML layer | Disease CNN (MobileNetV2→TFLite), predictive alert (RF), LLM advisor + RAG, **Module 5 yield/market** |
| **P5 — Sensor hardware** | IoT rollout | Pi + ESP32 nodes, MQTT pipeline, per-farm deployment |
| **P6 — Mobile app** | Farmer UX | Flutter, offline-first, dashboard, camera scan, Marathi/Hindi/English |
| **P7 — Field testing** | Pilot + iterate | 3 farms Nashik/Sangli, accuracy on real images, retrain, APEDA MRL, launch |

Main change vs the PDF: the **rules-engine MVP (P1)** and **backend/ingest
(P2)** come *before* dataset collection and *before* physical sensors, so
farmers get working disease alerts early and the expensive/slow
sensor+ML work isn't on the critical path.

## Follow-ups once ratified

- Update `README.md` tech-stack table (D1, D2) and `docs/Roadmap.md`
  (D3) to point here.
- Spec the P1 rules engine (trigger matrix → lookup + weather API).
- Add `alerts`, `spray_diary`, `sensor_nodes`, `disease_detections`
  tables to `db/schema.sql` (needed from P2/P5).
