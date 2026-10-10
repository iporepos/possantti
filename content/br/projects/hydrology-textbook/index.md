---
author: "Iporã Possantti"
title: "Conceitos científicos de hidrologia, ilustrados"
date: 2026-10-01
featured_image: "https://photos.possantti.net/covers/main-cover.jpg"
gallery_src: "https://images.possantti.net/story/B005/gallery_tuwien_pt.jpeg"
gallery_title: "Conceitos científicos de hidrologia, ilustrados"
gallery_caption: "Ilustrando mais de 500 figuras para um livro didático de hidrologia que unifica processos entre escalas."
gallery_show: true
gallery_order: 1
project_motivation: "Como ilustrar de forma consistente mais de 500 figuras para um livro didático abrangente de hidrologia?"
project_title: "Ilustração científica para Hydrology – unified principles and practices across scales" 
project_client: "TU Wien | Günter Blöschl"
project_intermediate: "Wiley"
project_role: "Ilustrador Científico"
project_abstract: "Trabalho de ilustração técnica para um livro didático abrangente de hidrologia escrito por Günter Blöschl, Murugesu Sivapalan e Peter Troch, a ser publicado pela Wiley. O livro abrange 15 capítulos e requer mais de 500 figuras, de esquemas 2D a paisagens renderizadas em 3D, todas produzidas com um conjunto de ferramentas inteiramente de código aberto: Inkscape, Blender, QGIS e Python."
project_domain: "Hidrologia"
project_category: "Ilustração Científica"
project_tools: ["Inkscape", "Blender", "Python", "QGIS", "LaTeX", "Cloudflare"]
project_team: ["Günter Blöschl, Murugesu Sivapalan, Peter Troch — autores", "Pedro Chaffe, Alberto Viglione, Ralf Merz — revisores", "Carolina Rezende Fachin — desenvolvedora de software", "Mariana Froner — ilustradora (suporte técnico, fase inicial do projeto)"]
categories: ["projects"]
tags: ["illustration", "textbook", "hydrology", "3D rendering", "Wiley", "open source"] 
---

{{< project_header >}}

{{< img src="https://photos.possantti.net/covers/main-cover.jpg" width=100 caption="Terraços de arroz no norte do Vietnã: uma forte candidata fotográfica para a capa do livro. A paisagem captura todas as escalas hidrológicas de uma vez: montanhas, nuvens, rio, e a interface humana com a água." credit="">}}

---

## Contexto

Este é um projeto de ilustração em andamento para **"Hydrology — unified principles and practices across scales"** (título mantido no original), um livro didático a ser publicado pela Wiley. 

Os autores estão entre as figuras mais influentes da hidrologia moderna. **Günter Blöschl** (TU Wien) detém a Medalha Robert E. Horton da AGU e ajudou a moldar como entendemos a mudança no regime de enchentes na Europa através de artigos marcantes nas revistas *Nature* e *Science*. **Murugesu Sivapalan** (University of Illinois) cofundou o campo da sociohidrologia e liderou a Década de Previsões em Bacias Não Monitoradas da IAHS: tanto ele quanto Blöschl receberam a Medalha Horton da AGU e a Medalha Wegener da EGU. **Peter Troch** (University of Arizona) avançou a hidrologia de encostas e a teoria de balanço hídrico na escala de bacia. Juntos, eles definiram os conceitos modernos de escala em hidrologia: como processos observados numa escala se traduzem para outra.

O livro abrange 15 capítulos e requer mais de 500 figuras. Os autores fornecem rascunhos brutos, às vezes esboços feitos à mão, às vezes diagramas legados de publicações mais antigas, e trabalho diretamente com eles para interpretar e transformá-los em figuras científicas prontas para publicação. Isso não é uma simples entrega; é uma colaboração iterativa e orientada por conceitos.

