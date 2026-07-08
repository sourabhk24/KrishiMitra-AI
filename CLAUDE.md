# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Current phase: research-first

This project is intentionally NOT in implementation mode yet for the full
IoT + AI + Flutter vision described in `README.md`. Current work is limited to
data collection tooling and architecture planning. Do not jump ahead to writing
Raspberry Pi/ESP32 firmware, TFLite model code, RAG pipeline code, backend
(FastAPI/PostgreSQL) code, or Flutter app code unless explicitly asked — none
of that exists in the repo yet, and the priority right now is finishing the
Google Forms data-collection groundwork.

When asked to help with "the platform" broadly, check whether the request is
about this survey/data phase or the future hardware/AI/app phase — they're
very different scopes right now, and only the former is real code.

## What exists today

- `google_forms/` — the only implemented module. A Google Apps Script project
  that dynamically generates farmer survey forms for Maharashtra grape farmers
  (Nashik, Sangli, Pune districts).
- `appsscript.json` / `.clasp.json` — Apps Script project config, deployed and
  managed via `clasp`. Timezone is pinned to `Asia/Kolkata` for accurate
  survey timestamps.
- `docs/vision.md`, `docs/Roadmap.md` — architecture/planning docs, not
  literature notes.

## Commands

There is no build, lint, or automated test suite in this repo — it's Apps
Script pushed directly to a live Google project.

```bash
npm install -g @google/clasp   # one-time
clasp login                    # one-time auth
clasp push                     # push local google_forms/*.js to the Apps Script project
```

To actually generate a form, open the pushed project in the Apps Script
editor and run one of these functions manually:

```
createFarmerRegistration()
createWeeklyObservationForm()
createHarvestReportForm()
```

Each logs the form's published + edit URLs via `printFormLinks()` on completion.

## Architecture: `google_forms/` configuration-driven form builder

Data flows one direction, and each layer only knows about the layer below it:

```
definitions/*Questions.js   (arrays of plain question-config objects)
        │
        ▼
Builder.js  buildForm(form, questions)   (switch on question.type, dispatches to FormApp calls)
        │
        ▼
FormUtils.js / Validators.js   (shared helpers: createKrishiMitraForm, addSection,
                                 mobileNumberValidation, pinCodeValidation, ...)
        │
        ▼
FarmerRegistration.js / WeeklyObservation.js / HarvestReport.js   (entry points —
   each just calls createKrishiMitraForm() + buildForm() + printFormLinks())
```

**To add a new form**: define a question array in `definitions/`, then write a
small entry-point file that calls `createKrishiMitraForm()`, `buildForm()`,
and `printFormLinks()`. No changes to `Builder.js` are needed unless the form
needs a genuinely new question type.

**Supported question types** (handled in `Builder.js`'s `buildForm` switch):
`section`, `text`, `paragraph`, `dropdown`, `checkbox`, `multipleChoice`,
`phone`, `email`, `pincode`, `date`, `number`, `scale`, `rating`, `yesno`,
`drive`.

**Question object shape** (from `definitions/`):
```js
{ field: "farmer_name", type: "text", title: "Farmer Name", required: true }
```
`field` names use `snake_case` — they're designed to map directly onto future
PostgreSQL columns, so keep that convention for any new fields.

**Bilingual content**: every farmer-facing form is English + Marathi
(Devanagari) side by side in titles, help text, and choice values (e.g.
`"Yes / होय"`, `"No / नाही"`). Match this pattern for any new form copy.

**`constants.js`** holds shared reference data reused across form
definitions (Maharashtra districts, soil types, crops, irrigation methods,
water sources, languages, farm ownership types, etc.) — check here before
hardcoding a list that might already exist.

**`Validators.js`** holds reusable `FormApp.createTextValidation()` builders
(mobile number, PIN code, email, currency, soil pH, GPS, Aadhaar, farm/farmer
ID, etc.) — reuse these rather than inlining new regex validation.

## Do NOT touch without explicit sign-off

- Anything under `google_forms/` that's actively collecting live farmer
  responses — changing form/question structure could break in-progress data
  collection or misalign already-collected rows with the schema.
- `.clasp.json` — deployment target config for the live Apps Script project
  (this is enforced by a deny rule in `.claude/settings.json`).

## Conventions

- Apps Script code should stay readable/maintainable — this isn't throwaway
  script, it's the active data collection tool.
- Survey/form changes should be reflected in `docs/` if they affect the data
  schema other components will eventually consume.
