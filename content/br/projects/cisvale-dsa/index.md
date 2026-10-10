---
author: "Iporã Possantti"
title: "Diagnóstico ambiental no vale do Rio Pardo"
date: 2025-01-01
featured_image: "https://photos.possantti.net/covers/santa-cruz-1.png"
gallery_src: "https://photos.possantti.net/covers/santa-cruz-1.png"
gallery_title: "Diagnóstico ambiental no vale do Rio Pardo"
gallery_caption: "Mapeando risco e vulnerabilidade a inundações e deslizamentos em 17 municípios."
gallery_show: false
project_motivation: "Depois das enchentes de 2024, como mapear risco e vulnerabilidade em 17 municípios sem orçamento para trabalho de campo?"
project_title: "Avaliação de risco e vulnerabilidade para o diagnóstico socioambiental do Vale do Rio Pardo" 
project_client: "CISVALE"
project_intermediate: "UNISC"
project_role: "Consultor Remoto — Análise de Risco"
project_abstract: "Avaliação de risco e vulnerabilidade ambiental para o Diagnóstico Socioambiental (DSA) de 17 municípios no Vale do Rio Pardo, Rio Grande do Sul, coordenado pelo consórcio CISVALE. Atuando como consultor remoto contratado pela UNISC, produzi mapas de suscetibilidade a inundações e deslizamentos para cada município usando Height Above Nearest Drainage, análise topográfica, e dados de endereçamento do CNEFE para cruzar risco com exposição populacional, transformando suscetibilidade em vulnerabilidade."
project_domain: "Hidrologia"
project_category: "Consultoria"
project_tools: ["Python", "QGIS", "LaTeX"]
project_team: ["UNISC — Instituição líder (análise geológica, social, trabalho de campo)"]
categories: ["projects"]
tags: ["floods", "landslides", "hazard", "vulnerability", "CNEFE", "HAND"] 
---

{{< project_header >}}

{{< img src="https://photos.possantti.net/covers/santa-cruz-1.png" width=100 caption="A paisagem do Vale do Rio Pardo, Rio Grande do Sul." credit="">}}

---

## Contexto

As enchentes de 2024 devastaram o Vale do Rio Pardo, Rio Grande do Sul. Em resposta, o CISVALE (o Consórcio Intermunicipal de Serviços do Vale do Rio Pardo, representando 17 municípios) encomendou um amplo Diagnóstico Socioambiental (DSA), contratado através da Universidade de Santa Cruz do Sul (UNISC), que reuniu uma equipe multidisciplinar abrangendo as dimensões geológica, social e ambiental.

Entrei como consultor remoto contratado pela UNISC para o mapeamento de risco e vulnerabilidade. O próprio desastre de 2024 forneceu dados incomumente ricos (mapas de extensão de enchente, inventários de cicatrizes de deslizamento) para validar os modelos sem necessidade de campanhas de campo.

---

## Abordagem

O objetivo: mapas de risco e vulnerabilidade para todos os 17 municípios, numa abordagem rápida baseada em dados já disponíveis, em vez de levantamentos de campo.

Para **risco de inundação**, usei uma abordagem multiescalar de **Height Above Nearest Drainage (HAND)**. Um único mapa HAND depende da área de limiar que define a rede de drenagem: limiares pequenos capturam todo curso d'água, limiares grandes só os rios principais, então nenhum sozinho dá o quadro completo. Calcular o HAND em múltiplas escalas capturou a exposição de cada local a pequenos cursos d'água, canais médios e grandes rios ao mesmo tempo: uma residência 3 m acima de um arroio e 15 m acima do rio principal tem um risco muito diferente de uma na mesma elevação acima de apenas um desses.

Para **risco de deslizamento**, usei o modelo **SHALSTAB**, combinando geometria de declividade com um modelo hidrológico simplificado para estimar suscetibilidade a rupturas rasas, calibrado por comparação visual com cicatrizes de deslizamento mapeadas em 2024: uma validação por opinião de especialista adequada ao escopo do projeto em nível de planejamento.

O passo crítico foi transformar suscetibilidade em **vulnerabilidade** cruzando os mapas de risco com o **CNEFE**, o cadastro de endereços do IBGE, estimando domicílios dentro de cada zona de risco, município por município. Uma encosta suscetível sem ninguém nela é um problema diferente de uma vizinhança densa.

Produzi relatórios padronizados e reprodutíveis usando **Python** e **LaTeX**, entregues à UNISC para integração com suas análises geológicas, sociais e de campo nos produtos finais do DSA.

{{< img src="/images/default.jpg" width=100 caption="Mapa de suscetibilidade a inundações derivado de HAND multiescalar, com pontos de endereço do CNEFE sobrepostos para avaliar vulnerabilidade." credit="">}}

---

## Resultados

O DSA, aprovado pelo CISVALE em setembro de 2023, resultou num contrato com a UNISC iniciado em 2024 (brevemente suspenso durante a enchente de maio de 2024); audiências públicas começaram em abril de 2026, rodando município por município como parte de uma iniciativa mais ampla do CISVALE: revisando planos de saneamento, a Agenda Ambiental 2030, e um Comitê Pró-Clima regional para adaptação climática.

Meus produtos (camadas de risco e vulnerabilidade mais relatórios por município) foram incorporados pela UNISC aos documentos oficiais do DSA.

{{< project_footer >}}
