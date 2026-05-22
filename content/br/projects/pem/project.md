---
author: "Iporã Possantti"
title: "Planejamento Espacial Marinho no Sul do Brasil"
date: 2026-04-20
featured_image: "https://photos.possantti.net/A001/ian-stewart.jpg"
gallery_src: "https://photos.possantti.net/A001/ian-stewart.jpg"
gallery_title: "Planejamento Espacial Marinho no Sul do Brasil"
gallery_caption: "Construindo uma visão compartilhada para o uso sustentável do oceano no sul do Brasil."
project_motivation: "Como planejar o espaço ocêanico entre usuários concorrentes?"
project_title: "Planejamento Espacial Marinho no Sul do Brasil"
project_client: "BNDES"
project_intermediate: "Codex / UFRGS / UFSC"
project_role: "Analista Espacial & Modelador Ambiental"
project_abstract: "O PEM Sul é o projeto-piloto nacional do Planejamento Espacial Marinho no Brasil, cobrindo a região marinha sul nos estados do Paraná, Santa Catarina e Rio Grande do Sul. O trabalho desenvolve indicadores espacialmente explícitos — incluindo um Índice de Desempenho de Uso composto — para subsidiar a gestão sustentável e multissetorial do oceano."
project_domain: "Planejamento Ambiental"
project_category: "Suporte ao Desenvolvimento"
project_tools: ["Python", "R", "QGIS", "InVEST"]
categories: ["projetos"]
tags: ["pem", "serviços ecossistêmicos"]
---

{{< project_header >}}

{{< img src="https://photos.possantti.net/A001/ian-stewart.jpg" width=100 caption="O desafio do PEM consiste em alocar o espaço do oceano de forma justa e sustentável." credit="(c) Ian Stewart" >}}

---

## Contexto

O **Planejamento Espacial Marinho (PEM)** é um processo público e participativo de distribuição das atividades humanas no espaço marinho — com objetivos ecológicos, econômicos e sociais simultâneos. No Brasil, o oceano responde por cerca de **19% do PIB** em uma jurisdição de **5,7 milhões de km²**. Gerir esse espaço sem acumular conflitos exige mais do que regulação setorial; exige um marco espacial.

O programa brasileiro de **PEM** é coordenado pela CIRM sob decreto federal de 2025, organizado em quatro regiões marinhas. A **região sul** (Paraná, Santa Catarina e Rio Grande do Sul) é o projeto-piloto nacional, com 53% de conclusão ao final de 2025 — à frente de todas as demais regiões e definindo o precedente metodológico para o restante do país.

---

## Abordagem

O PEM Sul precisava de alguém capaz de integrar **modelagem espacial e planejamento ambiental** — não apenas executar fluxos de trabalho em SIG, mas projetar um arcabouço analítico ecologicamente fundamentado, reprodutível e defensável num contexto multisetorial. É nessa interseção que a maior parte do meu trabalho se situa.

O núcleo metodológico é o ***IDUSE-Mar*** — um índice espacial composto que sintetiza três dimensões do desempenho do uso do oceano: Benefício, Risco Habitacional e Conflito, expresso como *D = B / (R × C)*. A lógica é intencional: uma política que maximiza benefício ignorando risco ecológico ou conflito setorial sempre terá desempenho inferior a uma que mantém esses denominadores baixos. O **Índice de Benefício** mapeia o valor econômico dos usuários do oceano para os hubs costeiros; o **Índice de Risco de Habitat** adapta o framework InVEST HRA para impacto cumulativo e não linear sobre habitats; o **Índice de Conflito** quantifica a incompatibilidade espacial par a par por meio de superfícies de sobreposição ponderadas. Os três são calculados célula a célula e podem ser agregados às Unidades de Gestão.

Meu papel cobre todo o pipeline analítico: preparação dos dados, implementação dos modelos em Python e R, e simulação de cenários de linha de base, business-as-usual e ecodesenvolvimento — totalmente scriptado para garantir reprodutibilidade.

---

## Resultados

O projeto está em andamento. Os métodos e scripts estão documentados e arquivados publicamente — novos produtos serão adicionados conforme disponibilidade.

[Documentação PEM](https://doi.org/10.5281/zenodo.17475714)

---

{{< project_footer >}}