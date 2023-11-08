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
    id: 1,
    title: "Ultramax",
    coverImage1:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/10/UltramaxFrentePreto.png",
    coverImage2:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/10/Ultramax45%C2%B0Preto.png",
    coverImage3:
      "https://hidrofiltros.com.br/wp-content/uploads/2022/10/UltramaxFrenteBranco.png",
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
];

export function PurificadorShow({ children }) {
  const getPurificador = (itemId) => {
    return purificadores.find((item) => item.id === +itemId);
  };
  const getFiltro = (itemId) => {
    return filtros.find((item) => item.id === +itemId);
  };
  const stock = { purificadores, getPurificador, filtros, getFiltro };
  return (
    <PurificadorContext.Provider value={stock}>
      {children}
    </PurificadorContext.Provider>
  );
}
export { PurificadorContext, usePurificador };