{{< before_after before="https://images.possantti.net/story/B005/final-example-1.jpeg" after="https://images.possantti.net/story/B005/draft-example-1.jpeg" before_label="Final" after_label="Rascunho" position="33" width="100%" caption="Do rascunho à figura: interpretando um esboço conceitual 3D bruto numa ilustração pronta para publicação." credit="Iporã Possantti" ruler="before">}}

---

## Abordagem

A escala do projeto exigiu um sistema de produção num patamar além da minha habilidade de desenho. E todo o conjunto de ferramentas é de código aberto.

{{< img src="https://images.possantti.net/story/B005/gallery_tuwien_pt.jpeg" width=70 caption="Meu fluxo de trabalho: convertendo os rascunhos dos autores numa ilustração científica publicável usando ferramentas de código aberto" credit="Iporã Possantti" align="center">}}

**Esquemas 2D** (diagramas de processo, seções transversais de encostas, interações solo-planta) são desenhados no **Inkscape**. **Esquemas 3D** (renderizações de terreno, camadas subsuperficiais, paisagens em escala de bacia) passam por **Blender** e **QGIS**. **Mapas** vêm do **QGIS** e Inkscape: mapas globais foram um desafio particular, já que os dados de origem nem sempre eram consistentes, então vários foram reconstruídos a partir de classificação RGB para manter uma paleta unificada. Scripts em **Python** amarram o sistema, automatizando tarefas repetitivas e gerenciando um catálogo de figuras por meio de arquivos de metadados em Markdown.

Todas as figuras seguem um sistema de design unificado: fontes consistentes, espaçamento, espessuras de linha e um conjunto controlado de paletas de cores, o que faz com que mais de 500 figuras pareçam pertencer ao mesmo livro, em vez de uma coleção de diagramas desconectados.

Um dos aspectos mais difíceis é interpretar os próprios rascunhos. Alguns são claros; outros exigem conhecimento hidrológico real para decodificar: um esboço bruto de um processo de encosta pode implicar três ou quatro mecanismos interagindo que precisam ser visualmente separados e tornados legíveis. Este não é um trabalho onde você apenas "deixa bonito"; é preciso entender o que a figura está ensinando.

{{< before_after before="https://images.possantti.net/story/B005/final-example-2.jpeg" after="https://images.possantti.net/story/B005/draft-example-2.jpeg" before_label="Final" after_label="Rascunho" position="33" width="100%" caption="Traduzindo conceitos de múltiplos painéis numa figura limpa e legível, preservando o conteúdo científico." credit="Iporã Possantti" ruler="before">}}

---

## Resultados

Além das figuras, o projeto produziu diversas ferramentas e produtos complementares.

{{< before_after before="https://images.possantti.net/story/B005/final-example-3.jpeg" after="https://images.possantti.net/story/B005/draft-example-3.jpeg" before_label="Final" after_label="Rascunho" position="33" width="100%" caption="De esboços simples à linguagem visual unificada" credit="Iporã Possantti" ruler="before">}}

**Site Galley Proof**. Esta é uma plataforma de revisão privada hospedada no Cloudflare: os autores recebem códigos de acesso por e-mail e podem navegar, aprovar e comentar figuras por capítulo, transformando a revisão de threads de e-mail dispersas em algo estruturado. Seu complemento estático, o **catálogo de figuras**, é uma referência em PDF construída em LaTeX com todas as figuras e metadados.

**Sistema de manuscrito em LaTeX**. Um produto secundário para os autores: ferramentas garantindo consistência na notação de símbolos, formatação e referências cruzadas ao longo de 15 capítulos, além de guias para o fluxo de trabalho de figuras e para o sistema LaTeX, ambos entregues como PDFs.

O livro está em produção, com figuras entregues capítulo por capítulo. Após a publicação, elas devem se tornar públicas para que instrutores e estudantes as usem em aulas e materiais de curso, estendendo o alcance do livro para além da edição impressa.

{{< project_footer >}}
