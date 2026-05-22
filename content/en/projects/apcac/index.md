---
author: "Iporã Possantti"
title: "Water conservation across the Cerrado biome"
date: 2026-05-01
featured_image: "https://photos.possantti.net/cerrado/luiz-flamarion.jpg"
gallery_src: "https://images.possantti.net/story/A030/gallery_en.jpeg"
gallery_title: "Water conservation across the Cerrado biome"
gallery_caption: "Mapping hotspots for infiltration in Brazil's largest savanna."
project_motivation: "Where should water conservation efforts focus in Brazil's largest savanna?"
project_title: "Áreas prioritárias para ações de conservação de água no Bioma Cerrado: uma avaliação em múltiplas escalas"
project_client: "MMA - Ministry of Environment and Climate Change of Brazil"
project_intermediate: "Instituto Cerrados"
project_role: "Consultant Hydrologist"
project_abstract: "A multi-scale hydrological assessment of the Cerrado biome identifying priority areas for water conservation — from hillslope infiltration dynamics to regional aquifer recharge — and translating the findings into a territorial planning framework to guide public policy."
project_domain: "Hydrology"
project_category: "Development Support"
project_tools: ["QGIS", "Python", "Inkscape", "Blender", "LaTeX"]
categories: ["projects"]
tags: ["cerrado", "watershed"]
---

{{< project_header >}}


{{< img src="https://photos.possantti.net/cerrado/luiz-flamarion.jpg" width=100 caption="Riparian wetland in the foreground with elevated plateaus rising in the background — the same landscape mosaic that defines where infiltration happens and where it doesn't." credit="© Luiz Flamarion">}}

---

## Context

The Cerrado is the most biodiverse savanna on Earth and the headwater of three of South America's largest river systems — São Francisco, Paraná, and Araguaia. Its hydrology is governed by a sharp seasonal regime: a concentrated wet season followed by a long dry period in which **rivers depend almost entirely on groundwater discharge** to keep flowing. That mechanism hinges on how much rainfall actually infiltrates into the soil rather than running off. **Land use is the control valve of the system.**

{{< img src="https://images.possantti.net/story/A030/intro_en.jpeg" width=100 caption="Conceptual landscape model of the Cerrado: plateau and valley structure driving the hydrological framework (top), alongside the three pressures on the system — native grasslands and shrublands sustaining infiltration, agricultural expansion as the main conversion vector, and perennial rivers as the visible output of baseflow generation (bottom)." credit="© Iporã Possantti, photos from WWF and Mongabay">}}

Instituto Cerrados brought me in precisely because this wasn't a typical ecological study — it required a hydrological framework grounded in **topographic controls on infiltration**, which sits at the core of my doctoral research on TOPMODEL. My role was to lead the project rationale, coordinate the technical reports, and integrate the geospatial data pipeline, working with more colleagues (prof. Guilherme Marques and hydrologist Rafael Barbedo) to ensure the outputs were both scientifically sound and policy-ready.

---

## Approach

The study was structured in three parts. The first established the **hydrological theory specific to the Cerrado**: how infiltration operates across hillslopes and plateaus, how hydrological connectivity accelerates or dampens runoff, and why the Forest Code — while protective of riparian zones — misses the upland areas where infiltration actually happens. The conceptual framing drew on the **HAND metric** (Height Above Nearest Drainage) as a proxy for saturation susceptibility and infiltration potential at the micro-scale.

{{< img src="https://images.possantti.net/story/A030/method2_en.jpeg" width=100 caption="Two core input layers for the APCAC classification: natural conservation state (top) and infiltration potential index derived from topography, soils, and geology (bottom). Each panel combines a 3D terrain render with the corresponding spatial map." credit="© Iporã Possantti">}}

The second part tested those ideas empirically using **eight reference catchments in the Federal District** spanning a conservation gradient — from nearly intact Cerrado to fully urbanized — under essentially the same precipitation regime. From the event-scale analysis of the Bananal catchment, a HAND threshold of approximately **11.5 m** was identified as a practical separator between saturation-prone zones and areas with genuine infiltration potential.

The third part scaled the analysis to the entire biome. The **APCAC classification system** (Priority Areas for Water Conservation) ranked sub-watersheds across up to 16 classes based on three dimensions: natural hydrological importance, current conservation state, and risk of service loss. The analysis was run on the high-resolution Brazilian Hydrographic Framework (BHO 5K) to preserve local-scale signals that coarser meshes systematically suppress.

---

## Outcomes

Preserved catchments produced **two to four times more streamflow** during the dry season than their degraded counterparts, even under identical precipitation — a direct, empirical case for native vegetation as water infrastructure. The HAND threshold provided a reproducible criterion for mapping infiltration-priority zones at the property and watershed scale.

{{< img src="https://images.possantti.net/story/A030/results_en.jpeg" width=100 caption="Final APCAC classification of sub-watersheds across the Cerrado biome. Color intensity encodes hydrological importance; color hue encodes recommended policy action — each class is designed to map directly onto a conservation, restoration, or risk-management instrument." credit="© Iporã Possantti">}}

At the biome scale, **geology emerged as the dominant macro-scale driver** of hydrological importance, with the Urucuia and Parecis aquifer systems ranking highest for infiltration and storage capacity. Two distinct risk frontiers were identified: the **Matopiba region** in the northeast, where large natural areas face high conversion pressure, and the **southeastern Cerrado**, where degraded landscapes combine steep slopes, erodible soils, and low cover into a compounding erosion risk.

The APCAC maps were designed to plug directly into existing instruments — from Environmental Economic Zoning and water use permits to Payment for Ecosystem Services programs such as ANA's Produtor de Água.

{{< img src="https://photos.possantti.net/A030/workshop_2026.jpeg" width=75% caption="Participants of the APCAC validation workshop, Ministry of Environment and Climate Change, Brasília, April 2026." credit="© Iporã Possantti">}}

In April 2026, the methodology was validated at a workshop held at the Ministry headquarters in Brasília, bringing together specialists from **ANA, ICMBio, IBAMA, and federal universities**. The discussion focused on whether the classification logic was robust enough to inform real policy instruments — and the consensus was that it was.

---

### Resources

| | Asset | Description |
|---|---|---|
| 📄 | [Technical Report](https://doi.org/10.5281/zenodo.17981330) | Full report (PDF) and LaTeX source — Possantti et al., 2025, Zenodo |
| 🗄️ | [Geospatial Dataset](https://doi.org/10.5281/zenodo.18867492) | Input rasters, intermediate index layers, final priority maps, and classified catchments — Zenodo |
| 💻 | [Processing Code](https://github.com/iporepos/apcac) | QGIS-based Python workflow for APCAC classification — GitHub |
| 📖 | [Documentation](https://iporepos.github.io/apcac/) | Method documentation and usage guide — GitHub Pages |

---

### Project Info

{{< project_footer >}}