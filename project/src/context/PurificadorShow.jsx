import { createContext, useContext } from "react";
import PropTypes from "prop-types";

PurificadorShow.propTypes = {
  children: PropTypes.node,
};

const PurificadorContext = createContext();

function usePurificador() {
  return useContext(PurificadorContext); // Adicione o retorno do useContext aqui
}

const purificadores = [
  {
    id: 2,
    title: "Filtro Declorador Clor 9.3/4″ Para Ponto De Uso – Branco",
    coverImage1:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/07/filtro-declorador-clor-934-para-ponto-de-uso-branco.png",
    coverImage2:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/07/clor-9.png",
    coverImage3:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/07/907-0019-Filtro-Clor-9-IMG1.png",
    description1:
      "Instale o filtro em qualquer ponto que necessite de água limpa e sem o excesso de cloro, cheiro e gosto.Água de qualidade para preparar sucos, café, cozinhar alimentos.      Confira as características do produto abaixo.",
    description2: `Descrição
 Veja algumas das vantagens e benefícios deste produto:
 
 ✅Filtros com carvão ativado atóxico e naturais para completa filtração;
 
 ✅Fácil instalação;
 
 ✅Elimina gostos e odores desagradáveis presentes na água;
 
 ✅Vazão adequada para pias e locais de água para consumo;
 
 ✅Reduz os índices de cloro presente na água.
 
 Para saber mais sobre esse produto, acesse nosso descritivo técnico clicando aqui.`,
  },
  {
    id: 3,
    title: "Filtro Blist 5″ Transparente Hidrofiltros",
    coverImage1:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/07/filtro-blist-5-transparente-hidrofiltros.png",
    coverImage2:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/07/filtro-blist-5-transparente-hidrofiltros-1.png",
    coverImage3:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/07/filtro-blist-5-transparente-hidrofiltros.png",
    description1:
      "Instale o filtro em qualquer ponto que necessite de água limpa e sem o excesso de cloro, cheiro e gosto.Água de qualidade para preparar sucos, café, cozinhar alimentos.      Confira as características do produto abaixo.",
    description2: `Descrição
 Veja algumas das vantagens e benefícios deste produto:
 
 ✅Filtros com carvão ativado atóxico e naturais para completa filtração;
 
 ✅Fácil instalação;
 
 ✅Elimina gostos e odores desagradáveis presentes na água;
 
 ✅Vazão adequada para pias e locais de água para consumo;
 
 ✅Reduz os índices de cloro presente na água.
 
 Para saber mais sobre esse produto, acesse nosso descritivo técnico clicando aqui.`,
  },

  {
    id: 4,
    title: `Filtro Clor 5’’ Branco
    `,
    coverImage1:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/07/filtro-clor-5-branco.png",
    coverImage2:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/07/filtro-clor-5-branco-1.png",
    coverImage3:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/07/filtro-clor-5-branco-2.png",
    description1: `Instale o filtro em qualquer ponto que necessite de água limpa e sem o excesso de cloro, cheiro e gosto.Água de qualidade para preparar sucos, café, cozinhar alimentos.      Confira as características do produto abaixo.`,
    description2: `Descrição
    Veja algumas das vantagens e benefícios deste produto:
    
     
    
    ✅Filtros com carvão ativado atóxico e naturais para filtração completa;
    
    ✅Elimina gostos e odores desagradáveis presentes na água;
    
    ✅Vazão adequada para bebedouros, pias e locais de água para consumo;
    
    ✅Reduz os índices de cloro presente na água.`,
  },
  {
    id: 5,
    title: `Purificador Dual (AS2)

    `,
    coverImage1:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/07/purificador-dual-as2.png",
    coverImage2:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/07/purificador-dual-as2-1.png",
    coverImage3:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/07/purificador-dual-as2.png",
    description1: `O Purificador Dual é um modelo portátil e de fácil instalação, basta rosquear o difusor na torneira e o purificador já está instalado. Não utiliza energia elétrica e pode ser fixado na parede ou colocado sobre a pia ou balcão da cozinha. Uma solução completa para residências e escritórios por unir a pré-filtração e a purificação em um único aparelho.`,
    description2: `Descrição
    Veja alguns benefícios:
    
    ✅Baixo custo em relação a água mineral;
    
    ✅Basta rosquear o difusor na torneira, e o purificador já está instalado;
    
    ✅Você efetua a troca do elemento filtrante;
    
    ✅Não utiliza energia elétrica;
    
    ✅Design atraente;
    
    ✅Bica móvel para direcionamento da água;
    
    ✅Acompanha chave para filtro e suporte;`,
  },
  {
    id: 6,
    title: `Purificador de Água Hidrofiltros Facile

    `,
    coverImage1:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/07/purificador-de-agua-hidrofiltros-facile-branco-c3-reduz-cloro.png",
    coverImage2:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/07/purificador-de-agua-hidrofiltros-facile-branco-c3-reduz-cloro-1.png",
    coverImage3:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/07/purificador-de-agua-hidrofiltros-facile-branco-c3-reduz-cloro-2.png",
    description1: `Tenha um purificador compacto, moderno e premiado pela Brasil Design Awards na sua cozinha. Fácil instalação.`,
    description2: `Descrição
    ✅ Super compacto (AxLxP – 31,5 cm x 11,5 cm x 16cm)
    ✅ Possui proteção antimicrobiana no acionador, que elimina vírus como os causadores da herpes, conjuntivite, bronquite e pneumonia
    ✅ Acionador em cerâmica: não trava! Garantia de até 200 mil acionamentos.
    ✅ Não goteja após o uso
    ✅ Água natural, não requer Energia Elétrica
    ✅ Possui proteção UV para não desbotar
    ✅ Compatível com outros refis da Linha Facile: C5, C6 e C7
    ✅ Troca Rápida: Refil Substituído em 12s`,
  },
  {
    id: 7,
    title: `Filtro de Água Big 20 Ponto de Entrada Branco

    `,
    coverImage1:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/07/907-0013-3.png",
    coverImage2:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/07/filtro-de-agua-big-20-ponto-de-entrada-branco-1.png",
    coverImage3:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/07/907-0013-1.png",
    description1: `O Filtro BIG 20” é ideal para instalações que necessitem vazão de até 6.000 l/h de água filtrada no ponto de entrada, com retenção de sedimentos.

    Instale o filtro em qualquer ponto após o hidrômetro e antes da caixa d’água e evite constantes manutenções nas caixas d’água e cisternas devido ao acúmulo de sujeira. Este produto também evita o entupimento de tubulações.
    
    Veja mais características do produto abaixo e na aba “anexos”. um purificador compacto, moderno e premiado pela Brasil Design Awards na sua cozinha. Fácil instalação.`,
    description2: `Descrição
    O filtro Big é ideal para instalações que necessitem alta vazão de água filtrada. Instale o filtro em qualquer ponto após o hidrômetro e antes da caixa d’água. Dessa forma, evita-se constantes manutenções nas caixas d’água e cisternas, devido ao acúmulo de sujeira. Com água limpa, a tubulação fica protegida contra as corrosões provocadas pelo depósito da sujeira, além de evitar o entupimento de válvulas e outros equipamentos.
    
    Acompanha o produto, um suporte metálico para sustentar o peso do aparelho em funcionamento e uma chave para facilitar a abertura e fechamento do copo.Caso seja necessário uma maior vazão, instale os filtros em paralelo. Instale também após bombas d’água.  Possui elemento filtrante de poliéster plissado lavável.
    
    Alta eficiência até o fim da vida útil do elemento.
    Elemento filtrante plissado lavável.
    Evita o entupimento de boias, chuveiros e outros equipamentos.
    Vazão adequada a residências e pequenos condomínios.
    Não utiliza energia elétrica.
    Já vem com chave e suporte metálico para melhor instalação.
    Você pode facilmente substituir o elemento filtrante.
    Produzido em material resistente.`,
  },
  {
    id: 8,
    title: `Purificador de Água Natural GIOM

    `,
    coverImage1: "https://sw-admin.planetaagua.ind.br/images/9lQ1W4qE2DfR.webp",
    coverImage2: "https://sw-admin.planetaagua.ind.br/images/RX54cFp7V28M.webp",
    coverImage3: "https://sw-admin.planetaagua.ind.br/images/9p204foEElP7.webp",
    description1: ` O nosso lançamento vai levar todo o poder da água alcalina para a sua casa com mais economia! O Purificador de Água Natural GIOM tem refil duplo com troca fácil, permitindo a redução do cloro livre, retenção de partículas sólidas e a elevação do pH da água. 



    Além de entregar mais saúde e qualidade de vida, tem um design moderno com características exclusivas: botão que inibe a proliferação de vírus, pingadeira, arejador que evita respingos e tamanho compacto para qualquer ambiente. 
    
    
    
    O Purificador de Água GIOM não utiliza energia elétrica e pode ser instalado em bancada ou na parede!`,
    description2: `O nosso lançamento vai levar todo o poder da água alcalina para a sua casa com mais economia! O Purificador de Água Natural GIOM tem refil duplo com troca fácil, permitindo a redução do cloro livre, retenção de partículas sólidas e a elevação do pH da água. 



    Além de entregar mais saúde e qualidade de vida, tem um design moderno com características exclusivas: botão que inibe a proliferação de vírus, pingadeira, arejador que evita respingos e tamanho compacto para qualquer ambiente. 
    
    
    
    O Purificador de Água GIOM não utiliza energia elétrica e pode ser instalado em bancada ou na parede!`,
  },
  {
    id: 9,
    title: `Purificador PURE9

    `,
    coverImage1:
      "https://sw-admin.planetaagua.ind.br/images/ab889dd9484f92d5d87c95dfbc79c249.webp",
    coverImage2:
      "https://sw-admin.planetaagua.ind.br/images/d0149ef215ed185ac075caa79785cf8f.webp",
    coverImage3:
      "https://sw-admin.planetaagua.ind.br/images/6f8d69ab4e51ee16876d7e0547b5ffbf.webp",
    description1: `Produto com vida útil equivalente ao uso de 200 galões de água, gerando economia de até R$ 150/mês. São 3 etapas de filtragem: 1 camada de carvão ativado e 2 camadas de polipropileno meltblown, reduzindo impurezas e o cloro. Enquanto isso, a prata impregnada no carvão inibe a proliferação de bactérias.`,
    description2: `Produto com vida útil equivalente ao uso de 200 galões de água, gerando economia de até R$ 150/mês. São 3 etapas de filtragem: 1 camada de carvão ativado e 2 camadas de polipropileno meltblown, reduzindo impurezas e o cloro. Enquanto isso, a prata impregnada no carvão inibe a proliferação de bactérias.`,
  },
  {
    id: 10,
    title: `Purificador de Água Natural, Gelada e Alcalina GIOM

    `,
    coverImage1: "https://sw-admin.planetaagua.ind.br/images/aFAnS4bV_ozY.png",
    coverImage2: "https://sw-admin.planetaagua.ind.br/images/dFQuJvUfsj4l.png",
    coverImage3: "https://sw-admin.planetaagua.ind.br/images/ZtyWehpKo9JF.png",
    description1: `Produto com vida útil equivalente ao uso de 200 galões de água, gerando economia de até R$ 150/mês. São 3 etapas de filtragem: 1 camada de carvão ativado e 2 camadas de polipropileno meltblown, reduzindo impurezas e o cloro. Enquanto isso, a prata impregnada no carvão inibe a proliferação de bactérias.`,
    description2: `Produto com vida útil equivalente ao uso de 200 galões de água, gerando economia de até R$ 150/mês. São 3 etapas de filtragem: 1 camada de carvão ativado e 2 camadas de polipropileno meltblown, reduzindo impurezas e o cloro. Enquanto isso, a prata impregnada no carvão inibe a proliferação de bactérias.`,
  },
];
const filtros = [
  {
    id: 1,
    title: `Purificador de Água Multi Facile C3 – Reduz o Cloro`,
    coverImage1: `https://hidrofiltros.com.br/wp-content/uploads/2022/07/purificador-de-agua-multi-facile-c3-reduz-o-cloro.png`,
    coverImage2: `https://hidrofiltros.com.br/wp-content/uploads/2022/07/purificador-de-agua-multi-facile-c3-reduz-o-cloro-1.png`,
    coverImage3: `https://hidrofiltros.com.br/wp-content/uploads/2022/07/907-2452-MultiFacile-C3-IMG1.png`,
    description1: `Purificador para redução de cloro livre que pode ser instalado embaixo da pia da sua cozinha ou antes de equipamentos como máquinas de gelo e café. Acompanha cabeçote.`,
    description2: `Descrição
    O Purificador Multi Facile® C3 é a união do Refil Purificador Facile C3 – reduz o cloro com o Cap Facile® de fácil instalação¹.
    
    ✅ Com vida útil de até 10 mil litros ou 1 ano para a troca, garante água purificada contra problemas como excesso de cloro, pesticidas e outros contaminantes orgânicos, além de odores e gostos indesejáveis da água.
    
    ✅ Essa ideia de unir dois produtos em um só vem para facilitar ainda mais o seu dia a dia: instale embaixo da pia, na parede ou em MDF para fornecer água purificada na torneira principal ou em uma auxiliar, como uma faucet.
    
    ✅ Também é possível utilizar antes de filtros, purificadores e bebedouros, ou ainda máquinas de suco, gelo ou café expresso, melhorando o sabor das bebidas e a qualidade do gelo.
    
    ¹ Recomenda-se a instalação desta solução em um acesso dedicado ao consumo de água purificada, como o caso de um Faucet ou Misturador Monocomando, a fim de evitar redução na vazão de água utilizada e a rápida saturação do produto.
    
    Para saber mais sobre o produto, baixe o nosso descritivo técnico!`,
  },
  {
    id: 2,
    title: `Purificador de Água Multi Facile C7 – Elimina Bactérias`,
    coverImage1: `https://hidrofiltros.com.br/wp-content/uploads/2022/07/purificador-de-agua-multi-facile-c7-elimina-bacterias.png`,
    coverImage2: `https://hidrofiltros.com.br/wp-content/uploads/2022/07/907-2449-MultiFacile-C7-IMG1.png`,
    coverImage3: `https://hidrofiltros.com.br/wp-content/uploads/2022/07/purificador-de-agua-multi-facile-c7-elimina-bacterias-1.png`,
    description1: `O Refil C7 elimina 99,9% das bactérias reduz o excesso de cloro ativo, que pode causar gosto e odores indesejáveis.`,
    description2: `Descrição
    ✅ Filtração 3 em 1:– retém sedimentos (barro, limo, areia)– reduz o excesso de cloro ativo, que pode causar gosto e odores indesejáveis– elimina até 99,9% das bactérias presentes na água.
    Instalação:
    
    Embaixo da pia, parede, torneira principal ou em uma auxiliar (faucet)
    Antes de filtros, purificadores e bebedouros
    Antes de máquinas de suco, gelo ou café expresso – melhora o sabor do café e a qualidade do gelo.
    O que vem na Embalagem:– 1 Refil Purificador Facile® C7– 1 Cabeçote Cap Facile®
    Não acompanha mangueira de instalação.
    
    Quer saber quando usar o purificador com eficiência bacteriológica?
    Acesse nosso material sobre o assunto!
    ¹ Recomenda-se a instalação desta solução em um acesso dedicado ao consumo de água purificada, como o caso de um Faucet ou Misturador Monocomando, a fim de evitar redução na vazão de água utilizada e a rápida saturação do produto.
    Para saber mais sobre o produto, acesse o nosso descritivo técnico neste link.`,
  },
  {
    id: 3,
    title: `Refil Carbon Block Carvão Ativado 7″ – Hidrofiltros`,
    coverImage1: `https://hidrofiltros.com.br/wp-content/uploads/2022/07/refil-carbon-block-carvao-ativado-7-hidrofiltros.png`,
    coverImage2: `https://hidrofiltros.com.br/wp-content/uploads/2022/07/refil-carbon-block-carvao-ativado-7-hidrofiltros.png`,
    coverImage3: `https://hidrofiltros.com.br/wp-content/uploads/2022/07/refil-carbon-block-carvao-ativado-7-hidrofiltros.png`,
    description1: `O Refil Carbon Block 7” é compatível com carcacaças do mesmo tamanho de diversos fabricantes.

    Sua superfície blocada reduz a sujeira bem como o cloro, cheiro e o gosto desagradável da água.`,
    description2: `Descrição
    ✅Máxima eficiência na redução do cloro, bem como gosto e cheiro desagradável da água.
    
    ✅A grande quantidade de carvão ativado presente no elemento, permite que um único produto tenha a eficiência necessária para a filtração da água em seu purificador.
    
    ✅Quanto maior o tempo de contato da água com o carvão ativado, melhor o resultado da decloração.
    
    O carvão ativado é natural e atóxico.`,
  },
  {
    id: 4,
    title: `Refil Carbon Block Carvão Ativado 9.3/4″`,
    coverImage1: `https://hidrofiltros.com.br/wp-content/uploads/2022/07/Padrao-Site-907-0019.png`,
    coverImage2: `https://hidrofiltros.com.br/wp-content/uploads/2022/07/refil-carbon-block-carvao-ativado-934-1.png`,
    coverImage3: `https://hidrofiltros.com.br/wp-content/uploads/2022/07/Padrao-Site-907-0019.png`,
    description1: `Elemento filtrante produzido com carvão ativado blocado com redução de uso de plástico em sua confecção.`,
    description2: `Descrição
    A Hidrofiltros ainda adiciona duas mantas (externas e internas) para a retenção de partículas de sujeira e para evitar a passagem de carvão ativado.
    
    ✅Máxima eficiência na redução do cloro e do gosto e cheiro desagradável da água.
    
    ✅A grande quantidade de carvão ativado presente no elemento permite que um único produto tenha a eficiência necessária para a filtração da água em seu purificador. Quanto maior o tempo de contato da água com o carvão ativado, melhor o resultado da decloração.
    
    ✅ O carvão ativado é natural, atóxico.
    
    Compatível com os filtros: 907-0019 ou 907-0018  e outras carcaças de 9.3/4” do mercado.
    
    Para saber mais sobre o produto, acesse do nosso descritivo técnico neste link.`,
  },
  {
    id: 5,
    title: `Refil Cb 100
    `,
    coverImage1: `https://hidrofiltros.com.br/wp-content/uploads/2022/07/refil-cb-100.png`,
    coverImage2: `https://hidrofiltros.com.br/wp-content/uploads/2022/07/refil-cb-100.png`,
    coverImage3: `https://hidrofiltros.com.br/wp-content/uploads/2022/07/refil-cb-100.png`,
    description1: `O elemento filtrante Carbon Block é produ­zido com carvão ativado. A formação do refil é feita através da compactação do carvão, ou seja, todo o corpo é formado por carvão compactado.

    A Hidrofiltros ainda adiciona duas mantas (externa e interna) de polip­ropileno para a retenção de partículas de sujeira, além de evitar a passagem do pó de carvão.`,
    description2: `Descrição
    Máxima eficiência na redução do cloro, bem como gostos e odores desagradáveis da água. A grande quantidade de carvão ativado presente no elemento, permite que um único produto tenha a eficiência necessária para a filtração da água em seu purificador. Quanto maior o tempo de contato da água com o carvão ativado, melhor o resultado da declo­ração. O carvão ativado é natural e atóxico.
    
    Veja outras vantagens e benefícios deste produto:
    
    Refil com carvão ativado atóxico e natu­ral para uma filtração completa;
    Elimina gostos e odores desagradáveis presentes na água;
    Vazão adequada para bebedouros, pias e locais de água para consumo;
    Elemento filtrante descartável (não é indicada a retrolavagem);
    Alta eficiência na redução dos índices de cloro presente na água.`,
  },
  {
    id: 6,
    title: `Refil Pró Life

    `,
    coverImage1: `https://sw-admin.planetaagua.ind.br/images/27c7c70733981c3e81b2cf3334099be8.webp`,
    coverImage2: `https://sw-admin.planetaagua.ind.br/images/a05418a33f125a0efae4cf76a808b47d.webp`,
    coverImage3: `https://sw-admin.planetaagua.ind.br/images/a05418a33f125a0efae4cf76a808b47d.webp`,
    description1: `Código 1013A

    Compatível com Aparelhos: Soft Everest.
    
    
    
    *As marcas citadas são propriedades de seus respectivos fabricantes e aparecem apenas para demonstrar a compatibilidade deste produto.`,
    description2: `Vida Útil Aproximada:
    4000 (6 a 9 meses)
    Vazão:
    60 litros/hora
    Retenção de Partículas:
    Classe C (5 a 15μm)
    Com Redução de Cloro de Livre
    Dimensões Aproximadas:
     245x77x77 mm
    Peso Bruto Aproximado:
    0,437 kg
    Temperatura de Operação:
    1 a 40 °C
    Pressão de Operação:
    29 a 392 kPa
    Composição:
    Polipropileno, Polipropileno MeltBlown, Carvão Ativado e Borracha de Vedação (NBR)`,
  },
  {
    id: 7,
    title: `Refil Pró Life PH+

    `,
    coverImage1: `https://sw-admin.planetaagua.ind.br/images/c2c1edc834830f4f2d34c455b32b19d0.webp`,
    coverImage2: `https://sw-admin.planetaagua.ind.br/images/1d9848a62e48d2b4d0050cc39f3dd13f.webp`,
    coverImage3: `https://sw-admin.planetaagua.ind.br/images/1d9848a62e48d2b4d0050cc39f3dd13f.webp`,
    description1: `Código 1069

    Compatível com Aparelhos: Soft Everest.
    
    
    
    Observações: Adiciona sais minerais.
    
    
    
    *As marcas citadas são propriedades de seus respectivos fabricantes e aparecem apenas para demonstrar a compatibilidade deste produto.`,
    description2: `Vida Útil Aproximada:
    6000 litros (6 a 9 meses)
    Vazão:
    90 litros/hora
    Retenção de Partículas:
    Classe C (5 a 15μm)
    Com Redução de Cloro de Livre
    Dimensões do Produto:
    240x77x77 mm
    Dimensões da Embalagem:
    255x80x80 mm
    Peso Bruto Aproximado:
    0,505 kg
    Temperatura de Operação:
    1 a 40 °C
    Pressão de Operação:
    29 a 392 kPa
    Composição:
    Polipropileno, Polipropileno MeltBlown, Carvão Ativado, Dolomita e Borracha de Vedação (NBR)
    Polipropileno, Polipropileno MeltBlown, Carvão Ativado e Borracha de Vedação (NBR)`,
  },
  {
    id: 8,
    title: ` Refil Duplo GIOM


    `,
    coverImage1: `https://sw-admin.planetaagua.ind.br/images/bTzbqCQ4OP81.png`,
    coverImage2: `https://sw-admin.planetaagua.ind.br/images/NWJel99P4i2t.png`,
    coverImage3: `https://sw-admin.planetaagua.ind.br/images/NWJel99P4i2t.png`,
    description1: `Código 1151

    O refil duplo do GIOM é exclusivo para o purificador de água lançamento da Planeta Água! Com ele, você leva o poder da água alcalina para a sua casa.
    
    
    
    Com seis etapas de filtragem, o refil duplo faz a retenção do cloro ativo e de partículas sólidas da água, além de aumentar e estabilizar o pH da água.
    
    
    
    O produto torna a água alcalina devido aos minerais, como cálcio e potássio, presentes na sua composição - são as chamadas esferas alcalinizadoras. Desta forma, o processo não faz uso de sódio para elevar o pH da água, elemento que quando em excesso é prejudicial à saúde, levando a quadros de hipertensão e problemas cardiovasculares.`,
    description2: `Tecnologia empregada (Refil):
    Polipropileno, carvão ativado com prata coloidal e esferas alcalinizantes
    Pressão da água:
    29-392 kPa
    Temperatura de utilização:
    1 - 40C
    Vida útil:
    3000 L
    Retenção de partículas:
    Classe C
    Redução de cloro livre:
    Aprovado
    Eficiência bacteriológica:
    NA
    Vazão nominal / máxima:
    40 L/h
    Dimensões aproximadas:
    260x55x110
    Peso Liquido aproximado:
    595g
    Volume interno:
    0,62 L
    Descarte de água:
    10 L)`,
  },
  {
    id: 9,
    title: ` Refil FP4



    `,
    coverImage1: `https://sw-admin.planetaagua.ind.br/images/540286949845cb085c423eadcbba5089.webp`,
    coverImage2: `https://sw-admin.planetaagua.ind.br/images/9413d475d9e7bf233349072187c7ba9c.webp`,
    coverImage3: `https://sw-admin.planetaagua.ind.br/images/9413d475d9e7bf233349072187c7ba9c.webp`,
    description1: `Código 1078A

    Compatível com Aparelhos: Consul CPC31, CPC31AB, CPC31AF, CPC30AB, CPC30AF, CPB35AB.
    
    
    
    Observações: Acompanha Bateria.
    
    
    
    *As marcas citadas são propriedades de seus respectivos fabricantes e aparecem apenas para demonstrar a compatibilidade deste produto.`,
    description2: `Vida Útil Aproximada:
    2500 litros (6 a 9 meses)
    Vazão:
    50 litros/hora
    Retenção de Partículas:
    Classe C (5 a 15μm)
    Com Redução de Cloro de Livre
    Dimensões Aproximadas:
    252x53x53 mm
    Peso Bruto Aproximado:
    0,261 kg
    Temperatura de Operação:
    1 a 40 °C
    Pressão de Operação:
    29 a 392 kPa
    Composição:
    Polipropileno, Polipropileno MeltBlown, Carvão Ativado, Borracha de Vedação (NBR) e Bateria de Lítio`,
  },
  {
    id: 10,
    title: `Refil FP10




    `,
    coverImage1: `https://sw-admin.planetaagua.ind.br/images/57ae6c28d221b55bc03824a97a9fb931.webp`,
    coverImage2: `https://sw-admin.planetaagua.ind.br/images/ab40d50db7338cb6d38d89012c4d19a9.webp`,
    coverImage3: `https://sw-admin.planetaagua.ind.br/images/ab40d50db7338cb6d38d89012c4d19a9.webp`,
    description1: `Código 1135

    Compatível com Aparelhos: Consul CPB34, CPB34AB, CPB34AS, CPB34AF, CPC35, CPB36AF, CPB36AB.
    
    
    
    Observações: Acompanha Bateria.
    
    
    
    *As marcas citadas são propriedades de seus respectivos fabricantes e aparecem apenas para demonstrar a compatibilidade deste produto.`,
    description2: `Vida Útil Aproximada:
    2500 litros (6 a 9 meses)
    Vazão:
    50 litros/hora
    Retenção de Partículas:
    Classe C (5 a 15μm)
    Com Redução de Cloro Livre
    Dimensões do Produto:
    272x54x54 mm
    Dimensões da Embalagem:
    255x55x55 mm
    Peso Bruto Aproximado:
    0,281 kg
    Temperatura de Operação:
    1 a 40 °C
    Pressão de Operação:
    29 a 392 kPa
    Composição:
    Polipropileno, Polipropileno MeltBlown, Carvão Ativado, Borracha de Vedação (NBR) e Bateria de Lítio`,
  },
  {
    id: 11,
    title: `Refil E3





    `,
    coverImage1: `https://sw-admin.planetaagua.ind.br/images/e50193013fcd1ecff5c8f38521e05742.webp`,
    coverImage2: `https://sw-admin.planetaagua.ind.br/images/a345cfbf80617958a1f16596f4fcbda0.webp`,
    coverImage3: `https://sw-admin.planetaagua.ind.br/images/a345cfbf80617958a1f16596f4fcbda0.webp`,
    description1: `Código 1135

    Compatível com Aparelhos: Consul CPB34, CPB34AB, CPB34AS, CPB34AF, CPC35, CPB36AF, CPB36AB.
    
    
    
    Observações: Acompanha Bateria.
    
    
    
    *As marcas citadas são propriedades de seus respectivos fabricantes e aparecem apenas para demonstrar a compatibilidade deste produto.`,
    description2: `Vida Útil Aproximada:
    2500 litros (6 a 9 meses)
    Vazão:
    50 litros/hora
    Retenção de Partículas:
    Classe C (5 a 15μm)
    Com Redução de Cloro Livre
    Dimensões do Produto:
    272x54x54 mm
    Dimensões da Embalagem:
    255x55x55 mm
    Peso Bruto Aproximado:
    0,281 kg
    Temperatura de Operação:
    1 a 40 °C
    Pressão de Operação:
    29 a 392 kPa
    Composição:
    Polipropileno, Polipropileno MeltBlown, Carvão Ativado, Borracha de Vedação (NBR) e Bateria de Lítio`,
  },
  {
    id: 12,
    title: `Refil E3 Compacto






    `,
    coverImage1: `https://sw-admin.planetaagua.ind.br/images/db9b69e03b955d91716dd626b7a7c853.webp`,
    coverImage2: `https://sw-admin.planetaagua.ind.br/images/684e6f33169ca0018d5f2f307598e7fe.webp`,
    coverImage3: `https://sw-admin.planetaagua.ind.br/images/684e6f33169ca0018d5f2f307598e7fe.webp`,
    description1: `Código 1101

    Compatível com Aparelhos: IBBL Avanti e Mio.
    
    
    
    *As marcas citadas são propriedades de seus respectivos fabricantes e aparecem apenas para demonstrar a compatibilidade deste produto.`,
    description2: `Vida Útil Aproximada:
    2500 litros (6 a 9 meses)
    Vazão:
    60 litros/hora
    Retenção de Partículas:
    Classe C (5 a 15μm)
    Com Redução de Cloro de Livre
    Dimensões do Produto:
    188x63x63 mm
    Dimensões da Embalagem:
    193x63x63 mm
    Peso Bruto Aproximado:
    0,298 kg
    Temperatura de Operação:
    1 a 40 °C
    Pressão de Operação:
    29 a 392 kPa
    Composição:
    Polipropileno, Polipropileno MeltBlown, Carvão Ativado e Borracha de Vedação (NBR)
    Polipropileno, Polipropileno MeltBlown, Carvão Ativado, Borracha de Vedação (NBR) e Bateria de Lítio`,
  },
  {
    id: 13,
    title: `Refil FPA16







    `,
    coverImage1: `https://sw-admin.planetaagua.ind.br/images/92584a327bed540f7ef43b5d69b53f20.webp`,
    coverImage2: `https://sw-admin.planetaagua.ind.br/images/64d7582ca6181b86289d57f7910b9a11.webp`,
    coverImage3: `https://sw-admin.planetaagua.ind.br/images/64d7582ca6181b86289d57f7910b9a11.webp`,
    description1: `Código 1164A

    Compatível com Aparelhos: Libell Aqua Flex, Bebedouros de Pressão Press, Press Baby e Press Side.
    
    
    
    *As marcas citadas são propriedades de seus respectivos fabricantes e aparecem apenas para demonstrar a compatibilidade deste produto.`,
    description2: `Vida Útil Aproximada:
    4000 litros (6 a 9 meses)
    Vazão:
    50 litros/hora
    Retenção de Partículas:
    Classe D (15 a 30μm)
    Com Redução de Cloro de Livre
    Dimensões Aproximadas:
    181x59x59 mm
    Peso Bruto Aproximado:
    0,270 kg
    Temperatura de Operação:
    1 a 40 °C
    Pressão de Operação:
    29 a 392 kPa
    Composição:
    Polipropileno, Polipropileno MeltBlown, Carvão Ativado e Borracha de Vedação (NBR)`,
  },
  {
    id: 14,
    title: `Refil Pré E3








    `,
    coverImage1: `https://sw-admin.planetaagua.ind.br/images/D9Vwb2QcBxOk.png`,
    coverImage2: `https://sw-admin.planetaagua.ind.br/images/36cdfdbc9346a431056e016909e19438.webp`,
    coverImage3: `https://sw-admin.planetaagua.ind.br/images/36cdfdbc9346a431056e016909e19438.webp`,
    description1: `Código 1102A

    Compatível com Aparelhos: IBBL PDF100, PDF300 e PFN 2000.
    
    
    
    Observações: Este refil deve ser utilizado juntamente como Refil E3.
    
    
    
    *As marcas citadas são propriedades de seus respectivos fabricantes e aparecem apenas para demonstrar a compatibilidade deste produto.`,
    description2: `Vida Útil Aproximada:
    4000 litros (6 a 9 meses)
    Vazão:
    60 litros/hora
    Retenção de Partículas:
    Classe C (5 a 15μm)
    SEM Redução de Cloro de Livre
    Dimensões do Produto:
    219x63x63 mm
    Dimensões da Embalagem:
    255x63x63 mm
    Peso Bruto Aproximado:
    0,247 kg
    Temperatura de Operação:
    1 a 40 °C
    Pressão de Operação:
    29 a 392 kPa
    Composição:
    Polipropileno, Polipropileno MeltBlown e Borracha de Vedação (NBR)
    `,
  },
  {
    id: 15,
    title: `Refil Top Color








    `,
    coverImage1: `https://sw-admin.planetaagua.ind.br/images/12a4398d75ab254cc7903fa19e3c7c1f.webp`,
    coverImage2: `https://sw-admin.planetaagua.ind.br/images/992dfc2d8a44d8f2b5228f60877a8d0a.webp`,
    coverImage3: `https://sw-admin.planetaagua.ind.br/images/992dfc2d8a44d8f2b5228f60877a8d0a.webp`,
    description1: `Vida Útil Aproximada:
    4000 litros (6 a 9 meses)
    Vazão:
    60 litros/hora
    Retenção de Partículas:
    Classe C (5 a 15μm)
    Com Redução de Cloro de Livre
    Dimensões Aproximadas:
    224x60x60 mm
    Peso Bruto Aproximado:
    0,289 kg
    Temperatura de Operação:
    1 a 40 °C
    Pressão de Operação:
    29 a 392 kPa
    Composição:
    Polipropileno, Polipropileno MeltBlown, Carvão Ativado e Borracha de Vedação (NBR)
    `,
  },
  {
    id: 16,
    title: `Linha WFS








    `,
    coverImage1: `http://www.wfsfiltros.com.br/wp-content/uploads/2021/09/1-WFS_Atualizado-1024x790.png`,
    coverImage2: `https://cdn.awsli.com.br/600x700/89/89985/produto/9776309/541f37cb3b.jpg`,
    coverImage3: `https://cdn.awsli.com.br/600x700/89/89985/produto/180754755/2eb8f26776.jpg`,
    description1: `NÃO TEMOS SÓ O PREÇO BAIXO, TEMOS MUITA QUALIDADE!
    EFICÁCIA COMPROVADA
    `,
    description2: `
    Eficácia
    Antimicrobiana
    Nossos filtros são os únicos com 96% de eficácia antimicrobiana.
    
    Deixa a água muito mais leve e cristalina
    Sua água fica muito mais gostosa de se beber, afinal o seu bem estar é importante!
    
    Retenção de fungos e bactérias
    Nosso sistema de filtragem retém todos os fungos e bactérias presentes na água.
    
    aberto3
    Controle de PH
    Nossos filtros mantém um rigoroso controle de PH, para mantermos a maior qualidade na água.
    
    Melhor custo benefício para nossos clientes
    É muita qualidade e pouco preço, você ganha de todas as maneiras.
    
    Retenção de cloros e partículas
    Nosso sistema de filtragem retém todo o cloro e partículas presente na água`,
  },
  {
    id: 17,
    title: `Refil Lacqua








    `,
    coverImage1: `https://sw-admin.planetaagua.ind.br/images/UmTKhAPXoYpb.png`,
    coverImage2: `https://sw-admin.planetaagua.ind.br/images/485ee77676fe6c9821bca6e57c377e3d.webp`,
    coverImage3: `https://sw-admin.planetaagua.ind.br/images/485ee77676fe6c9821bca6e57c377e3d.webp`,
    description1: `Código 1008A

    Compatível com Aparelhos: Latina PA, Purimix, Puri Ice, Puritronic, PA335 e PA355.
    
    
    
    *As marcas citadas são propriedades de seus respectivos fabricantes e aparecem apenas para demonstrar a compatibilidade deste produto.
    `,
  },
];
const pecas = [
  {
    id: 1,
    title: `Conexão Reta Rosca Externa e Engate Rápido`,
    coverImage1: `https://sw-admin.planetaagua.ind.br/images/ddb2c2be6b87762c37eff002a1acafd3.webp`,
    coverImage2: `https://sw-admin.planetaagua.ind.br/images/b28db97f8d609e6aa752cd0663a1eab0.webp`,
    coverImage3: `https://sw-admin.planetaagua.ind.br/images/9dd1642f4b1bd4d72518542135eb7239.webp`,
    description1: `Aplicável em água potável.



  Disponível Kit com 10 unidades (Embalagem Econômica).
  
  
  
  Kit Conexão Reta Rosca 1/2" BSPT para Tubo 1/4" - Código CN214
  
  Kit Conexão Reta Rosca 1/2" BSPT para Tubo 3/8" - Código CN215
  
  Kit Conexão Reta Rosca 1/4" BSPT para 1/4" - Código CN216
  
  Kit Conexão Reta Rosca 1/4" BSPT para 3/8" - Código CN217
  
  Kit Conexão Reta Rosca 1/2" BSPT para 5/16" (8mm) - Código CN235`,
    description2: `Dimensões da Embalagem:
  145x85 mm
  Peso Bruto Aproximado:
  0,035 kg
  Temperatura de Operação:
  0 a 60°C
  Pressão de Operação:
  120 mca
  Composição:
  Corpo em Poliacetal (POM), atóxico. Oring em EPDM (Certificado FDA)`,
  },
  {
    id: 2,
    title: `Conexão em L Engate Rápido e Rosca Externa`,
    coverImage1: `https://sw-admin.planetaagua.ind.br/images/5b5891ef4da6f77c0d5d6cc4c6c2b428.webp`,
    coverImage2: `https://sw-admin.planetaagua.ind.br/images/7d1ee151cfe3475637baea26d7ec5dfa.webp`,
    coverImage3: `https://sw-admin.planetaagua.ind.br/images/839299d3d87a51bb707218e4c06408fe.webp`,
    description1: `Código CN015

    Aplicável em água potável.
    
    
    
    Disponível Kit com 10 unidades (Embalagem Econômica).
    
    
    
    Kit Conector em L BSPT de 1/4" Tubo INCH para 1/4" - Código CN224
    
    Kit Conector em L BSPT de 1/4" Tubo INCH para 3/8" - Código CN225`,
    description2: `Dimensões da Embalagem:
    145x85 mm
    Peso Bruto Aproximado:
    0,035 kg
    Temperatura de Operação:
    0 a 60°C
    Pressão de Operação:
    120 mca
    Composição:
    Corpo em Poliacetal (POM)`,
  },
  {
    id: 3,
    title: `Conexão em L Engate Rápido`,
    coverImage1: `https://sw-admin.planetaagua.ind.br/images/47cfc0106a68bdb2caf67c56763364d5.webp`,
    coverImage2: `https://sw-admin.planetaagua.ind.br/images/e46717a3a59379fab84267bf3dbd7878.webp`,
    coverImage3: `https://sw-admin.planetaagua.ind.br/images/a47b862a59b41326e926b26c28b470b9.webp`,
    description1: `Código CN013

    Aplicável em água potável.
    
    
    
    Disponível Kit com 10 unidades (Embalagem Econômica).
    
    
    
    Kit União em L Tubo de 1/4" para 1/4" - Código CN222
    
    Kit União em L Tubo de 3/8" para 3/8" - Código CN223`,
    description2: `Dimensões da Embalagem:
    182x110 mm
    Peso Bruto Aproximado:
    0,035 kg
    Temperatura de Operação:
    0 a 60°C
    Pressão de Operação:
    120 mca
    Composição:
    Corpo em Poliacetal (POM), atóxico. Oring em EPDM (Certificado FDA)`,
  },
  {
    id: 4,
    title: `Conexão Reta Engate Rápido
    `,
    coverImage1: `https://sw-admin.planetaagua.ind.br/images/d53d5535ecba6d75b6c7d4c0622c5379.webp`,
    coverImage2: `https://sw-admin.planetaagua.ind.br/images/f493224d3a58484083a9d38e89316c15.webp`,
    coverImage3: `https://sw-admin.planetaagua.ind.br/images/d53d5535ecba6d75b6c7d4c0622c5379.webp`,
    description1: `Código CN013

    Código CN017

    Aplicável em água potável.
    
    
    
    Disponível Kit com 10 unidades (Embalagem Econômica).
    
    
    
    Kit União Reta Tubo de 1/4" para 1/4" - Código CN226
    
    Kit União Reta Tubo de 3/8" para 3/8" - Código CN227
    
    Kit União Reta Redução Tubo 3/8" para 1/4" - Código CN231
    
    Kit União Reta Redução Tubo 5/16" (8mm) para 1/4" - Código CN232
    
    Kit União Reta Redução Tubo 5/16" (8mm) para 3/8" - Código CN233
    
    Kit União Reta Redução Tubo 5/16" (8mm) - Código CN234`,
    description2: `Dimensões da Embalagem:
    145x85 mm
    Peso Bruto Aproximado:
    0,035 kg
    Temperatura de Operação:
    0 a 60 °C
    Pressão de Operação:
    120 mca
    Composição:
    Corpo em Poliacetal (POM)`,
  },
  {
    id: 5,
    title: `Conexão em T Engate Rápido

    `,
    coverImage1: `https://sw-admin.planetaagua.ind.br/images/81b2bdde77517fa7eb3dde646a8f7b4a.webp`,
    coverImage2: `https://sw-admin.planetaagua.ind.br/images/430eeef8877890c880d06847690c7472.webp`,
    coverImage3: `https://sw-admin.planetaagua.ind.br/images/81b2bdde77517fa7eb3dde646a8f7b4a.webp`,
    description1: `Código CN003

    Aplicável em água potável.
    
    
    
    Disponível Kit com 10 unidades (Embalagem Econômica).
    
    
    
    Kit União em T 1/4" - Código CN212
    
    Kit União em T 3/8" - Código CN213`,
    description2: `Dimensões da Embalagem:
    145x85 mm
    Peso Bruto Aproximado:
    0,035 kg
    Temperatura de Operação:
    0 a 60 °C
    Pressão de Operação:
    120 mca
    Composição:
    Corpo em Poliacetal (POM)`,
  },
  {
    id: 6,
    title: `Válvula de Fechamento Engate Rápido


    `,
    coverImage1: `https://sw-admin.planetaagua.ind.br/images/bd44085920483c7a90fafa3aaa980f51.webp`,
    coverImage2: `https://sw-admin.planetaagua.ind.br/images/c0609063a448a92f52b691d90f66ecc7.webp`,
    coverImage3: `https://sw-admin.planetaagua.ind.br/images/3fb6785b1648cd509fce37ab280f4370.webp`,
    description1: `Código CN011

    Aplicável em água potável.
    
    
    
    Disponível Kit com 10 unidades (Embalagem Econômica).
    
    
    
    Kit Válvula de Fechamento Tubo de 1/4" para 1/4" - Código CN220
    
    Kit Válvula de Fechamento Tubo de 3/8" para 3/8" - Código CN221`,
    description2: `Dimensões da Embalagem:
    145x85 mm
    Peso Bruto Aproximado:
    0,035 kg
    Temperatura de Operação:
    0 a 60 °C
    Pressão de Operação:
    120 mca
    Composição:
    Corpo em Poliacetal (POM), atóxico. Oring em EPDM (Certificado FDA)`,
  },
  {
    id: 8,
    title: `Válvula de Fechamento



    `,
    coverImage1: `https://sw-admin.planetaagua.ind.br/images/vT8jT1b35Wcb.png`,
    coverImage2: `https://sw-admin.planetaagua.ind.br/images/TzR0Y46VgbcS.png`,
    coverImage3: `https://sw-admin.planetaagua.ind.br/images/mWuI1TrxAl4D.png`,
    description1: `Código CN051

    Aplicável em água potável.
    
    CN051 – Rosca 5/16” p/ Tubo 5/16” - Blister
    
    CN265 – Rosca 5/16” p/ Tubo 5/16” – Pacote 10 unidades`,
    description2: `Peso bruto aproximado:
    0,026 kg
    Temperatura de operação:
    0 a 60°C
    Pressão de operação:
    120 mca
    Composição:
    Poliacetal, anel o’ring e partes em inox`,
  },
];

export function PurificadorShow({ children }) {
  const getPurificador = (itemId) => {
    return purificadores.find((item) => item.id === +itemId);
  };
  const getFiltro = (itemId) => {
    return filtros.find((item) => item.id === +itemId);
  };
  const getPecas = (itemId) => {
    return pecas.find((item) => item.id === +itemId);
  };
  const stock = {
    purificadores,
    getPurificador,
    filtros,
    getFiltro,
    pecas,
    getPecas,
  };
  return (
    <PurificadorContext.Provider value={stock}>
      {children}
    </PurificadorContext.Provider>
  );
}
export { PurificadorContext, usePurificador };
