---
author: "Iporã Possantti"
title: "Scientific hydrological concepts, illustrated"
date: 2026-10-01
featured_image: "https://photos.possantti.net/covers/main-cover.jpg"
gallery_src: "https://images.possantti.net/story/B005/gallery_tuwien_en.jpeg"
gallery_title: "Scientific hydrological concepts, illustrated"
gallery_caption: "Illustrating 500+ figures for a hydrology textbook that unifies processes across scales."
gallery_show: true
gallery_order: 1
project_motivation: "How to consistently illustrate 500+ figures for a comprehensive hydrology textbook?"
project_title: "Scientific illustration for Hydrology – unified principles and practices across scales" 
project_client: "TU Wien | Günter Blöschl"
project_intermediate: "Wiley"
project_role: "Scientific Illustrator"
project_abstract: "Technical illustration work for a comprehensive hydrology textbook authored by Günter Blöschl, Murugesu Sivapalan, and Peter Troch, to be published by Wiley. The book spans 15 chapters and requires more than 500 figures, ranging from 2D schematics to 3D rendered landscapes, all produced with an entirely open-source toolchain: Inkscape, Blender, QGIS, and Python."
project_domain: "Hydrology"
project_category: "Scientific Illustration"
project_tools: ["Inkscape", "Blender", "Python", "QGIS", "LaTeX", "Cloudflare"]
project_team: ["Günter Blöschl, Murugesu Sivapalan, Peter Troch — Authors", "Pedro Chaffe, Alberto Viglione, Ralf Merz — Reviewers", "Carolina Rezende Fachin — Software developer", "Mariana Froner — Illustrator (technical support, early project phase)"]
categories: ["projects"]
tags: ["illustration", "textbook", "hydrology", "3D rendering", "Wiley", "open source"] 
---

{{< project_header >}}

{{< img src="https://photos.possantti.net/covers/main-cover.jpg" width=100 caption="Terraced rice fields in northern Vietnam — a strong candidate photograph for the book cover. The landscape captures every hydrological scale at once: mountains, clouds, river, and the human interface with water." credit="">}}

---

## Context

This is an ongoing illustration project for **"Hydrology — unified principles and practices across scales,"** a textbook to be published by Wiley. 

The authors are among the most influential figures in modern hydrology. **Günter Blöschl** (TU Wien) holds the AGU's Robert E. Horton Medal and has shaped how we understand flood change across Europe through landmark papers in *Nature* and *Science*. **Murugesu Sivapalan** (University of Illinois) co-founded the field of socio-hydrology and led the IAHS Decade on Predictions in Ungauged Basins — both he and Blöschl received the AGU Horton Medal and the EGU Wegener Medal. **Peter Troch** (University of Arizona) has advanced hillslope hydrology and catchment-scale water balance theory. Together, they have defined modern scaling concepts in hydrology — how processes observed at one scale translate to another.

The book spans 15 chapters and requires more than 500 figures. The authors provide rough drafts — sometimes hand-drawn sketches, sometimes legacy diagrams from older publications — and I work directly with them to interpret and transform these into publication-quality scientific figures. This is not a handoff; it's an iterative, concept-driven collaboration.

{{< before_after before="https://images.possantti.net/story/B005/final-example-1.jpeg" after="https://images.possantti.net/story/B005/draft-example-1.jpeg" before_label="Final" after_label="Draft" position="33" width="100%" caption="Draft-to-figure: interpreting a rough conceptual 3D sketch into a publication-ready illustration." credit="Iporã Possantti" ruler="before">}}

---

## Approach

The scale of the project demanded a production system tier to my drawing skills. And the entire toolchain is open source.

{{< img src="https://images.possantti.net/story/B005/gallery_tuwien_en.jpeg" width=70 caption="My workflow: converting the author's drafts into a publishable scientific illustration using open-source tools" credit="Iporã Possantti" align="center">}}

**2D schematics** (process diagrams, hillslope cross-sections, soil-plant interactions) are drawn in **Inkscape**. **3D schematics** (terrain renders, subsurface layers, catchment-scale landscapes) go through **Blender** and **QGIS**. **Maps** come from **QGIS** and Inkscape — global maps were a particular challenge, since source data wasn't always consistent, so several were reconstructed from RGB classification to keep a unified palette. **Python** scripts tie the system together, automating repetitive tasks and managing a figure catalog through Markdown metadata files.

All figures follow a unified design system — consistent fonts, spacing, line weights, and a controlled set of color palettes — which is what makes 500+ figures feel like they belong to the same book rather than a collection of disconnected diagrams.

One of the harder aspects is interpreting the drafts themselves. Some are clear; others require real hydrological knowledge to decode — a rough sketch of a hillslope process might imply three or four interacting mechanisms that need to be visually separated and made legible. This isn't a job where you just "make it pretty"; you need to understand what the figure is teaching.

{{< before_after before="https://images.possantti.net/story/B005/final-example-2.jpeg" after="https://images.possantti.net/story/B005/draft-example-2.jpeg" before_label="Final" after_label="Draft" position="33" width="100%" caption="Translating multiple panels concepts into a clean, readable figure while preserving the scientific content." credit="Iporã Possantti" ruler="before">}}

{{< before_after before="https://images.possantti.net/story/B005/final-example-3.jpeg" after="https://images.possantti.net/story/B005/draft-example-3.jpeg" before_label="Final" after_label="Draft" position="33" width="100%" caption="From simple sketches to unified visual language" credit="Iporã Possantti" ruler="before">}}

---

## Outcomes

Beyond the figures, the project produced several companion tools and deliverables. 

**Galley Proof website**. This is a private review platform hosted on Cloudflare: authors get access codes by email and can browse, approve, and comment on figures by chapter, turning review from scattered email threads into something structured. Its static companion, the **figure catalog**, is a LaTeX-built PDF reference of all figures and metadata.

**LaTeX manuscript system**. A secondary deliverible for the authors: tooling enforcing consistency in symbol notation, formatting, and cross-references across 15 chapters, plus guides for the figure workflow and the LaTeX system, both delivered as PDFs.

The book is in production, figures delivered chapter by chapter. After publication, they're expected to go public for instructors and students to use in lectures and course materials, extending the book's reach beyond the printed edition.

{{< project_footer >}}