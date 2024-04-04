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
        subTitle: 'O Controle Oculto das Emoções:',
        descriptions: [
          'Imagine um mundo onde cada suspiro é monitorado, onde o governo controla não apenas nossas ações, mas até mesmo nossos sentimentos mais íntimos. Em "Equilibrium" (2002), somos transportados para uma realidade distópica assustadoramente próxima da nossa própria, onde as emoções são suprimidas em uma conspiração sinistra para manter as massas obedientes e submissas.'
        ]
      },
      {
        subTitle: 'Relevância Atual: Revelando a Trama Oculta',
        descriptions: [
          'Nos dias de hoje, somos constantemente bombardeados por mensagens que nos dizem como devemos sentir e o que devemos pensar. À medida que nos aprofundamos na trama de "Equilibrium", somos confrontados com paralelos inquietantes com os desafios que enfrentamos em nossa própria sociedade. Será que estamos sendo manipulados para aceitar a conformidade como a norma, enquanto nossas verdadeiras emoções são silenciadas em nome da ordem e da estabilidade?'
        ]
      },
      {
        subTitle: 'A Resistência Desperta:',
        descriptions: [
          'Assim como o herói do filme, John Preston, descobrimos que a verdadeira liberdade reside na capacidade de desafiar as correntes da opressão e abraçar nossas próprias emoções. À medida que sua jornada se desenrola diante de nossos olhos, somos inspirados a questionar as narrativas impostas sobre nós e a buscar a verdade por trás das cortinas da manipulação.'
        ],
        image:
          '/images/equilibrium-critica-supressao-emocoes-relevancia-atual/img-02.jpg'
      },
      {
        subTitle: 'Conclusão: A Luta pela Liberdade Emocional',
        descriptions: [
          '"Equilibrium" serve como um lembrete convincente de que a verdadeira batalha pela liberdade muitas vezes não é travada em campos de batalha, mas dentro de nossos próprios corações e mentes. À medida que nos unimos à resistência emocional de Preston, somos lembrados de nossa própria capacidade de resistir às garras do controle e abraçar a plenitude de nossas próprias emoções. Que este filme nos inspire a desvendar os grilhões invisíveis que nos aprisionam e a abraçar a verdadeira liberdade que reside dentro de cada um de nós.'
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
