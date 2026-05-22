---
author: "Iporã Possantti"
title: "Marine Spatial Planning in Southern Brazil"
date: 2026-04-20
featured_image: "https://photos.possantti.net/A001/ian-stewart.jpg"
gallery_src: "https://photos.possantti.net/A001/ian-stewart.jpg"
gallery_title: "Marine Spatial Planning in Southern Brazil"
gallery_caption: "Defining a shared vision for the sustainable use of the southern Brazilian ocean."
project_motivation: "How to allocate the ocean space among competing users?"
project_title: "Marine Spatial Planning in Southern Brazil"
project_client: "BNDES"
project_intermediate: "Codex / UFRGS / UFSC"
project_role: "Spatial Analyst & Environmental Modeler"
project_abstract: "PEM Sul is the national pilot for Marine Spatial Planning in Brazil, covering the southern marine region across Paraná, Santa Catarina, and Rio Grande do Sul. The work develops spatially explicit indicators — including a composite Use Performance Index — to support sustainable, multi-sector ocean management."
project_domain: "Environmental Planning"
project_category: "Development Support"
project_tools: ["Python", "R", "QGIS", "InVEST"]
categories: ["projects"]
tags: ["msp", "ecosystem services"]
---

{{< project_header >}}

{{< img src="https://photos.possantti.net/A001/ian-stewart.jpg" width=100 caption="The challenge of PEM is to allocate the ocean space in a fair and sustainable manner" credit="(c) Ian Stewart" >}}

---

## Context

**Marine Spatial Planning (MSP)** is a public, participatory process for distributing human activities across marine space — targeting ecological, economic, and social objectives simultaneously. In Brazil, the ocean accounts for roughly **19% of GDP** across some **5.7 million km²** of national jurisdiction. Managing that space without accumulating conflicts requires more than sectoral regulation; it requires a spatial framework.

The Brazilian MSP program — *Planejamento Espacial Marinho*, or **PEM** — is coordinated by CIRM under a 2025 federal decree, organized into four marine regions. The **southern region** (Paraná, Santa Catarina, and Rio Grande do Sul) is the national pilot, standing at 53% completion as of late 2025 — ahead of all other regions and setting the methodological precedent for the rest of the country.

---

## Approach

PEM Sul needed someone who could bridge **spatial modeling and environmental planning** — not just run GIS workflows, but design an analytical framework that is ecologically grounded, reproducible, and defensible in a multi-stakeholder setting. That intersection is where most of my work has lived.

The methodological core is the ***IDUSE-Mar*** — a composite spatial index synthesizing three dimensions of ocean use performance: Benefit, Habitat Risk, and Conflict, expressed as *D = B / (R × C)*. The logic is intentional: a policy that maximizes benefit while ignoring ecological risk or sectoral conflict will always underperform one that keeps those denominators low. The **Benefit Index** maps economic value from ocean users to coastal hubs; the **Habitat Risk Index** adapts the InVEST HRA framework for cumulative, nonlinear habitat impact; the **Conflict Index** quantifies pairwise spatial incompatibility through weighted user-overlap surfaces. All three are computed cell-by-cell and can be upscaled to Management Units.

My role covers the full analytical pipeline: data preparation, model implementation in Python and R, and scenario simulation under baseline, business-as-usual, and eco-development configurations — fully scripted for reproducibility.

---

## Outcomes

The project is ongoing. Methods and scripts are publicly documented and archived — further outputs will be added as they become available.

[PEM Documentation](https://doi.org/10.5281/zenodo.17475714)

---

{{< project_footer >}}