# External Datasets — candidate list

Public datasets relevant to KrishiMitra AI (Maharashtra grape belt:
Nashik / Sangli / Pune). This is **research groundwork** — a shortlist to
evaluate, not a commitment. Verify **license** and **field relevance**
before using any of these to train models, and make sure external data
use stays consistent with the consent farmers give in our own forms.

Organized by the AI capability each feeds (the features listed in our
survey: disease detection, yield/market, weather, fertilizer/crop advice,
schemes).

---

## 1. Crop disease detection (leaf images)

| Dataset | Why relevant | Notes |
|---|---|---|
| **Niphad Grape Leaf Disease Dataset (NGLD)** | **Niphad is in Nashik** — table-grape leaves, our exact region/crop. 2,726 images: Downy Mildew, Bacterial Rot, Powdery Mildew, Healthy. | Top pick. Mendeley Data. |
| **Grapes Leaf Disease Dataset (Precision Agriculture)** | 2,726 images, 4 classes (Downy/Powdery Mildew, Bacterial Leaf Spot, Healthy); 96% acc. baseline (ResNet-18). | ScienceDirect / Mendeley, open access. |
| **PlantVillage** | 54k+ images incl. grape classes (Black Rot, Esca, Leaf Blight, Healthy). Standard baseline. | ⚠️ Lab-condition images (uniform background) — weak transfer to real field photos. Our own `crop_photo` uploads matter precisely here. |
| **Vineyard multispectral disease dataset** | Multispectral vineyard imaging — future/advanced. | Niche; only if we go beyond RGB. |

## 2. Disease prediction from environment (no images)

| Dataset | Why relevant | Notes |
|---|---|---|
| **Grape disease via environmental parameters** | 10,000 records mapping powdery/downy mildew & bacterial leaf spot to environment. **Maps directly to our weekly form** (weather + pest/disease fields). | Mendeley Data. Good fit for a lightweight early-warning model. |

## 3. Market / mandi prices

| Dataset | Why relevant | Notes |
|---|---|---|
| **AGMARKNET daily mandi prices (data.gov.in)** | Daily min/max/modal wholesale prices by commodity & market — includes **grapes at Nashik/Sangli/Pune APMCs**. Feeds "market price forecast". | Has an API on data.gov.in. Open Govt Data License. |
| **CEDA Agri Market Data (Ashoka)** | Cleaned daily/monthly/yearly mandi prices & arrivals. | Easier to work with than raw AGMARKNET. |

## 4. Yield benchmarking

| Dataset | Why relevant | Notes |
|---|---|---|
| **Area, Production & Yield (APY) — DES / data.gov.in** | District × crop × season area/production/yield history. Baseline to sanity-check farmer-reported `total_yield` / `yield_per_acre`. | data.desagri.gov.in / India Data Portal. |

## 5. Weather / rainfall advisory

| Dataset | Why relevant | Notes |
|---|---|---|
| **IMD gridded rainfall (0.25°, 1901–2018)** | Long-period daily district-level rainfall. Weather advisory + disease-risk context. | IMD CDSP / imdpune. |
| **Rainfall in India (data.gov.in)** | Sub-division & district monthly rainfall + departure from normal. | Open Govt Data License. |

## 6. Soil / fertilizer recommendation

| Dataset | Why relevant | Notes |
|---|---|---|
| **Soil Health Card (SHC) dataset** | ~50M soil samples nationwide: pH, EC, organic carbon, N/P/K, S, micronutrients + fertilizer recs. Maharashtra plot-level. Feeds fertilizer advice. | aikosh.indiaai.gov.in. Aligns with our `soil_type` / `soil_report` fields. |

## 7. Crop recommendation (baseline)

| Dataset | Why relevant | Notes |
|---|---|---|
| **Crop Recommendation Dataset (Kaggle, Atharva Ingle)** | 2,200 rows, N/P/K/temperature/humidity/pH/rainfall → crop (22 crops incl. **grapes**). Classic starter for a recommendation model. | ⚠️ Small & partly synthetic; grape samples limited. Validate before relying. |

---

## Cross-cutting caveats

- **Licensing**: data.gov.in ≈ Government Open Data License – India; Mendeley
  usually CC-BY; Kaggle varies. Confirm per-dataset before training/redistribution.
- **Domain gap**: lab-image datasets (PlantVillage) underperform on farmer
  field photos — a reason our own image collection is valuable.
- **Regional fit**: prefer Nashik/Maharashtra/table-grape sources (NGLD,
  AGMARKNET-Nashik, SHC-Maharashtra) over generic ones where possible.
- **Consent alignment**: our forms tell farmers their data trains KrishiMitra
  AI; combining with external data is fine, but keep provenance documented.

## Sources
- data.gov.in AGMARKNET mandi prices — https://www.data.gov.in/catalog/current-daily-price-various-commodities-various-markets-mandi
- CEDA Agri Market Data — https://agmarknet.ceda.ashoka.edu.in/
- Niphad Grape Leaf Disease Dataset — https://data.mendeley.com/datasets/8nnd2ypcv3/1
- Grapes Leaf Disease Dataset (precision agri) — https://www.sciencedirect.com/science/article/pii/S2352340925004445
- Grape disease via environmental parameters — https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11190471/
- Soil Health Card dataset — https://aikosh.indiaai.gov.in/home/datasets/details/shc_dataset.html
- IMD rainfall / CDSP — https://cdsp.imdpune.gov.in/
- Rainfall in India (OGD) — https://www.data.gov.in/catalog/rainfall-india
- Area Production Yield (DES) — https://data.desagri.gov.in/website/crops-apy-report-web
- Crop Recommendation Dataset (Kaggle) — https://www.kaggle.com/datasets/atharvaingle/crop-recommendation-dataset
