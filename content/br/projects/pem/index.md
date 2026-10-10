---
author: "Iporã Possantti"
title: "Planejamento espacial marinho no sul do Brasil"
date: 2026-04-20
featured_image: "https://photos.possantti.net/covers/tramandai-pier-1.jpg"
gallery_src: "https://images.possantti.net/story/A001/gallery_pemsul_en.jpeg"
gallery_title: "Planejamento espacial marinho no sul do Brasil"
gallery_caption: "Definindo uma visão compartilhada para o uso sustentável do oceano no sul do Brasil."
gallery_show: true
gallery_order: 3
project_motivation: "Como alocar o espaço oceânico entre usuários concorrentes?"
project_title: "Planejamento espacial marinho no sul do Brasil"
project_client: "BNDES"
project_intermediate: "Codex / UFRGS / UFSC"
project_role: "Analista Espacial e Modelador Ambiental"
project_abstract: "O PEM Sul é o projeto-piloto nacional de planejamento espacial marinho no Brasil, cobrindo a região marinha sul nos estados do Paraná, Santa Catarina e Rio Grande do Sul. O trabalho desenvolve indicadores espacialmente explícitos (incluindo um Índice de Desempenho composto) para apoiar a gestão sustentável e multissetorial do oceano."
project_domain: "Planejamento Ambiental"
project_category: "Suporte ao Desenvolvimento"
project_tools: ["Python", "R", "QGIS", "InVEST"]
categories: ["projects"]
tags: ["msp", "ecosystem services"]
---

{{< project_header >}}

{{< img src="https://photos.possantti.net/covers/tramandai-pier-1.jpg" width=100 caption="O desafio do PEM-Sul é alocar o espaço oceânico no sul do Brasil de forma justa e sustentável" credit="(c) Ian Stewart" >}}

---

## Contexto

O **planejamento espacial marinho (PEM)** é um processo público e participativo de distribuição de atividades humanas no espaço marinho, visando simultaneamente objetivos ecológicos, econômicos e sociais. No Brasil, o oceano responde por cerca de **19% do PIB** numa jurisdição nacional de **5,7 milhões de km²**. Gerir esse espaço sem acumular conflitos exige mais do que regulação setorial; exige um arcabouço espacial.

O programa brasileiro de PEM, o **Planejamento Espacial Marinho**, é coordenado pela CIRM sob decreto federal de 2025, organizado em quatro regiões marinhas. A **região sul** (Paraná, Santa Catarina e Rio Grande do Sul) é o projeto-piloto nacional, com 53% de conclusão no final de 2025, à frente de todas as demais regiões e estabelecendo o precedente metodológico para o restante do país.

---

## Abordagem

O projeto PEM-Sul precisava de alguém capaz de integrar **modelagem espacial e planejamento ambiental**: não apenas executar fluxos de trabalho em SIG, mas projetar um arcabouço analítico ecologicamente fundamentado, reprodutível e defensável num contexto multissetorial. É nessa interseção que a maior parte do meu trabalho se situa.

O núcleo metodológico é o ***IDUSE-Mar***, um índice espacial composto que sintetiza três dimensões do desempenho de uso do oceano: Benefício, Risco de Habitat e Conflito, expresso como *D = B / (R × C)*. A lógica é intencional: uma política que maximiza benefício ignorando risco ecológico ou conflito setorial sempre terá desempenho inferior a uma que mantém esses denominadores baixos. O **Índice de Benefício** mapeia o valor econômico dos usuários do oceano para os polos costeiros; o **Índice de Risco de Habitat** adapta o arcabouço InVEST HRA para impacto cumulativo e não linear sobre habitats; o **Índice de Conflito** quantifica a incompatibilidade espacial par a par por meio de superfícies de sobreposição ponderadas. Os três são calculados célula a célula e podem ser agregados a Unidades de Gestão.

Meu papel cobre todo o pipeline analítico: preparação de dados, implementação de modelos em Python e R, e simulação de cenários sob configurações de linha de base, business-as-usual e ecodesenvolvimento, totalmente scriptado para garantir reprodutibilidade.

---

## Resultados

O projeto está em andamento. Métodos e scripts estão documentados e arquivados publicamente; novos produtos serão adicionados conforme ficarem disponíveis.

[Documentação do PEM](https://doi.org/10.5281/zenodo.17475714)

---

{{< project_footer >}}
