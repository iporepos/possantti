---
author: "Iporã Possantti"
title: "Avaliação do capital natural para o plano diretor de Canela"
date: 2024-09-01
featured_image: "https://photos.possantti.net/covers/canela-rodrigo-menezes-pexels.jpeg"
gallery_src: "https://images.possantti.net/story/A015/gallery_canela_pt.jpeg"
gallery_title: "Avaliação do capital natural em Canela"
gallery_caption: "Mapeando qualidade de habitat para fundamentar uma estratégia de impacto zero na Serra Gaúcha."
gallery_order: 3
project_motivation: "Como colocar um número no capital natural de um município, e usá-lo para equilibrar desenvolvimento e conservação?"
project_title: "Revisão do Plano Diretor de Canela (RS), Fase Diagnóstico" 
project_client: "Prefeitura Municipal de Canela"
project_intermediate: "NTU/UFRGS | Fundação Luiz Englert"
project_role: "Analista Ambiental"
project_abstract: "Avaliação de serviços ecossistêmicos e capital natural para a revisão do Plano Diretor de Canela. O principal produto foi um mapa de qualidade de habitat usando o InVEST e a métrica de Área de Biodiversidade Equivalente (EBA), fornecendo a base científica para um mecanismo de compensação de impacto zero no município. O trabalho também cobriu índices de vegetação, indicadores hidrológicos, modelagem de balanço hídrico, estimativa de perda de solo, mapeamento de risco geológico e hidrológico, e análise de capacidade de suporte de cursos d'água."
project_domain: "Planejamento Ambiental"
project_category: "Consultoria"
project_tools: ["QGIS", "Python", "plans", "InVEST", "MapBiomas", "OpenStreetMap"]
project_team: ["Fernando Dornelles — IPH/UFRGS", "Tatiana Silva — Instituto de Geociências/UFRGS", "Ana McIntosh — Fulbright fellow (MIT)", "Benamy Turkienicz — coordenador NTU (UFRGS)"]
categories: ["projects"]
tags: ["ecosystem services", "natural capital", "habitat quality", "no net loss", "InVEST", "urban planning"] 
---

{{< project_header >}}

{{< img src="https://photos.possantti.net/covers/canela-rodrigo-menezes-pexels.jpeg" width=100 caption="Cascata do Caracol, um dos marcos mais icônicos de Canela, alimentada por cursos d'água que nascem na área urbana." credit="">}}

---

## Contexto

Canela está numa zona de transição na Serra Gaúcha, entre os vales florestados da bacia do Rio dos Sinos ao sul e o planalto dominado por silvicultura que drena para o Rio Caí ao norte. Com a revisão do Plano Diretor do município, a dimensão ambiental precisava de mais do que uma lista de áreas protegidas. Era necessária uma contabilidade espacial do capital natural do município: onde os serviços ecossistêmicos estão sendo produzidos, onde estão sendo perdidos, e como o desenvolvimento pode ser estruturado para que o valor ecológico não seja simplesmente apagado.

Fui contratado como consultor independente para produzir essa avaliação, trabalhando sob o Núcleo de Tecnologia Urbana (NTU) da UFRGS. O projeto rodou do final de 2023 até 2024, cobrindo tanto Canela quanto, numa fase posterior, a área de expansão urbana planejada ("Nova Centralidade") na vizinha Gramado.

---

## Abordagem

A avaliação foi estruturada em torno de duas classes de serviços ecossistêmicos: os relacionados à **biodiversidade** e os relacionados à **água**. Para cada uma, produzi indicadores espaciais que podiam ser avaliados em múltiplas escalas, da totalidade do município até lotes urbanos individuais.

{{< img src="https://images.possantti.net/story/A015/gallery_canela_en.jpeg" width=90 caption="Qualidade de habitat em Canela: do núcleo urbano degradado à Mata Atlântica preservada, com a Área de Biodiversidade Equivalente traduzindo valor ecológico numa métrica sobre a qual planejadores podem agir." align="center" credit="">}}

