---
author: "Iporã Possantti"
title: "Water quality collapse in the Guaíba system"
date: 2025-05-01
featured_image: "https://photos.possantti.net/covers/floods-poa-1.jpg"
gallery_src: "https://photos.possantti.net/covers/floods-poa-1.jpg"
gallery_title: "Water quality collapse in the Guaíba system"
gallery_caption: "Flood-driven contamination exceeded WHO thresholds by orders of magnitude"
project_motivation: "What happens to a city's drinking water when every river in the basin floods at once?"
project_title: "Water quality assessment during the extreme floods in Porto Alegre" 
project_client: "FAPERGS"
project_intermediate: "IPH/UFRGS"
project_role: "Postdoc Researcher / Data Curator"
project_abstract: "A FAPERGS-funded research project (internally named CLIMASANO), led by the sanitation research group at IPH/UFRGS, investigating how the unprecedented 2024 compound flood degraded raw water quality in the Guaíba system — Porto Alegre's primary drinking-water source serving 1.3 million people. I joined the project as a postdoc researcher on a one-year scholarship, working as data curator: building and maintaining the project's spatial database and organizing water quality records from seven monitoring campaigns into a queryable GeoPackage."
project_domain: "Water Resources"
project_category: "Research"
project_tools: ["QGIS", "Python", "GeoPackage", "Zenodo"]
project_team: ["Salatiel Wohlmuth da Silva — Project coordinator (IPH/UFRGS)", "Louidi Lauer Albornoz — Researcher", "Lucia Helena Ribeiro Rodrigues — Researcher"]
categories: ["projects"]
tags: ["water quality", "floods", "One Health", "database", "sanitation"] 
---

{{< project_header >}}

{{< img src="https://photos.possantti.net/covers/floods-poa-1.jpg" width=100 caption="The Guaíba system during the 2024 flood." credit="">}}

---

## Context

In April–May 2024, southern Brazil's worst flood on record — synchronized waves from the Jacuí, Taquari, Caí, and Sinos rivers — pushed the Guaíba system to an all-time peak of 5.35 m in Porto Alegre, over half a meter above the 1941 record. Infrastructure was overwhelmed for roughly 30 days; 2.3 million people were affected, 185 died, and drinking water was severely compromised.

This research project — internally named CLIMASANO, led by the sanitation group at IPH/UFRGS and funded by FAPERGS — assesses how the flood altered raw water quality in the Guaíba system, Porto Alegre's primary drinking-water source for 1.3 million people. The team ran seven monitoring campaigns over one year (May 2024–April 2025) across 22 sites and six supply systems. I joined as a one-year postdoc researcher, data curator and database manager.

---

## Approach

I designed a GeoPackage-based spatial database organizing the water quality records — physicochemical, nutrient, metal, and microbiological indicators — from the seven campaigns, structured for direct querying in QGIS Database Manager, with source layers, a hexagonal grid, and filtered views, plus a companion PDF report of raw values and maps.

The database is embargoed on Zenodo, available only within the group while new campaigns are added; I'm still expanding it, with plans to migrate the grid to H3 indexing.

{{< img src="/images/default.jpg" width=100 caption="Water quality database hex grid, showing spatial aggregation of sampling results across the Guaíba system." credit="">}}

---

## Outcomes

The main output is a paper in *Scientific Reports* (August 2026), **"How water quality under extreme floods compromises ecosystem services, sanitation and One Health,"** co-authored with Louidi Albornoz, Salatiel Wohlmuth da Silva, and colleagues: during peak flooding, turbidity, metals, and fecal contamination exceeded Brazilian and WHO thresholds by one to two orders of magnitude, and water quality hadn't fully recovered even a year later.

We also produced a dataset on the **operational status of sanitation infrastructure** during the disaster, compiled through *Lei de Acesso à Informação* requests to municipal governments — documenting how treatment, sewage, and supply systems performed across affected cities, evidence rarely assembled but essential for understanding infrastructure resilience.

**Resources:**

- [Albornoz, Possantti, et al. (2026)](https://doi.org/10.1038/s41598-026-66919-x) — *How water quality under extreme floods compromises ecosystem services, sanitation and One Health.* Scientific Reports.
- [CLIMASANO Database on Zenodo](https://zenodo.org/records/15566197) — Water quality GeoPackage database *(embargoed)*
- [Sanitation Infrastructure Dataset on Zenodo](https://zenodo.org/records/17625447) — Operational status of sanitation systems during the 2024 disaster

---

### Project Info

{{< project_footer >}}
