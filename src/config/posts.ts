export type PostProps = {
  id: number;
  title: string;
  description: string;
  contents: {
    subTitle: string;
    descriptions: string[];
    image?: string;
  }[];
  image: string;
  slug: string;
  date: string;
};

export const reversedPosts: PostProps[] = [
  {
    id: 1,
    title:
      'Equilibrium: Uma Crítica à Supressão das Emoções e sua Relevância Atual',
    description:
      'Neste artigo, vamos falar sobre o filme "Equilibrium" (2002) de maneira simples e direta. Vamos analisar como o filme trata da proibição das emoções em uma sociedade distópica e como isso se relaciona com questões atuais. Vamos explorar como as mensagens do filme se aplicam ao nosso mundo hoje, especialmente em temas como controle governamental e liberdade pessoal. Prepare-se para uma análise direta e fácil de entender sobre o filme e suas implicações para nós.',
    contents: [
      {
        subTitle: 'Equilibrium: Despertar ou Perecer?',
        descriptions: [
          'Imagina um mundo sufocado pela opressão, onde a liberdade é apenas uma memória distante e a emoção é um crime. Este é o sombrio universo de Equilibrium, um espelho distorcido da nossa própria realidade, onde os poderosos controlam cada aspecto das nossas vidas, desde o que pensamos até o que sentimos.',
          'No centro dessa distopia está uma droga sinistra chamada "Prozium", uma arma do Estado para suprimir nossas emoções mais profundas e manter-nos sob controle. Sob o disfarce da segurança e da estabilidade, somos forçados a renunciar à nossa humanidade, enquanto os governantes desfrutam de seus privilégios em torres de marfim.',
          'Os "Grammaton Clerics" são os carrascos desse regime cruel, fanáticos devotos da tirania que caçam implacavelmente aqueles que se atrevem a sentir. Eles são os cães de guarda de uma elite corrupta, prontos para esmagar qualquer sinal de resistência com violência implacável.',
          'Mas o que torna Equilibrium verdadeiramente assustador não é apenas o seu retrato sombrio da opressão, mas sim sua assustadora semelhança com o mundo em que vivemos. Olhe ao seu redor: a vigilância em massa, a manipulação da mídia, a supressão da dissidência - tudo isso ecoa as realidades distorcidas do filme.',
          'E se continuarmos a permitir que o poder cresça sem controle, se aceitarmos passivamente as correntes da conformidade, estaremos caminhando para um futuro digno dos nossos piores pesadelos. Equilibrium é um alerta sombrio, uma advertência urgente de que a tirania está à espreita nas sombras, esperando para nos devorar se baixarmos a guarda.',
          'Portanto, não podemos mais nos dar ao luxo de ficar adormecidos em nossa complacência. Devemos despertar para a realidade do mundo que nos rodeia, enfrentar nossos medos mais profundos e lutar pela liberdade antes que seja tarde demais. O futuro está em jogo, e a escolha é nossa: resistir ou perecer nas garras do controle totalitário.'
        ]
      }
    ],
    image:
      '/images/equilibrium-critica-supressao-emocoes-relevancia-atual/img-01.jpg',
    slug: 'equilibrium-critica-supressao-emocoes-relevancia-atual',
    date: '04 de Abril de 2024'
  }
];

export const posts: PostProps[] = reversedPosts.reverse();
