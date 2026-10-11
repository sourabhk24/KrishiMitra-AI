# KrishiMitra AI Roadmap

Consolidated roadmap for the Smart Grape Farming Platform. Rationale and
the full architecture review live in
[architecture-review.md](architecture-review.md) (the source of truth for
the decisions behind this ordering).

Key sequencing choice: a **sensor-free disease-risk MVP (P1)** and the
**backend/ingest (P2)** come *before* physical sensors and ML, so farmers
get working alerts early and the slow/expensive hardware + model work is
off the critical path.

| Phase | Theme | Key outputs |
|---|---|---|
| **P0 — Research** *(← current)* | Domain study + data groundwork | Farmer interviews, NRCG corpus, trigger matrix, Google Forms live, DB schema + codebook |
| **P1 — Sensor-free MVP** | Value before hardware | Weather-API ingest, disease-risk rules engine over the trigger matrix, GDD engine, WhatsApp alerts |
| **P2 — Backend + ingest** | Serve the data | FastAPI + Postgres/InfluxDB, Forms→DB ingest (join on `mobile_number`), auth |
| **P3 — Dataset collection** | Training data | Grape disease images (NGLD + farm), labeled weekly-obs, weather history, train/val/test splits |
| **P4 — AI models** | ML layer | Disease CNN (MobileNetV2→TFLite), predictive alert (RF), LLM advisor + RAG, yield/market (Module 5) |
| **P5 — Sensor hardware** | IoT rollout | Pi + ESP32 nodes, MQTT pipeline, per-farm deployment |
| **P6 — Mobile app** | Farmer UX | Flutter, offline-first, dashboard, camera scan, Marathi/Hindi/English |
| **P7 — Field testing** | Pilot + iterate | 3 farms Nashik/Sangli, accuracy on real images, retrain, APEDA MRL, launch |

## Confirmed stack decisions

- **API**: FastAPI (single Python runtime shared with the ML services).
- **Web dashboard**: Vue.js.
- See [architecture-review.md](architecture-review.md) for the full
  decision log and open follow-ups.
