---
author: "Iporã Possantti"
title: "Conservação da água no bioma Cerrado"
date: 2026-05-01
featured_image: "https://photos.possantti.net/cerrado/luiz-flamarion.jpg"
gallery_src: "https://images.possantti.net/story/A030/gallery_en.jpeg"
gallery_title: "Conservação da água no bioma Cerrado"
gallery_caption: "Mapeamento de hotspots de infiltração no maior bioma savânico do Brasil."
project_motivation: "Onde concentrar os esforços de conservação de água no maior bioma savânico do Brasil?"
project_title: "Áreas prioritárias para ações de conservação de água no Bioma Cerrado: uma avaliação em múltiplas escalas"
project_client: "MMA - Ministério do Meio Ambiente e Mudança do Clima"
project_intermediate: "Instituto Cerrados"
project_role: "Hidrólogo Consultor"
project_abstract: "Avaliação hidrológica multiescalar do bioma Cerrado para identificação de áreas prioritárias para a conservação da água — da dinâmica de infiltração nas encostas à recarga de aquíferos regionais — traduzindo os resultados em um framework de planejamento territorial para orientar políticas públicas."
project_domain: "Hidrologia"
project_category: "Suporte ao Desenvolvimento"
project_tools: ["QGIS", "Python", "Inkscape", "Blender", "LaTeX"]
categories: ["projects"]
tags: ["cerrado", "watershed"]
---

{{< project_header >}}


{{< img src="https://photos.possantti.net/cerrado/luiz-flamarion.jpg" width=100 caption="Vereda em primeiro plano com platôs elevados ao fundo — o mesmo mosaico de paisagem que define onde a infiltração ocorre e onde ela não ocorre." credit="© Luiz Flamarion">}}

---

## Contexto

O Cerrado é a savana mais biodiversa do planeta e a nascente de três dos maiores sistemas fluviais da América do Sul — São Francisco, Paraná e Araguaia. Sua hidrologia é governada por um regime sazonal marcado: uma estação chuvosa concentrada seguida por um longo período seco, durante o qual os **rios dependem quase inteiramente do escoamento de base** para manter suas vazões. Esse mecanismo está diretamente condicionado à fração da chuva que efetivamente infiltra no solo em vez de escoar superficialmente. **O uso do solo é a válvula de controle do sistema.**

{{< img src="https://images.possantti.net/story/A030/intro_en.jpeg" width=100 caption="Modelo conceitual da paisagem do Cerrado: estrutura de platôs e vales condicionando o funcionamento hidrológico (topo), ao lado das três dimensões de pressão sobre o sistema — campos e cerrados nativos sustentando a infiltração, expansão agrícola como principal vetor de conversão, e rios perenes como resultado visível da geração de escoamento de base (base)." credit="© Iporã Possantti, fotos de WWF e Mongabay">}}

O Instituto Cerrados me convidou justamente porque este não era um estudo ecológico típico — exigia um framework hidrológico fundamentado nos **controles topográficos da infiltração**, que é o núcleo da minha pesquisa de doutorado sobre TOPMODEL. Meu papel foi coordenar a estrutura conceitual do projeto, os relatórios técnicos e a integração do pipeline de dados geoespaciais, em colaboração com o prof. Guilherme Marques e o hidrólogo Rafael Barbedo, garantindo que os resultados fossem ao mesmo tempo cientificamente sólidos e aplicáveis à política pública.

---

## Abordagem

O estudo foi estruturado em três partes. A primeira estabeleceu a **teoria hidrológica específica ao Cerrado**: como a infiltração opera nas encostas e platôs, como a conectividade hidrológica acelera ou amorte o escoamento, e por que o Código Florestal — embora protetivo das zonas ripárias — deixa de reconhecer as áreas de encosta onde a infiltração de fato ocorre. A base conceitual apoiou-se na **métrica HAND** (Height Above Nearest Drainage) como proxy da suscetibilidade à saturação e do potencial de infiltração na microescala.

{{< img src="https://images.possantti.net/story/A030/method2_en.jpeg" width=100 caption="Duas camadas centrais para a classificação APCAC: índice de conservação natural (topo) e índice de potencial de infiltração derivado de topografia, solos e geologia (base). Cada painel combina uma renderização 3D do terreno com o mapa espacial correspondente." credit="© Iporã Possantti">}}

