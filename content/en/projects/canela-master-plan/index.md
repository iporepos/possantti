---
author: "Iporã Possantti"
title: "Canela Master Plan"
date: 2023-06-01
featured_image: "/images/default.jpg"
gallery_src: "/images/default.jpg"
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

{{< img src="/images/default.jpg" width=100 caption="Canela's landscape in the Serra Gaúcha region." credit="">}}

---

## Context

The municipality of Canela, in the Serra Gaúcha region of Rio Grande do Sul, underwent a revision of its Plano Diretor (master plan) — the regulatory instrument that guides urban development, land use zoning, and environmental protection at the municipal level. Brazilian law requires these plans to be revised every ten years.

The revision was coordinated by the Núcleo de Tecnologia Urbana (NTU) at UFRGS, led by Professor Benamy Turkienicz, under contract with the Prefeitura Municipal de Canela. The project was broad, covering multiple urban and environmental dimensions. I was brought in to handle the environmental assessment: identifying spatial patterns and trends that should inform zoning decisions and land use policy.

---

## Approach

My contribution focused on environmental variables that could give the planning team spatial insights into ecological constraints and trends across the municipality.

The first step was building an **enhanced land use map** by blending MapBiomas classification with OpenStreetMap layers. MapBiomas provides the base land cover classes — native forest, silviculture, agriculture, urban — but it doesn't capture roads and streets, which are critical threats to habitat connectivity. By incorporating OSM road geometries as an additional layer, the resulting map could feed directly into the habitat quality model with realistic threat distances.

From this land use base, I ran a **temporal analysis** using MapBiomas time series to assess landscape transformation over recent decades. A clear finding was the expansion of **silviculture** (pine and eucalyptus plantations) in the northern part of the municipality, displacing native vegetation and fragmenting habitats.

The core analytical piece was a **habitat quality assessment** using the InVEST model and the **Equivalent Biodiversity Area (EBA)** method, which I developed and published as lead researcher in a paper in the *Journal of Environmental Management* (da Fontoura et al., 2024). The InVEST model estimates habitat degradation based on proximity to threats — roads, urban areas, agriculture — weighted by expert-derived parameters. The paper's contribution was establishing those parameters through structured questionnaires with domain experts, giving the model solid scientific grounding rather than arbitrary assumptions. The EBA metric then translates habitat quality and degradation into a single area-equivalent number, making it legible for planners.

The results revealed a strong **north-south gradient**: the northern part of the municipality, dominated by silviculture, showed significantly poorer habitat quality, while the southern part — covered by Atlantic Forest remnants — retained much higher ecological value. This gradient opened the door to a **no-net-loss compensation mechanism**: developers could target the already-degraded northern areas for new projects and compensate by conserving equivalent biodiversity area in the ecologically richer south. Essentially, the EBA provides the accounting unit for an internal compensation market within the municipality, where deforestation in one zone can be offset by conservation in another, calculated on a scientifically grounded basis.

I also contributed **topographic analysis** to characterize terrain constraints relevant to urban expansion and infrastructure planning.

All outputs were organized into GeoPackages and accompanying TIFF raster files, designed as intermediate products for the NTU team to ingest directly into their own workflows. The idea was that the environmental layers could be assimilated into the broader master plan products — which carry far more urban planning detail — without requiring the team to reprocess the raw data.

{{< img src="/images/default.jpg" width=100 caption="Habitat quality map of Canela (InVEST model output), showing the north–south gradient in ecological value." credit="">}}

---

## Outcomes

The deliverables were technical reports integrated into the broader master plan revision. These reports document the full analysis — land use trends, habitat quality maps, topographic constraints — and were produced as an independent consultant for the NTU team. They are available below as reference material.

**Resources:**

- Environmental Assessment Report — Land Use and Habitat Quality *(report link pending)*
- [da Fontoura, de Freitas, Silva & Possantti (2024)](https://doi.org/10.1016/j.jenvman.2024.120424) — *Equivalent biodiversity area: A novel metric for No Net Loss success in Brazil's changing biomes.* Journal of Environmental Management. *(method reference)*

As of late 2024, the current master plan in force is still Lei Complementar nº 32/2012. Amendments have been introduced (e.g., PLC nº 7/2024 for the airport area), but a full revised plan has not yet been published. My contribution to the environmental dimension ran from 2023 into early 2024, before the May 2024 floods shifted priorities.

---

### Project Info

*Contracted through Fundação Luiz Englert (UFRGS)*

{{< project_footer >}}
