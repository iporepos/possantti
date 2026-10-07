---
author: "Iporã Possantti"
title: "Hydrology Textbook Figures"
date: 2024-01-01
featured_image: "/images/default.jpg"
gallery_src: "/images/default.jpg"
gallery_title: "Hydrology Textbook Figures"
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

{{< img src="/images/default.jpg" width=100 caption="From the Vienna authors' retreat for Hydrology – unified principles and practices across scales." credit="">}}

---

## Context

This is an ongoing illustration project for **"Hydrology – unified principles and practices across scales"**, a textbook authored by Günter Blöschl (TU Wien), Murugesu Sivapalan (University of Illinois), and Peter Troch (University of Arizona), to be published by Wiley. The book is a comprehensive treatment of catchment hydrology across 15 chapters, with reviewers including Pedro Chaffe (UFSC, Brazil), Alberto Viglione (Politecnico di Torino), and Ralf Merz (Helmholtz Centre, Germany).

The book required a single illustrator who could handle the full range of hydrological concepts — from simple water balance diagrams to 3D terrain renders showing subsurface flow paths — while maintaining visual consistency across more than 500 figures. That's where I came in. The authors provide rough drafts for each figure, sometimes hand-drawn sketches, sometimes legacy diagrams from older publications. My job is to interpret these drafts and produce publication-quality figures that are both scientifically accurate and visually coherent.

---

## Approach

The scale of the project demanded a production system, not just drawing skills. The figures fall into a few broad categories, each with its own toolchain. **2D schematics** — process diagrams, hillslope cross-sections, soil-plant interaction models — are drawn in Inkscape. **3D schematics** requiring terrain renders, subsurface layers, or catchment-scale landscapes go through Blender and QGIS. **Global and local maps** are produced in QGIS and Inkscape; the global maps were a particular challenge because source data wasn't always available at consistent quality, so in several cases the maps had to be reconstructed from RGB classification to maintain a unified color palette across the book. **Python** scripts tie the system together, automating repetitive tasks and managing the catalog of figures through Markdown metadata files.

All figures follow a unified design system: consistent fonts, spacing, line weights, and a controlled set of color palettes. The consistency system is what makes 500+ figures feel like they belong to the same book rather than a collection of disconnected diagrams.

One of the more challenging aspects is interpreting the author drafts. Some are clear; others require significant hydrological knowledge to decode — a rough sketch of a hillslope process might imply three or four interacting mechanisms that need to be visually separated and made legible. This is not a job where you can just "make it pretty" — you need to understand what the figure is trying to teach.

{{< img src="/images/default.jpg" width=100 caption="A sample of the figure categories: 2D schematics, 3D renders, maps, and data-driven plots." credit="">}}

Drag the slider below to compare a draft against its final figure — the actual draft/final pair is still pending, so this uses stand-in photos to demo the mechanism.

{{< before_after before="Photo_Possantti_2023_a" after="Photo_Possantti_2023_b" before_label="Draft" after_label="Final" width="100%" caption="Mockup of the before/after comparison slider." credit="">}}

---

## Outcomes

Beyond the figures themselves, the project has produced several companion tools and deliverables.

The **Galley Proof website** is a private review platform deployed on Cloudflare, developed together with Carolina Rezende Fachin. Authors receive access codes by email and can browse figures by chapter, approve them, and leave comments — turning the review process from scattered email threads into something structured and interactive. A static companion to this is the **figure catalog**, a LaTeX-built PDF document that serves as a printable reference of all figures and their metadata.

A secondary contract under the same project involved building a **LaTeX manuscript system** for the authors. The book is written in LaTeX, and I developed tooling to help enforce consistency in symbol notation, formatting, and cross-references across 15 chapters. This came with its own documentation: a guide for the figure production workflow and a guide for the LaTeX system, both delivered as PDF documents.

The book is currently in production, with figures being delivered chapter by chapter. After publication, the figures are expected to be made publicly available so that instructors and students can use them in lectures and course materials — extending the book's reach beyond the printed edition.

---

### Project Info

{{< project_footer >}}