No lado da biodiversidade, o principal produto foi um **mapa de qualidade de habitat** usando o modelo InVEST, construído a partir de um mapa de uso do solo aprimorado que combinou a classificação do MapBiomas com a geometria viária do OpenStreetMap. O modelo estima como o habitat se degrada em função da proximidade a ameaças (estradas, áreas urbanas, agricultura), usando parâmetros derivados de especialistas a partir de um artigo científico que liderei (Fontoura et al., 2024).

Os resultados revelaram um claro gradiente norte-sul: a silvicultura no norte apresentou valores de qualidade de habitat em torno de 0,1, enquanto remanescentes de Mata Atlântica no sul atingiram 0,8. Esse gradiente se tornou a base para propor um **mecanismo de compensação de impacto zero** usando a métrica de **Área de Biodiversidade Equivalente (EBA)**: um único número que traduz qualidade de habitat em uma área equivalente, dando aos planejadores uma unidade de contabilidade legível para esquemas de compensação.

Complementando a avaliação de habitat, também produzi mapas de vegetação via NDVI (Sentinel-2, 10 m), um Índice de Umidade Topográfica (TWI) para identificar áreas propensas à saturação relevantes para a drenagem urbana, mapas anuais de balanço hídrico a partir de modelagem hidrológica (usando o modelo PLANS), e estimativas de perda de solo (USLE-M).

{{< img src="https://images.possantti.net/story/A015/canela_landuse_1.gif" width=100 caption="Três décadas de mudança de uso do solo em Canela: perda florestal e expansão da silvicultura animadas a partir da série temporal do MapBiomas." credit="">}}

No lado do risco, a avaliação incluiu **mapeamento de suscetibilidade a deslizamentos baseado em SHALSTAB** e **mapeamento de suscetibilidade a inundações baseado em HAND** tanto para a área urbana de Canela quanto para a zona de expansão de Gramado, além de uma análise de **capacidade de suporte de cursos d'água** para diluição de esgoto sob diferentes cenários de crescimento populacional.

Todos os produtos foram entregues como GeoPackages e rasters TIFF, produtos intermediários projetados para que a equipe do NTU os incorporasse ao plano diretor mais amplo sem reprocessamento.

---

## Resultados

O trabalho produziu quatro relatórios técnicos cobrindo todo o escopo da avaliação ambiental, disponíveis abaixo. A principal contribuição é a prova de conceito da EBA, que demonstra como a estratégia de impacto zero pode ser operacionalizada na escala municipal, incluindo exemplos de compensação para empreendimentos típicos.

No final de 2024, o plano em vigor em Canela permanecia sendo a Lei Complementar nº 32/2012. Minha contribuição foi de 2023 a 2024, antes das enchentes de maio de 2024 mudarem as prioridades em toda a região.

**Relatórios:**

- [Diagnóstico de Serviços Ecossistêmicos](https://documents.possantti.net/A015/report_A015_canela_consultores.pdf) — NDVI, qualidade de habitat, TWI, balanço hídrico, perda de solo e delimitação de UGPA
- [Área de Biodiversidade Equivalente](https://documents.possantti.net/A015/report_A015_canela_NNL.pdf) — prova de conceito para compensação de impacto zero em Canela
- [Avaliação de Risco](https://documents.possantti.net/A015/report_A015_canela_risk_waterquality.pdf) — suscetibilidade a deslizamentos e inundações, capacidade de suporte de cursos d'água para Canela e Gramado
- [Considerações Técnicas](https://documents.possantti.net/A015/report_A015_canela_comments.pdf) — notas complementares sobre indicadores e unidades de gestão ambiental

**Referência metodológica:**

- [Fontoura, de Freitas, Silva & Possantti (2024)](https://doi.org/10.1016/j.jenvman.2024.120540) — *Equivalent biodiversity area: A novel metric for No Net Loss success in Brazil's changing biomes.* Journal of Environmental Management.

{{< project_footer >}}
