---
author: "Iporã Possantti"
title: "Canela Master Plan"
date: 2023-06-01
featured_image: "https://photos.possantti.net/covers/canela-1.jpg"
gallery_src: "https://photos.possantti.net/covers/canela-1.jpg"
gallery_title: "Canela Master Plan"
gallery_caption: "Quantifying environmental constraints for a growing mountain town's master plan."
project_motivation: "How do you quantify environmental constraints for a growing mountain town's master plan?"
project_title: "Environmental assessment for the revision of Canela's Master Plan" 
project_client: "Prefeitura Municipal de Canela"
project_intermediate: "NTU/UFRGS"
project_role: "Environmental Analyst"
project_abstract: "Environmental dimension assessment for the revision of Canela's Plano Diretor (master plan), conducted through the Núcleo de Tecnologia Urbana (NTU) at UFRGS, coordinated by Professor Benamy Turkienicz. I contributed land use change analysis using MapBiomas, silviculture expansion assessment, topographic analysis, and habitat quality modeling using InVEST — applying the Equivalent Biodiversity Area method from a paper I led."
project_domain: "Environmental Planning"
project_category: "Consulting"
project_tools: ["QGIS", "Python", "plans", "InVEST", "MapBiomas", "OpenStreetMap"]
project_team: ["Benamy Turkienicz — NTU coordinator (UFRGS)"]
categories: ["projects"]
tags: ["urban planning", "master plan", "habitat quality", "land use", "InVEST"] 
---

{{< project_header >}}

{{< img src="https://photos.possantti.net/covers/canela-1.jpg" width=100 caption="Canela's landscape in the Serra Gaúcha region." credit="">}}

---

## Context

Canela, in Rio Grande do Sul's Serra Gaúcha region, revised its Plano Diretor (master plan) — the instrument governing urban development, zoning, and environmental protection — as Brazilian law requires every ten years.

The revision was coordinated by the Núcleo de Tecnologia Urbana (NTU) at UFRGS, led by Professor Benamy Turkienicz, under contract with the Prefeitura Municipal de Canela. I was brought in to handle the environmental assessment: identifying spatial patterns and trends to inform zoning and land use policy.

---

## Approach

The first step was an **enhanced land use map** blending MapBiomas classification — native forest, silviculture, agriculture, urban — with OpenStreetMap road geometries, since MapBiomas alone misses roads, a critical threat to habitat connectivity. This let the map feed directly into the habitat quality model with realistic threat distances.

From this base, a **temporal analysis** using MapBiomas time series tracked landscape transformation over recent decades, revealing clear **silviculture** (pine and eucalyptus) expansion in the north, displacing native vegetation and fragmenting habitat.

The core analytical piece was a **habitat quality assessment** using the InVEST model and the **Equivalent Biodiversity Area (EBA)** method, which I developed and published as lead researcher in the *Journal of Environmental Management* (da Fontoura et al., 2024). InVEST estimates habitat degradation from proximity to threats — roads, urban areas, agriculture — weighted by expert-derived parameters; the paper's contribution was grounding those parameters in structured expert questionnaires rather than arbitrary assumptions. EBA then translates habitat quality and degradation into a single area-equivalent number, legible for planners.

The results revealed a strong **north-south gradient**: the silviculture-dominated north showed poor habitat quality, while Atlantic Forest remnants in the south retained much higher ecological value. This opened the door to a **no-net-loss compensation mechanism** — developers could target the degraded north for new projects while conserving equivalent biodiversity area in the richer south, with EBA as the accounting unit for an internal compensation market calculated on scientific grounds.

I also ran a **topographic analysis** to characterize terrain constraints for urban expansion and infrastructure planning.

All outputs were delivered as GeoPackages and TIFF rasters, designed as intermediate products the NTU team could assimilate directly into the broader master plan — without reprocessing the raw data.

{{< img src="/images/default.jpg" width=100 caption="Habitat quality map of Canela (InVEST model output), showing the north–south gradient in ecological value." credit="">}}

---

## Outcomes

The deliverables were technical reports — covering land use trends, habitat quality maps, and topographic constraints — produced as an independent consultant for the NTU team and integrated into the broader master plan revision. They are available below as reference material.

**Resources:**

- Environmental Assessment Report — Land Use and Habitat Quality *(report link pending)*
- [da Fontoura, de Freitas, Silva & Possantti (2024)](https://doi.org/10.1016/j.jenvman.2024.120424) — *Equivalent biodiversity area: A novel metric for No Net Loss success in Brazil's changing biomes.* Journal of Environmental Management. *(method reference)*

As of late 2024, the plan in force remains Lei Complementar nº 32/2012; amendments have been introduced (e.g., PLC nº 7/2024, airport area), but a full revision hasn't been published. My contribution ran from 2023 into early 2024, before the May 2024 floods shifted priorities.

---

### Project Info

*Contracted through Fundação Luiz Englert (UFRGS)*

{{< project_footer >}}
