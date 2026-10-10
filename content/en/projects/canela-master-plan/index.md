---
author: "Iporã Possantti"
title: "Natural capital assessment for Canela's master plan"
date: 2024-09-01
featured_image: "https://photos.possantti.net/covers/canela-rodrigo-menezes-pexels.jpeg"
gallery_src: "https://images.possantti.net/story/A015/gallery_canela_en.jpeg"
gallery_title: "Inventory of natural capital in Canela"
gallery_caption: "Mapping habitat quality to ground a no-net-loss strategy in Serra Gaúcha."
gallery_order: 3
project_motivation: "How do you put a number on a city's natural capital, and use it to balance development with conservation?"
project_title: "Revisão do Plano Diretor de Canela (RS), Fase Diagnóstico" 
project_client: "Prefeitura Municipal de Canela"
project_intermediate: "NTU/UFRGS | Fundação Luiz Englert"
project_role: "Environmental Analyst"
project_abstract: "Ecosystem services and natural capital assessment for the revision of Canela's Plano Diretor (urban master plan). The core deliverable was a habitat quality map using InVEST and the Equivalent Biodiversity Area (EBA) metric, providing the scientific basis for a no-net-loss compensation mechanism within the municipality. The work also covered vegetation indices, hydrological indicators, water balance modeling, soil loss estimation, geological and hydrological risk mapping, and stream carrying capacity analysis."
project_domain: "Environmental Planning"
project_category: "Consulting"
project_tools: ["QGIS", "Python", "plans", "InVEST", "MapBiomas", "OpenStreetMap"]
project_team: ["Fernando Dornelles — IPH/UFRGS", "Tatiana Silva — Instituto de Geociências/UFRGS", "Ana McIntosh — Fulbright fellow (MIT)", "Benamy Turkienicz — NTU coordinator (UFRGS)"]
categories: ["projects"]
tags: ["ecosystem services", "natural capital", "habitat quality", "no net loss", "InVEST", "urban planning"] 
---

{{< project_header >}}

{{< img src="https://photos.possantti.net/covers/canela-rodrigo-menezes-pexels.jpeg" width=100 caption="Caracol Falls, one of Canela's iconic landmarks, fed by streams originating in the urban area." credit="">}}

---

## Context

Canela sits on a transition zone in the Serra Gaúcha, between the deep forested valleys of the Rio dos Sinos basin to the south and the silviculture-dominated plateau draining to the Rio Caí in the north. As the municipality revised its Plano Diretor (urban master plan), the environmental dimension needed more than a checklist of protected areas. It needed a spatial accounting of the municipality's natural capital: where ecosystem services are being produced, where they're being lost, and how development can be structured so that ecological value isn't simply erased.

I was brought in as an independent consultant to produce this assessment, working under the Núcleo de Tecnologia Urbana (NTU) at UFRGS. The project ran from late 2023 into 2024, covering both Canela and, in a later phase, the planned urban expansion area ("Nova Centralidade") in neighboring Gramado.

---

## Approach

The assessment was framed around two classes of ecosystem services: those related to **biodiversity** and those related to **water**. For each, I produced spatial indicators that could be evaluated at multiple scales, from the full municipality down to individual urban lots.

{{< img src="https://images.possantti.net/story/A015/gallery_canela_en.jpeg" width=90 caption="Habitat quality across Canela: from degraded urban core to preserved Atlantic Forest, with the Equivalent Biodiversity Area translating ecological value into a metric planners can act on." align="center" credit="">}}

On the biodiversity side, the central output was a **habitat quality map** using the InVEST model, built from an enhanced land use map that blended MapBiomas classification with OpenStreetMap road geometries. The model estimates how habitat degrades as a function of proximity to threats (roads, urban areas, agriculture) using expert-derived parameters from a published research paper I led (Fontoura et al., 2024).

The results revealed a clear north-south gradient: silviculture in the north showed habitat quality values around 0.1, while Atlantic Forest remnants in the south reached 0.8. This gradient became the basis for proposing a **no-net-loss compensation mechanism** using the **Equivalent Biodiversity Area (EBA)** metric: a single number that translates habitat quality into an area-equivalent, giving planners a legible accounting unit for compensation schemes.

Complementing the habitat assessment, I also produced NDVI vegetation maps (Sentinel-2, 10 m), a Topographic Wetness Index (TWI) for identifying saturation-prone areas relevant to urban drainage, annual water balance maps from hydrological modeling (using the PLANS model), and soil loss estimates (USLE-M).

{{< img src="https://images.possantti.net/story/A015/canela_landuse_1.gif" width=100 caption="Three decades of land use change in Canela: forest loss and silviculture expansion animated from MapBiomas time series." credit="">}}

On the risk side, the assessment included **SHALSTAB-based landslide susceptibility mapping** and **HAND-based flood susceptibility mapping** for both Canela's urban area and Gramado's expansion zone, as well as an analysis of **stream carrying capacity** for sewage dilution under different population growth scenarios.

All outputs were delivered as GeoPackages and TIFF rasters, intermediate products designed for the NTU team to assimilate into the broader master plan without reprocessing.

---

## Outcomes

The work produced four technical reports covering the full scope of the environmental assessment, available below. The core contribution is the EBA proof-of-concept, which demonstrates how the no-net-loss strategy can be operationalized at the municipal scale, including worked examples of compensation for typical development projects.

As of late 2024, Canela's plan in force remains Lei Complementar nº 32/2012. My contribution ran from 2023 into 2024, before the May 2024 floods shifted priorities across the region.

**Reports:**

- [Ecosystem Services Diagnostic](https://documents.possantti.net/A015/report_A015_canela_consultores.pdf) — NDVI, habitat quality, TWI, water balance, soil loss, and UGPA delineation
- [Equivalent Biodiversity Area](https://documents.possantti.net/A015/report_A015_canela_NNL.pdf) — proof of concept for no-net-loss compensation in Canela
- [Risk Assessment](https://documents.possantti.net/A015/report_A015_canela_risk_waterquality.pdf) — landslide and flood susceptibility, stream carrying capacity for Canela and Gramado
- [Technical Considerations](https://documents.possantti.net/A015/report_A015_canela_comments.pdf) — supplementary notes on indicators and environmental management units

**Method reference:**

- [Fontoura, de Freitas, Silva & Possantti (2024)](https://doi.org/10.1016/j.jenvman.2024.120540) — *Equivalent biodiversity area: A novel metric for No Net Loss success in Brazil's changing biomes.* Journal of Environmental Management.

{{< project_footer >}}