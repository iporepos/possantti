---
author: "Iporã Possantti"
title: "Illustrations for Sivapalan et al. Hydrology Textbook"
date: 2026-10-01
featured_image: "https://photos.possantti.net/covers/main-cover.jpg"
gallery_src: "https://photos.possantti.net/covers/main-cover.jpg"
gallery_title: "Illustrations for Sivapalan et al. Hydrology Textbook"
gallery_caption: "Illustrating 500+ figures for a hydrology textbook that unifies processes across scales."
project_motivation: "How do you illustrate 500+ figures for a comprehensive hydrology textbook?"
project_title: "Scientific illustration for Hydrology – unified principles and practices across scales" 
project_client: "TU Wien"
project_intermediate: "Wiley"
project_role: "Scientific Illustrator"
project_abstract: "Technical illustration work for a comprehensive hydrology textbook authored by Günter Blöschl, Murugesu Sivapalan, and Peter Troch, to be published by Wiley. The book spans 15 chapters and requires more than 500 figures — ranging from 2D schematics to 3D rendered landscapes — all following a unified visual system for spacing, fonts, and color schemes. I work from rough author drafts, interpreting and translating hydrological concepts into publication-quality figures using a suite of tools including Inkscape, Blender, QGIS, and Python."
project_domain: "Hydrology"
project_category: "Scientific Illustration"
project_tools: ["Inkscape", "Blender", "Python", "QGIS", "LaTeX", "Cloudflare"]
project_team: ["Günter Blöschl, Murugesu Sivapalan, Peter Troch — Authors", "Pedro Chaffe, Alberto Viglione, Ralf Merz — Reviewers", "Carolina Rezende Fachin — Software developer (Galley Proof website)", "Mariana Froner — Illustrator (technical support, early project phase)"]
categories: ["projects"]
tags: ["illustration", "textbook", "hydrology", "3D rendering", "Wiley"] 
---

{{< project_header >}}

{{< img src="https://photos.possantti.net/covers/main-cover.jpg" width=100 caption="From the Vienna authors' retreat for Hydrology – unified principles and practices across scales." credit="">}}

---

## Context

This is an ongoing illustration project for **"Hydrology – unified principles and practices across scales,"** a textbook by Günter Blöschl (TU Wien), Murugesu Sivapalan (University of Illinois), and Peter Troch (University of Arizona), to be published by Wiley — a comprehensive treatment of catchment hydrology across 15 chapters.

The book needed a single illustrator spanning the full range of hydrological concepts — from water balance diagrams to 3D terrain renders of subsurface flow paths — while keeping visual consistency across 500+ figures. Authors provide rough drafts, sometimes sketches, sometimes legacy diagrams; my job is interpreting these into figures that are scientifically accurate and visually coherent.

---

## Approach

The scale demanded a production system, not just drawing skills. **2D schematics** (process diagrams, hillslope cross-sections, soil-plant interaction) go in Inkscape; **3D schematics** (terrain renders, subsurface layers, catchment-scale landscapes) go through Blender and QGIS; **maps** come from QGIS and Inkscape — global ones were a particular challenge, since source data wasn't always consistent, so several were reconstructed from RGB classification to keep a unified palette. **Python** scripts tie it together, automating tasks and managing the figure catalog via Markdown metadata.

All figures follow a unified design system — fonts, spacing, line weights, a controlled palette set — making 500+ figures feel like one book, not a collection of disconnected diagrams.

One of the harder parts is interpreting the drafts: some are clear, others require real hydrological knowledge to decode — a rough sketch might imply three or four interacting mechanisms that need visual separation and legibility. This isn't a job where you just "make it pretty" — you need to understand what the figure is teaching.

Drag the slider below to compare a draft against its final figure — the actual draft/final pair is still pending, so this uses stand-in photos to demo the mechanism.

{{< before_after before="https://images.possantti.net/story/B005/final-example-1.jpeg" after="https://images.possantti.net/story/B005/draft-example-1.jpeg" before_label="Final" after_label="Draft" position="33" width="100%" caption="Before and after of image treatment." credit="" ruler="before">}}

{{< before_after before="https://images.possantti.net/story/B005/final-example-2.jpeg" after="https://images.possantti.net/story/B005/draft-example-2.jpeg" before_label="Final" after_label="Draft" position="33" width="100%" caption="Before and after of image treatment." credit="" ruler="before">}}

{{< before_after before="https://images.possantti.net/story/B005/final-example-3.jpeg" after="https://images.possantti.net/story/B005/draft-example-3.jpeg" before_label="Final" after_label="Draft" position="33" width="100%" caption="Before and after of image treatment." credit="" ruler="before">}}

---

## Outcomes

Beyond the figures, the project produced several companion tools and deliverables.

The **Galley Proof website** is a private review platform on Cloudflare, built with Carolina Rezende Fachin: authors get access codes by email and can browse, approve, and comment on figures by chapter — turning review from scattered email threads into something structured. Its static companion, the **figure catalog**, is a LaTeX-built PDF reference of all figures and metadata.

A secondary contract built a **LaTeX manuscript system** for the authors — tooling enforcing consistency in symbol notation, formatting, and cross-references across 15 chapters — plus guides for the figure workflow and the LaTeX system, both delivered as PDFs.

The book is in production, figures delivered chapter by chapter. After publication, they're expected to go public for instructors and students to use in lectures and course materials — extending the book's reach beyond the printed edition.

---

### Project Info

{{< project_footer >}}
