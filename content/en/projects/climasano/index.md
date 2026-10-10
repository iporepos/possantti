---
author: "Iporã Possantti"
title: "Water quality collapse in the Guaíba system"
date: 2025-05-01
featured_image: "https://photos.possantti.net/covers/floods-poa-1.jpg"
gallery_src: "https://images.possantti.net/story/B007/gallery_climasano_en.jpeg"
gallery_title: "Records of the water quality collapse in the Guaíba system"
gallery_caption: "Structuring a database that reveals the impact on water quality during floods"
gallery_show: true
gallery_order: 2
project_motivation: "What happens to a city's drinking water source during extreme flood coditions?"
project_title: "A database of water quality during the extreme floods in Porto Alegre" 
project_client: "FAPERGS"
project_intermediate: "IPH/UFRGS"
project_role: "Postdoc Researcher / Data Curator"
project_abstract: "A FAPERGS-funded research project (internally named CLIMASANO), led by the sanitation research group at IPH/UFRGS, investigating how the unprecedented 2024 compound flood degraded raw water quality in the Guaíba system, Porto Alegre's primary drinking-water source serving 1.3 million people. I joined the project as a postdoc researcher on a one-year scholarship, working as data curator: building and maintaining the project's spatial database and organizing water quality records from seven monitoring campaigns into a queryable GeoPackage."
project_domain: "Water Resources"
project_category: "Research"
project_tools: ["QGIS", "Python", "GeoPackage", "Zenodo"]
project_team: ["Salatiel Wohlmuth da Silva — Project coordinator (IPH/UFRGS)", "Louidi Lauer Albornoz — Researcher", "Lucia Helena Ribeiro Rodrigues — Researcher"]
categories: ["projects"]
tags: ["water quality", "floods", "One Health", "database", "sanitation"] 
---

{{< project_header >}}

{{< img src="https://photos.possantti.net/covers/floods-poa-1.jpg" width=100 caption="Porto Alegre's downtown submerged during the May 2024 flood — the Guaíba system peaked at 5.37 m, over half a meter above the previous 1941 record." credit="Gustavo Mansur/Palácio Piratini">}}


---

## Context

In April–May 2024, southern Brazil's worst flood on record — synchronized waves from the Jacuí, Taquari, Caí, and Sinos rivers — pushed the Guaíba system to an all-time peak of 5.37 m in Porto Alegre. Infrastructure was overwhelmed for roughly 30 days; 2.3 million people were affected, 185 died, and five of six drinking-water treatment plants shut down, leaving 1.23 million residents without potable water.

This research project (internally named CLIMASANO, led by the sanitation group at IPH/UFRGS and funded by FAPERGS) set out to assess what the flood did to raw water quality in the Guaíba system. The team sampled 92 sites across the metropolitan area during the flood peak itself — rare empirical data collected while the disaster was still unfolding, not months after. I joined as a one-year postdoc researcher, responsible for building the spatial database that organizes all analytical results.

{{< img src="https://images.possantti.net/story/B007/sampling.jpg" width=100 caption="Sampling campaign during the flood peak: 92 georeferenced sites across the Guaíba system, from satellite imagery to boat-based collection during the rising limb of the hydrograph." credit="Albornoz, Possantti et al. (2026), Scientific Reports, CC BY-NC-ND 4.0">}}

---

## Approach

The study covered an unusually broad analytical panel — physicochemical parameters (pH, conductivity, turbidity, color, suspended solids, phosphorus, ammoniacal nitrogen, dissolved organic carbon), microbiological indicators (total coliforms, *E. coli*), ecotoxicity assays (*Daphnia magna*), antimicrobial resistance genes (carbapenemase genes *bla*KPC and *bla*NDM), and pathogenic viruses (Hepatitis A and E, Norovirus GI and GII, SARS-CoV-2). Dozens physicochemical and microbiological parameters were analyzed across the 92 individual samples, with advanced molecular and virological screening performed on 20 composite samples.

I designed a GeoPackage-based spatial database organizing these records for direct querying in QGIS, with source layers, a hexagonal binning grid for spatial aggregation, and filtered views by theme and campaign. A companion PDF report documents raw values and maps. The database is embargoed on Zenodo while new campaigns are incorporated; I'm still expanding it, with plans to migrate the grid to H3 indexing.

---

## Outcomes

The main output is a paper in *Scientific Reports* (August 2026), **"How water quality under extreme floods compromises ecosystem services, sanitation and One Health."** During peak flooding, turbidity exceeded 470 NTU, total phosphorus reached 21× the legal limit, and *E. coli* surpassed U.S. EPA recreational thresholds by more than an order of magnitude. Multidrug-resistant bacteria and carbapenemase genes were detected across flooded urban zones, and pathogenic viruses — including Hepatitis A, Norovirus, and SARS-CoV-2 — were found in the floodwaters. The study provides one of the few datasets collected *during* a major flood peak, rather than after.

We also produced a dataset on the **operational status of sanitation infrastructure** during the disaster, compiled through *Lei de Acesso à Informação* requests to municipal governments, documenting how treatment, sewage, and supply systems performed across affected cities.

{{< img src="https://images.possantti.net/story/B007/plots_review_300_dpi.jpg" width=100 caption="Water quality during the flood peak: ten parameters plotted against Brazilian regulatory limits (CONAMA classes 1–3) and historical baselines. Most exceeded legal thresholds by one to two orders of magnitude." credit="Albornoz, Possantti et al. (2026), Scientific Reports, CC BY-NC-ND 4.0">}}

**Resources:**

- [Albornoz, Possantti, et al. (2026)](https://doi.org/10.1038/s41598-026-66919-x) — *How water quality under extreme floods compromises ecosystem services, sanitation and One Health.* Scientific Reports.
- [CLIMASANO Database on Zenodo](https://zenodo.org/records/15566197) — Water quality GeoPackage database *(embargoed)*
- [Sanitation Infrastructure Dataset on Zenodo](https://zenodo.org/records/17625447) — Operational status of sanitation systems during the 2024 disaster

{{< project_footer >}}