---
author: "Iporã Possantti"
title: "Environmental diagnostic in Rio Pardo valley"
date: 2025-01-01
featured_image: "https://photos.possantti.net/covers/santa-cruz-1.png"
gallery_src: "https://photos.possantti.net/covers/santa-cruz-1.png"
gallery_title: "Environmental diagnostic in Rio Pardo valley"
gallery_caption: "Mapping flood and landslide hazard and vulnerability across 17 municipalities."
gallery_show: false
project_motivation: "After the 2024 floods, how do you map hazard and vulnerability across 17 municipalities with no field budget?"
project_title: "Hazard and vulnerability assessment for the socio-environmental diagnostic in the Vale do Rio Pardo" 
project_client: "CISVALE"
project_intermediate: "UNISC"
project_role: "Remote Consultant — Hazard Analysis"
project_abstract: "Environmental hazard and vulnerability assessment for the Diagnóstico Socioambiental (DSA) of 17 municipalities in the Vale do Rio Pardo, Rio Grande do Sul, coordinated by the CISVALE consortium. Working as a remote consultant hired by UNISC, I produced flood and landslide susceptibility maps for each municipality using Height Above Nearest Drainage, topographic analysis, and CNEFE address data to cross hazard with population exposure, turning susceptibility into vulnerability."
project_domain: "Hydrology"
project_category: "Consulting"
project_tools: ["Python", "QGIS", "LaTeX"]
project_team: ["UNISC — Lead institution (geological, social analysis, field work)"]
categories: ["projects"]
tags: ["floods", "landslides", "hazard", "vulnerability", "CNEFE", "HAND"] 
---

{{< project_header >}}

{{< img src="https://photos.possantti.net/covers/santa-cruz-1.png" width=100 caption="The Vale do Rio Pardo landscape, Rio Grande do Sul." credit="">}}

---

## Context

The 2024 floods devastated the Vale do Rio Pardo, Rio Grande do Sul. In response, CISVALE (the Consórcio Intermunicipal de Serviços do Vale do Rio Pardo, representing 17 municipalities) commissioned a broad Diagnóstico Socioambiental (DSA), contracted through the Universidade de Santa Cruz do Sul (UNISC), which assembled a multidisciplinary team spanning geological, social, and environmental dimensions.

I joined as a remote consultant hired by UNISC for the hazard and vulnerability mapping. The 2024 disaster itself provided unusually rich data (flood extent maps, landslide scar inventories) to ground-truth the models without field campaigns.

---

## Approach

The goal: hazard and vulnerability maps for all 17 municipalities, a fast desk-based approach using available data rather than field surveys.

For **flood hazard**, I used a multi-scale **Height Above Nearest Drainage (HAND)** approach. A single HAND map depends on the threshold area defining the drainage network: small thresholds pick up every stream, large ones only major rivers, so neither alone gives the full picture. Computing HAND at multiple scales captured each location's exposure to small streams, medium channels, and large rivers at once: a household 3 m above a creek and 15 m above the main river has a very different risk than one at the same elevation above just one of those.

For **landslide hazard**, I used the **SHALSTAB** model, combining slope geometry with a simplified hydrological model to estimate shallow-failure susceptibility, calibrated by visual comparison against mapped 2024 landslide scars: an expert-opinion validation adequate for the project's planning-level scope.

The critical step was turning susceptibility into **vulnerability** by crossing the hazard maps with **CNEFE**, IBGE's address registry, estimating households within each hazard zone, municipality by municipality. A susceptible hillslope with no one on it is a different problem than a dense neighborhood.

I produced standardized, reproducible reports using **Python** and **LaTeX**, delivered to UNISC for integration with their geological, social, and field-based analyses into the final DSA products.

{{< img src="/images/default.jpg" width=100 caption="Flood susceptibility map derived from multi-scale HAND, with CNEFE address points overlaid to assess vulnerability." credit="">}}

---

## Outcomes

The DSA, approved by CISVALE in September 2023, led to a UNISC contract starting 2024 (briefly suspended during the May 2024 flood); public hearings began in April 2026, running municipality by municipality as part of a broader CISVALE initiative: revising sanitation plans, the Agenda Ambiental 2030, and a regional Comitê Pró-Clima for climate adaptation.

My deliverables (hazard and vulnerability layers plus per-municipality reports) were assimilated by UNISC into the official DSA documents.

{{< project_footer >}}
