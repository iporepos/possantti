---
author: "Iporã Possantti"
title: "Gramado Expansion Plan"
date: 2024-01-01
featured_image: "/images/default.jpg"
gallery_src: "/images/default.jpg"
gallery_title: "Gramado Expansion Plan"
gallery_caption: "Defining a hydrologically-grounded buffer zone for urban expansion on a sensitive plateau."
project_motivation: "How do you define environmental boundaries for urban expansion on a plateau with sensitive wetlands and a conservation unit?"
project_title: "Environmental assessment for Gramado's urban expansion plan" 
project_client: "Prefeitura Municipal de Gramado"
project_intermediate: "NTU/UFRGS"
project_role: "Environmental Analyst"
project_abstract: "Environmental characterization for Gramado's planned urban expansion to the north, conducted through the NTU at UFRGS. I provided land use assessment, topographic analysis, drainage mapping using high-resolution DEM (~1 m), and a hydrologically-grounded proposal for the buffer zone of a conservation unit — arguing that catchment boundaries, not arbitrary distances, should define the protection area."
project_domain: "Environmental Planning"
project_category: "Consulting"
project_tools: ["QGIS", "Python", "plans", "MapBiomas", "OpenStreetMap"]
project_team: ["Benamy Turkienicz — NTU coordinator (UFRGS)"]
categories: ["projects"]
tags: ["urban planning", "expansion", "hydrology", "buffer zone", "wetlands", "drainage"] 
---

{{< project_header >}}

{{< img src="/images/default.jpg" width=100 caption="Gramado's plateau landscape, Serra Gaúcha." credit="">}}

---

## Context

Gramado, a major tourism hub in the Serra Gaúcha and neighbor to Canela, was planning a significant urban expansion northward. The traditional urban zone was reaching saturation, and the municipality saw the northern plateau as the next development frontier — with plans for resorts and tourism-oriented infrastructure driven by the region's strong visitor economy.

The expansion area sits on a plateau near a conservation unit (Parque dos Pinheiros) and includes a lake that provides important ecosystem services — scenic value, recreation — but was already showing signs of water quality degradation. The planning question was not just *where* to expand, but how to define meaningful environmental protection boundaries that could coexist with development. I was brought in through the NTU at UFRGS to provide the environmental characterization, following a similar approach to the Canela master plan work.

---

## Approach

The municipality provided a high-resolution DEM (~1 m) from a local topographic survey, which was unusually detailed for this kind of planning work. I used it to map the **drainage network** across the plateau and identify areas of potential **saturation and wetland formation** — critical information on a relatively flat plateau where surface water accumulation patterns aren't obvious from visual inspection alone.

The central piece of the analysis was proposing a **hydrologically-grounded buffer zone** for the conservation unit. Rather than using an arbitrary distance from the park boundary, I argued that the buffer should follow **catchment boundaries** — protecting the full drainage area that feeds the lake, regardless of whether it fell inside the old urban perimeter, the new expansion perimeter, or the conservation unit itself. Whatever affects the catchment affects the lake. Since the lake was already showing signs of sewage contamination despite being surrounded by green areas, protecting only the immediate shoreline wouldn't solve the underlying water quality problem.

This catchment-based buffer zone captured parts of both the existing and proposed urban zones, meaning development restrictions would apply across administrative boundaries — a stronger protection framework than a simple distance ring. The approach also supported the city's own interest in using the expansion as an opportunity to establish compensation and environmental protection strategies, rather than treating development and conservation as strictly opposed.

I also ran the standard **land use assessment** (MapBiomas + OpenStreetMap, same blending approach as in Canela) and **topographic analysis** for terrain constraints. All outputs were delivered as GeoPackages and TIFF rasters for integration into the NTU team's broader planning products.

{{< img src="/images/default.jpg" width=100 caption="Catchment-based buffer zone proposal, derived from the high-resolution drainage network of the plateau." credit="">}}

---

## Outcomes

The deliverables were technical reports produced as an independent consultant for the NTU team, serving as intermediate environmental layers for the broader expansion plan. As with the Canela project, the reports and spatial data were designed to be ingested by the NTU team into their official planning products.

**Resources:**

- Environmental Assessment Report — Gramado Expansion *(report link pending)*

---

### Project Info

*Contracted through Fundação Luiz Englert (UFRGS)*

{{< project_footer >}}
