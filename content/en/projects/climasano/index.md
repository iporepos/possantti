---
author: "Iporã Possantti"
title: "Water quality assessment during the extreme floods in Porto Alegre"
date: 2025-05-01
featured_image: "/images/default.jpg"
gallery_src: "/images/default.jpg"
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

{{< img src="/images/default.jpg" width=100 caption="The Guaíba system during the 2024 flood." credit="">}}

---

## Context

In April–May 2024, southern Brazil experienced its most severe flood on record. Synchronized flood waves from the Jacuí, Taquari, Caí, and Sinos rivers pushed the Guaíba system to an all-time peak of 5.35 m in Porto Alegre — surpassing the 1941 record by over half a meter. Urban drainage, sewage networks, and water treatment infrastructure were overwhelmed for roughly 30 days. Over 2.3 million people were affected, 185 died, and the city's drinking-water supply was severely compromised.

This broader research project — internally named CLIMASANO — is led by the sanitation research group at IPH/UFRGS and funded by FAPERGS, set up to systematically assess how this compound flood altered raw water quality in the Guaíba system — Porto Alegre's primary source of drinking water for 1.3 million people. The team conducted seven monitoring campaigns over one year (May 2024 to April 2025), covering 22 sampling sites across six water supply systems. I joined the project as a postdoc researcher on a one-year scholarship, contributing as data curator and database manager.

---

## Approach

I designed and built a GeoPackage-based spatial database to organize the full set of water quality records — physicochemical parameters, nutrients, metals, and microbiological indicators — collected across the seven campaigns. The database is structured for direct querying in QGIS Database Manager and includes source layers (glossary, sampling points, campaigns), a hexagonal grid for spatial aggregation, and query-like views that combine thematic and campaign filters. A companion PDF report documents the raw values and spatial maps.

The database is currently under embargo on Zenodo, available only to researchers within the group while new sampling campaigns are being incorporated. I am still maintaining and expanding it, with plans to migrate the spatial grid to H3 indexing for better interoperability.

{{< img src="/images/default.jpg" width=100 caption="Water quality database hex grid, showing spatial aggregation of sampling results across the Guaíba system." credit="">}}

---

## Outcomes

The main scientific output is a paper published in *Scientific Reports* (August 2026): **"How water quality under extreme floods compromises ecosystem services, sanitation and One Health"**, co-authored with Louidi Albornoz, Salatiel Wohlmuth da Silva, and colleagues. The study showed that during peak flooding, turbidity, metals, and fecal contamination exceeded Brazilian regulatory limits and WHO risk thresholds by one to two orders of magnitude — and, critically, that water quality had not fully recovered even one year after the event.

We also produced a structured dataset on the **operational status of sanitation infrastructure** during the disaster, compiled through *Lei de Acesso à Informação* (freedom of information) requests to municipal governments. This dataset documents how water treatment, sewage collection, and supply systems actually performed across affected cities — a piece of evidence that is rarely assembled but essential for understanding infrastructure resilience under extreme events.

**Resources:**

- Paper in Scientific Reports (2026) — *How water quality under extreme floods compromises ecosystem services, sanitation and One Health* *(DOI pending)*
- [CLIMASANO Database on Zenodo](https://zenodo.org/records/15566197) — Water quality GeoPackage database *(embargoed)*
- [Sanitation Infrastructure Dataset on Zenodo](https://zenodo.org/records/17625447) — Operational status of sanitation systems during the 2024 disaster

---

### Project Info

{{< project_footer >}}
