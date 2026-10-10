---
author: "Iporã Possantti"
title: "Colapso da qualidade da água no sistema Guaíba"
date: 2025-05-01
featured_image: "https://photos.possantti.net/covers/floods-poa-1.jpg"
gallery_src: "https://images.possantti.net/story/B007/gallery_climasano_pt.jpeg"
gallery_title: "Registros do colapso da qualidade da água no sistema Guaíba"
gallery_caption: "Estruturando um banco de dados que evidencia o impacto na qualidade da água durante enchentes"
gallery_show: true
gallery_order: 2
project_motivation: "O que acontece com a fonte de água potável de uma cidade durante condições extremas de enchente?"
project_title: "Um banco de dados de qualidade da água durante as enchentes extremas em Porto Alegre" 
project_client: "FAPERGS"
project_intermediate: "IPH/UFRGS"
project_role: "Pesquisador de Pós-Doutorado / Curador de Dados"
project_abstract: "Projeto de pesquisa financiado pela FAPERGS (internamente batizado de CLIMASANO), liderado pelo grupo de pesquisa em saneamento do IPH/UFRGS, investigando como a enchente composta sem precedentes de 2024 degradou a qualidade da água bruta no sistema Guaíba, a principal fonte de água potável de Porto Alegre, servindo 1,3 milhão de pessoas. Entrei no projeto como pesquisador de pós-doutorado numa bolsa de um ano, atuando como curador de dados: construindo e mantendo o banco de dados espacial do projeto e organizando registros de qualidade da água de sete campanhas de monitoramento num GeoPackage consultável."
project_domain: "Recursos Hídricos"
project_category: "Pesquisa"
project_tools: ["QGIS", "Python", "GeoPackage", "Zenodo"]
project_team: ["Salatiel Wohlmuth da Silva — coordenador do projeto (IPH/UFRGS)", "Louidi Lauer Albornoz — pesquisador", "Lucia Helena Ribeiro Rodrigues — pesquisadora"]
categories: ["projects"]
tags: ["water quality", "floods", "One Health", "database", "sanitation"] 
---

{{< project_header >}}

{{< img src="https://photos.possantti.net/covers/floods-poa-1.jpg" width=100 caption="O centro de Porto Alegre submerso durante a enchente de maio de 2024: o sistema Guaíba atingiu o pico de 5,37 m, mais de meio metro acima do recorde anterior de 1941." credit="Gustavo Mansur/Palácio Piratini">}}


---

## Contexto

Entre abril e maio de 2024, a pior enchente já registrada no sul do Brasil, com ondas sincronizadas dos rios Jacuí, Taquari, Caí e Sinos, levou o sistema Guaíba a um pico histórico de 5,37 m em Porto Alegre. A infraestrutura ficou sobrecarregada por cerca de 30 dias; 2,3 milhões de pessoas foram afetadas, 185 morreram, e cinco das seis estações de tratamento de água pararam de funcionar, deixando 1,23 milhão de moradores sem água potável.

Este projeto de pesquisa (internamente batizado de CLIMASANO, liderado pelo grupo de saneamento do IPH/UFRGS e financiado pela FAPERGS) se propôs a avaliar o que a enchente fez com a qualidade da água bruta no sistema Guaíba. A equipe amostrou 92 pontos em toda a região metropolitana durante o próprio pico da enchente: dados empíricos raros, coletados enquanto o desastre ainda se desenrolava, não meses depois. Entrei como pesquisador de pós-doutorado por um ano, responsável por construir o banco de dados espacial que organiza todos os resultados analíticos.

---

## Abordagem

{{< img src="https://images.possantti.net/story/B007/sampling.jpg" width=100 caption="Campanha de amostragem durante o pico da enchente: 92 pontos georreferenciados no sistema Guaíba, de imagens de satélite a coleta de barco durante a subida do hidrograma." credit="Albornoz et al. (2026)">}}

O estudo cobriu um painel analítico incomumente amplo: parâmetros físico-químicos (pH, condutividade, turbidez, cor, sólidos suspensos, fósforo, nitrogênio amoniacal, carbono orgânico dissolvido), indicadores microbiológicos (coliformes totais, *E. coli*), ensaios de ecotoxicidade (*Daphnia magna*), genes de resistência antimicrobiana (genes de carbapenemase *bla*KPC e *bla*NDM), e vírus patogênicos (Hepatite A e E, Norovírus GI e GII, SARS-CoV-2). Mais de dez parâmetros físico-químicos e microbiológicos foram analisados nas 92 amostras individuais, com triagem molecular e virológica avançada realizada em 20 amostras compostas.

Projetei um banco de dados espacial baseado em GeoPackage organizando esses registros para consulta direta no QGIS, com camadas de origem, uma grade hexagonal para agregação espacial, e visualizações filtradas por tema e campanha. Um relatório complementar em PDF documenta os valores brutos e mapas. O banco de dados está embargado no Zenodo enquanto novas campanhas são incorporadas; ainda estou expandindo-o, com planos de migrar a grade para indexação H3.

---

## Resultados

{{< img src="https://images.possantti.net/story/B007/plots_review_300_dpi.jpg" width=100 caption="Qualidade da água durante o pico da enchente: dez parâmetros plotados contra os limites regulatórios brasileiros (classes 1–3 do CONAMA) e linhas de base históricas. A maioria excedeu os limites legais em uma a duas ordens de magnitude." credit="Albornoz, Possantti et al. (2026), Scientific Reports, CC BY-NC-ND 4.0">}}

O principal produto é um artigo na *Scientific Reports* (agosto de 2026), **"How water quality under extreme floods compromises ecosystem services, sanitation and One Health"** (título mantido no original). Durante o pico da enchente, a turbidez excedeu 470 NTU, o fósforo total atingiu 21 vezes o limite legal, e a *E. coli* superou os limites recreativos da agência ambiental dos EUA (EPA) em mais de uma ordem de magnitude. Bactérias multirresistentes e genes de carbapenemase foram detectados em zonas urbanas inundadas, e vírus patogênicos, incluindo Hepatite A, Norovírus e SARS-CoV-2, foram encontrados nas águas da enchente. O estudo fornece um dos poucos conjuntos de dados coletados *durante* o pico de uma grande enchente, e não depois.

Também produzimos um conjunto de dados sobre a **situação operacional da infraestrutura de saneamento** durante o desastre, compilado por meio de pedidos via *Lei de Acesso à Informação* a governos municipais, documentando o desempenho de sistemas de tratamento, esgoto e abastecimento nas cidades afetadas.

**Recursos:**

- [Albornoz, Possantti, et al. (2026)](https://doi.org/10.1038/s41598-026-66919-x) — *How water quality under extreme floods compromises ecosystem services, sanitation and One Health.* Scientific Reports.
- [Banco de Dados CLIMASANO no Zenodo](https://zenodo.org/records/15566197) — Banco de dados GeoPackage de qualidade da água *(embargado)*
- [Conjunto de Dados de Infraestrutura de Saneamento no Zenodo](https://zenodo.org/records/17625447) — Situação operacional dos sistemas de saneamento durante o desastre de 2024

{{< project_footer >}}