A segunda parte testou essas hipóteses empiricamente a partir de **oito bacias de referência no Distrito Federal** distribuídas em um gradiente de conservação — de Cerrado praticamente intacto a ambientes totalmente urbanizados — sob o mesmo regime de precipitação. A análise evento a evento da bacia do Bananal identificou um limiar topográfico de HAND em torno de **11,5 m** como separador prático entre zonas suscetíveis à saturação e áreas com genuíno potencial de infiltração.

A terceira parte escalou a análise para o bioma inteiro. O **sistema de classificação APCAC** (Áreas Prioritárias para Conservação da Água) hierarquizou sub-bacias em até 16 classes a partir de três dimensões: importância hidrológica natural, grau de conservação atual e risco de perda de serviços ecossistêmicos. A análise foi conduzida na malha detalhada das Bacias Hidrográficas Ottocodificadas (BHO 5K) para preservar os sinais de escala local que malhas mais grosseiras suprimem sistematicamente.

---

## Resultados

Bacias preservadas produziram **duas a quatro vezes mais vazão** durante a estação seca do que suas contrapartes degradadas, mesmo sob precipitação idêntica — um argumento empírico direto para a vegetação nativa como infraestrutura hídrica. O limiar HAND forneceu um critério reprodutível para mapear zonas prioritárias de infiltração na escala da propriedade e da bacia.

{{< img src="https://images.possantti.net/story/A030/results_en.jpeg" width=100 caption="Classificação final das sub-bacias do bioma Cerrado pelo método APCAC. A intensidade da cor codifica a importância hidrológica; o matiz codifica a ação de política recomendada — cada classe é projetada para se conectar diretamente a um instrumento de conservação, restauração ou gestão de risco." credit="© Iporã Possantti">}}

Na escala do bioma, a **geologia emergiu como o principal fator de macroescala** estruturando a importância hidrológica, com os aquíferos Urucuia e Parecis ocupando as classes de maior capacidade de infiltração e armazenamento. Duas fronteiras de risco distintas foram identificadas: a **região do Matopiba**, no nordeste, onde grandes áreas naturais enfrentam forte pressão de conversão, e o **Cerrado Sudeste**, onde paisagens degradadas combinam declividade acentuada, solos erodíveis e baixa cobertura vegetal em um risco de erosão sinérgico.

Os mapas APCAC foram concebidos para ser incorporados diretamente aos instrumentos existentes — do Zoneamento Ecológico-Econômico e outorgas de uso da água a programas de Pagamento por Serviços Ambientais como o Produtor de Água da ANA.

{{< img src="https://photos.possantti.net/A030/workshop_2026.jpeg" width=75% caption="Participantes do workshop de validação do APCAC, Ministério do Meio Ambiente e Mudança do Clima, Brasília, abril de 2026." credit="© Iporã Possantti">}}

Em abril de 2026, a metodologia foi validada em um workshop realizado na sede do Ministério em Brasília, reunindo especialistas da **ANA, ICMBio, IBAMA e universidades federais**. A discussão girou em torno de se a lógica de classificação era robusta o suficiente para informar instrumentos reais de política — e o consenso foi que era.

---

### Recursos

| | Produto | Descrição |
|---|---|---|
| 📄 | [Relatório Técnico](https://doi.org/10.5281/zenodo.17981330) | Relatório completo (PDF) e código-fonte LaTeX — Possantti et al., 2025, Zenodo |
| 🗄️ | [Base de Dados Geoespaciais](https://doi.org/10.5281/zenodo.18867492) | Rasters de entrada, camadas intermediárias de índices, mapas finais de prioridade e bacias classificadas — Zenodo |
| 💻 | [Código de Processamento](https://github.com/iporepos/apcac) | Workflow Python para QGIS com a classificação APCAC — GitHub |
| 📖 | [Documentação](https://iporepos.github.io/apcac/) | Documentação do método e guia de uso — GitHub Pages |

---

### Informações do Projeto

{{< project_footer >}}