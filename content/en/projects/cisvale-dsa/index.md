---
author: "Iporã Possantti"
title: "Socio-Environmental Diagnostic in Rio Pardo valley"
date: 2025-01-01
featured_image: "/images/default.jpg"
gallery_src: "/images/default.jpg"
gallery_title: "Socio-Environmental Diagnostic in Rio Pardo valley"
gallery_caption: "Mapping flood and landslide hazard and vulnerability across 17 municipalities."
project_motivation: "After the 2024 floods, how do you map hazard and vulnerability across 17 municipalities with no field budget?"
project_title: "Hazard and vulnerability assessment for the socio-environmental diagnostic in the Vale do Rio Pardo" 
project_client: "CISVALE"
project_intermediate: "UNISC"
project_role: "Remote Consultant — Hazard Analysis"
project_abstract: "Environmental hazard and vulnerability assessment for the Diagnóstico Socioambiental (DSA) of 17 municipalities in the Vale do Rio Pardo, Rio Grande do Sul, coordinated by the CISVALE consortium. Working as a remote consultant hired by UNISC, I produced flood and landslide susceptibility maps for each municipality using Height Above Nearest Drainage, topographic analysis, and CNEFE address data to cross hazard with population exposure — turning susceptibility into vulnerability."
project_domain: "Hydrology"
project_category: "Consulting"
project_tools: ["Python", "QGIS", "LaTeX"]
project_team: ["UNISC — Lead institution (geological, social analysis, field work)"]
categories: ["projects"]
tags: ["floods", "landslides", "hazard", "vulnerability", "CNEFE", "HAND"] 
---

{{< project_header >}}

{{< img src="/images/default.jpg" width=100 caption="The Vale do Rio Pardo landscape, Rio Grande do Sul." credit="">}}

---

## Context

The 2024 floods devastated municipalities across the Vale do Rio Pardo in Rio Grande do Sul. In response, the CISVALE — Consórcio Intermunicipal de Serviços do Vale do Rio Pardo, an association of 17 municipalities — commissioned a broad Diagnóstico Socioambiental (DSA) to assess environmental risk factors across the region. The work was contracted through the Universidade de Santa Cruz do Sul (UNISC), which assembled a multidisciplinary team covering geological, social, and environmental dimensions.

I joined the project as a remote consultant, hired by UNISC to handle the analytical hazard and vulnerability mapping. The 2024 disaster provided an unusual amount of empirical data — flood extent maps, landslide scar inventories — that could ground-truth the models, even without dedicated field campaigns.

---

## Approach

The goal was to produce hazard and vulnerability maps for each of the 17 municipalities — a fast, desk-based approach relying on available data rather than field surveys.

For **flood hazard**, I used a **multi-scale Height Above Nearest Drainage (HAND)** approach. A single HAND map depends on the threshold area used to define the drainage network — a small threshold picks up every stream, while a large one captures only major rivers. Neither alone gives the full picture. By computing HAND at multiple scales, I could characterize each location's exposure to small streams, medium channels, and large rivers simultaneously. A household sitting 3 meters above a small creek and 15 meters above the main river has a very different risk profile than one at the same elevation above just one of those.

For **mass movement and landslide hazard**, I used the **SHALSTAB** (Shallow Landsliding Stability) model, which combines slope geometry with a simplified hydrological model to estimate where the terrain is prone to shallow failures. Calibration was done by visual comparison with mapped landslide scars from the 2024 event — not a formal statistical calibration, but a practical expert-opinion validation that was adequate for the project's planning-level scope.

The critical step was turning susceptibility into **vulnerability** by crossing the hazard maps with the **CNEFE database** — the national registry of addresses from IBGE. This allowed me to estimate how many households and addresses fall within each hazard zone, municipality by municipality. A susceptible hillslope with no one living on it is a different problem than one with a dense neighborhood.

I produced standardized reports for each municipality using **Python scripting and LaTeX**, so the output was consistent and reproducible. The reports and spatial data were delivered to the UNISC team, who integrated them with their own geological, social, and field-based analyses into the final DSA products for each municipality.

{{< img src="/images/default.jpg" width=100 caption="Flood susceptibility map derived from multi-scale HAND, with CNEFE address points overlaid to assess vulnerability." credit="">}}

---

## Outcomes

The DSA was approved by CISVALE in September 2023 and the contract with UNISC started in 2024, though it was temporarily suspended during the May 2024 flood event. Public hearings began in April 2026 and are being conducted municipality by municipality. The process is part of a broader CISVALE initiative that includes the revision of municipal sanitation plans, the Agenda Ambiental 2030, and the creation of a regional Comitê Pró-Clima for climate adaptation.

My deliverables were intermediate products — hazard and vulnerability layers plus per-municipality reports — assimilated by the UNISC team into the official DSA documents.

---

### Project Info

{{< project_footer >}}
