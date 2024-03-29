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

export const posts: PostProps[] = [
  {
    id: 1,
    title: 'Por Que o Brasil Não Deu Certo?',
    description:
      '"Brasil: Desafios e Esperanças" é uma reflexão envolvente sobre os obstáculos históricos e contemporâneos que moldaram o desenvolvimento do país. Desde a herança colonial até a desigualdade social e a instabilidade política, o artigo destaca os desafios enfrentados pelo Brasil. No entanto, também oferece uma visão de esperança, retratando o povo brasileiro como protagonista de sua própria história e chamando à ação para um futuro mais justo e sustentável.',
    contents: [
      {
        subTitle: 'Legado Histórico e Estrutural',
        descriptions: [
          'Ao refletirmos sobre a trajetória do Brasil, é impossível ignorar o profundo impacto do seu legado histórico e estrutural. Desde os primeiros dias de colonização, o Brasil foi moldado por uma economia baseada na exploração de recursos naturais, deixando marcas indeléveis em sua estrutura socioeconômica.',
          'A colonização portuguesa estabeleceu as bases para uma economia voltada para a exportação, onde a busca por lucro imediato muitas vezes superava a preocupação com o desenvolvimento a longo prazo. Os ciclos do açúcar e do ouro foram emblemáticos desse período, criando uma mentalidade de exploração rápida e lucro fácil, mas também deixando para trás desigualdades estruturais profundas.',
          'Essa herança colonial deixou um legado de desigualdade que perdura até os dias de hoje. A concentração de terras e riquezas nas mãos de uma elite privilegiada criou uma sociedade profundamente segmentada, onde poucos desfrutam dos frutos da terra enquanto muitos lutam para sobreviver. Essa disparidade não apenas limita o acesso a oportunidades econômicas e sociais, mas também mina a coesão social e enfraquece o tecido da nação.',
          'Além disso, o modelo de desenvolvimento baseado na exploração de recursos naturais gerou uma economia vulnerável às flutuações do mercado global. A dependência excessiva de commodities expõe o Brasil a choques externos e limita sua capacidade de diversificar sua economia e promover um crescimento sustentável a longo prazo.',
          'Diante desse contexto, é fundamental reconhecer o legado histórico e estrutural que moldou a trajetória do Brasil e influenciou seus desafios atuais. Somente ao enfrentar essas raízes profundas da desigualdade e da dependência econômica, o Brasil poderá verdadeiramente abrir caminho para um futuro mais justo e próspero para todos os seus cidadãos.'
        ],
        image:
          '/images/por-que-o-brasil-nao-deu-certo/desembarque-de-pedro-alvares-cabral-em-porto-seguro-em-1500.jpg'
      },
      {
        subTitle: 'Instabilidade Política e Institucional',
        descriptions: [
          'A instabilidade política e institucional tem sido uma característica marcante da história do Brasil, influenciando profundamente seu desenvolvimento.',
          'Ao longo dos anos, o país enfrentou períodos de turbulência política, com mudanças frequentes de regime e crises institucionais que abalaram a confiança da população nas lideranças políticas e nas instituições governamentais.',
          'Essa instabilidade tem gerado um ambiente de incerteza que prejudica a tomada de decisões políticas e econômicas, afetando negativamente o investimento e o crescimento sustentável.',
          'Além disso, a corrupção endêmica mina a credibilidade das instituições e mina os esforços para promover a transparência e a responsabilidade no governo.',
          'Enfrentar a instabilidade política e institucional requer um compromisso com a governança eficaz, o fortalecimento das instituições democráticas e o combate à corrupção. Somente assim o Brasil poderá construir uma base sólida para o desenvolvimento econômico e social.'
        ]
      },
      {
        subTitle:
          'Promovendo a Estabilidade Institucional e o Desenvolvimento Sustentável',
        descriptions: [
          'Para superar os desafios enfrentados, o Brasil precisa promover a estabilidade institucional e buscar um desenvolvimento mais sustentável. Isso requer uma abordagem abrangente que englobe aspectos econômicos, sociais e ambientais.',
          'Em primeiro lugar, é crucial investir em educação e capacitação para reduzir as desigualdades sociais e econômicas que têm sido uma característica persistente da sociedade brasileira. O acesso igualitário à educação de qualidade não apenas proporciona oportunidades iguais para todos os cidadãos, mas também é fundamental para promover a inovação e impulsionar o crescimento econômico.',
          'Além disso, são necessárias reformas políticas que fortaleçam as instituições democráticas e aumentem a transparência e a responsabilidade no governo. Isso inclui medidas para combater a corrupção, garantir a independência do judiciário e fortalecer os sistemas de prestação de contas e controle social.',
          'Ao mesmo tempo, o Brasil deve adotar políticas de desenvolvimento sustentável que protejam o meio ambiente e promovam o uso responsável dos recursos naturais. Isso envolve o incentivo à produção e ao consumo sustentáveis, a preservação dos ecossistemas naturais e a mitigação das mudanças climáticas.',
          'Promover a estabilidade política e institucional, bem como o desenvolvimento sustentável, não é tarefa fácil e requer o comprometimento de todos os setores da sociedade. No entanto, é fundamental para construir um futuro mais próspero e equitativo para todos os brasileiros.'
        ],
        image: '/images/por-que-o-brasil-nao-deu-certo/crescimento.jpg'
      }
    ],
    slug: 'por-que-o-brasil-nao-deu-certo',
    image: '/images/por-que-o-brasil-nao-deu-certo/bandeira-do-brasil.jpg',
    date: '27 de março de 2024'
  },
  {
    id: 2,
    title: 'O sistema de Ensino é o Maior Esquema de Pirâmide?',
    description:
      '"Brasil: Desafios e Esperanças" é uma reflexão envolvente sobre os obstáculos históricos e contemporâneos que moldaram o desenvolvimento do país. Desde a herança colonial até a desigualdade social e a instabilidade política, o artigo destaca os desafios enfrentados pelo Brasil. No entanto, também oferece uma visão de esperança, retratando o povo brasileiro como protagonista de sua própria história e chamando à ação para um futuro mais justo e sustentável.',
    contents: [
      {
        subTitle: 'Desafios e Esperanças',
        descriptions: ['Brasil: Desafios e Esperanças']
      }
    ],
    slug: 'o-sistema-de-ensino-e-o-maior-esquema-de-piramide',
    image: '/images/por-que-o-brasil-nao-deu-certo/crescimento.jpg',
    date: '28 de março de 2024'
  },
  {
    id: 1,
    title: 'Por Que o Brasil Não Deu Certo?',
    description:
      '"Brasil: Desafios e Esperanças" é uma reflexão envolvente sobre os obstáculos históricos e contemporâneos que moldaram o desenvolvimento do país. Desde a herança colonial até a desigualdade social e a instabilidade política, o artigo destaca os desafios enfrentados pelo Brasil. No entanto, também oferece uma visão de esperança, retratando o povo brasileiro como protagonista de sua própria história e chamando à ação para um futuro mais justo e sustentável.',
    contents: [
      {
        subTitle: 'Legado Histórico e Estrutural',
        descriptions: [
          'Ao refletirmos sobre a trajetória do Brasil, é impossível ignorar o profundo impacto do seu legado histórico e estrutural. Desde os primeiros dias de colonização, o Brasil foi moldado por uma economia baseada na exploração de recursos naturais, deixando marcas indeléveis em sua estrutura socioeconômica.',
          'A colonização portuguesa estabeleceu as bases para uma economia voltada para a exportação, onde a busca por lucro imediato muitas vezes superava a preocupação com o desenvolvimento a longo prazo. Os ciclos do açúcar e do ouro foram emblemáticos desse período, criando uma mentalidade de exploração rápida e lucro fácil, mas também deixando para trás desigualdades estruturais profundas.',
          'Essa herança colonial deixou um legado de desigualdade que perdura até os dias de hoje. A concentração de terras e riquezas nas mãos de uma elite privilegiada criou uma sociedade profundamente segmentada, onde poucos desfrutam dos frutos da terra enquanto muitos lutam para sobreviver. Essa disparidade não apenas limita o acesso a oportunidades econômicas e sociais, mas também mina a coesão social e enfraquece o tecido da nação.',
          'Além disso, o modelo de desenvolvimento baseado na exploração de recursos naturais gerou uma economia vulnerável às flutuações do mercado global. A dependência excessiva de commodities expõe o Brasil a choques externos e limita sua capacidade de diversificar sua economia e promover um crescimento sustentável a longo prazo.',
          'Diante desse contexto, é fundamental reconhecer o legado histórico e estrutural que moldou a trajetória do Brasil e influenciou seus desafios atuais. Somente ao enfrentar essas raízes profundas da desigualdade e da dependência econômica, o Brasil poderá verdadeiramente abrir caminho para um futuro mais justo e próspero para todos os seus cidadãos.'
        ],
        image:
          '/images/por-que-o-brasil-nao-deu-certo/desembarque-de-pedro-alvares-cabral-em-porto-seguro-em-1500.jpg'
      },
      {
        subTitle: 'Instabilidade Política e Institucional',
        descriptions: [
          'A instabilidade política e institucional tem sido uma característica marcante da história do Brasil, influenciando profundamente seu desenvolvimento.',
          'Ao longo dos anos, o país enfrentou períodos de turbulência política, com mudanças frequentes de regime e crises institucionais que abalaram a confiança da população nas lideranças políticas e nas instituições governamentais.',
          'Essa instabilidade tem gerado um ambiente de incerteza que prejudica a tomada de decisões políticas e econômicas, afetando negativamente o investimento e o crescimento sustentável.',
          'Além disso, a corrupção endêmica mina a credibilidade das instituições e mina os esforços para promover a transparência e a responsabilidade no governo.',
          'Enfrentar a instabilidade política e institucional requer um compromisso com a governança eficaz, o fortalecimento das instituições democráticas e o combate à corrupção. Somente assim o Brasil poderá construir uma base sólida para o desenvolvimento econômico e social.'
        ]
      },
      {
        subTitle:
          'Promovendo a Estabilidade Institucional e o Desenvolvimento Sustentável',
        descriptions: [
          'Para superar os desafios enfrentados, o Brasil precisa promover a estabilidade institucional e buscar um desenvolvimento mais sustentável. Isso requer uma abordagem abrangente que englobe aspectos econômicos, sociais e ambientais.',
          'Em primeiro lugar, é crucial investir em educação e capacitação para reduzir as desigualdades sociais e econômicas que têm sido uma característica persistente da sociedade brasileira. O acesso igualitário à educação de qualidade não apenas proporciona oportunidades iguais para todos os cidadãos, mas também é fundamental para promover a inovação e impulsionar o crescimento econômico.',
          'Além disso, são necessárias reformas políticas que fortaleçam as instituições democráticas e aumentem a transparência e a responsabilidade no governo. Isso inclui medidas para combater a corrupção, garantir a independência do judiciário e fortalecer os sistemas de prestação de contas e controle social.',
          'Ao mesmo tempo, o Brasil deve adotar políticas de desenvolvimento sustentável que protejam o meio ambiente e promovam o uso responsável dos recursos naturais. Isso envolve o incentivo à produção e ao consumo sustentáveis, a preservação dos ecossistemas naturais e a mitigação das mudanças climáticas.',
          'Promover a estabilidade política e institucional, bem como o desenvolvimento sustentável, não é tarefa fácil e requer o comprometimento de todos os setores da sociedade. No entanto, é fundamental para construir um futuro mais próspero e equitativo para todos os brasileiros.'
        ],
        image: '/images/por-que-o-brasil-nao-deu-certo/crescimento.jpg'
      }
    ],
    slug: 'por-que-o-brasil-nao-deu-certo',
    image: '/images/por-que-o-brasil-nao-deu-certo/bandeira-do-brasil.jpg',
    date: '27 de março de 2024'
  },
  {
    id: 2,
    title: 'O sistema de Ensino é o Maior Esquema de Pirâmide?',
    description:
      '"Brasil: Desafios e Esperanças" é uma reflexão envolvente sobre os obstáculos históricos e contemporâneos que moldaram o desenvolvimento do país. Desde a herança colonial até a desigualdade social e a instabilidade política, o artigo destaca os desafios enfrentados pelo Brasil. No entanto, também oferece uma visão de esperança, retratando o povo brasileiro como protagonista de sua própria história e chamando à ação para um futuro mais justo e sustentável.',
    contents: [
      {
        subTitle: 'Desafios e Esperanças',
        descriptions: ['Brasil: Desafios e Esperanças']
      }
    ],
    slug: 'o-sistema-de-ensino-e-o-maior-esquema-de-piramide',
    image: '/images/por-que-o-brasil-nao-deu-certo/crescimento.jpg',
    date: '28 de março de 2024'
  },
  {
    id: 1,
    title: 'Por Que o Brasil Não Deu Certo?',
    description:
      '"Brasil: Desafios e Esperanças" é uma reflexão envolvente sobre os obstáculos históricos e contemporâneos que moldaram o desenvolvimento do país. Desde a herança colonial até a desigualdade social e a instabilidade política, o artigo destaca os desafios enfrentados pelo Brasil. No entanto, também oferece uma visão de esperança, retratando o povo brasileiro como protagonista de sua própria história e chamando à ação para um futuro mais justo e sustentável.',
    contents: [
      {
        subTitle: 'Legado Histórico e Estrutural',
        descriptions: [
          'Ao refletirmos sobre a trajetória do Brasil, é impossível ignorar o profundo impacto do seu legado histórico e estrutural. Desde os primeiros dias de colonização, o Brasil foi moldado por uma economia baseada na exploração de recursos naturais, deixando marcas indeléveis em sua estrutura socioeconômica.',
          'A colonização portuguesa estabeleceu as bases para uma economia voltada para a exportação, onde a busca por lucro imediato muitas vezes superava a preocupação com o desenvolvimento a longo prazo. Os ciclos do açúcar e do ouro foram emblemáticos desse período, criando uma mentalidade de exploração rápida e lucro fácil, mas também deixando para trás desigualdades estruturais profundas.',
          'Essa herança colonial deixou um legado de desigualdade que perdura até os dias de hoje. A concentração de terras e riquezas nas mãos de uma elite privilegiada criou uma sociedade profundamente segmentada, onde poucos desfrutam dos frutos da terra enquanto muitos lutam para sobreviver. Essa disparidade não apenas limita o acesso a oportunidades econômicas e sociais, mas também mina a coesão social e enfraquece o tecido da nação.',
          'Além disso, o modelo de desenvolvimento baseado na exploração de recursos naturais gerou uma economia vulnerável às flutuações do mercado global. A dependência excessiva de commodities expõe o Brasil a choques externos e limita sua capacidade de diversificar sua economia e promover um crescimento sustentável a longo prazo.',
          'Diante desse contexto, é fundamental reconhecer o legado histórico e estrutural que moldou a trajetória do Brasil e influenciou seus desafios atuais. Somente ao enfrentar essas raízes profundas da desigualdade e da dependência econômica, o Brasil poderá verdadeiramente abrir caminho para um futuro mais justo e próspero para todos os seus cidadãos.'
        ],
        image:
          '/images/por-que-o-brasil-nao-deu-certo/desembarque-de-pedro-alvares-cabral-em-porto-seguro-em-1500.jpg'
      },
      {
        subTitle: 'Instabilidade Política e Institucional',
        descriptions: [
          'A instabilidade política e institucional tem sido uma característica marcante da história do Brasil, influenciando profundamente seu desenvolvimento.',
          'Ao longo dos anos, o país enfrentou períodos de turbulência política, com mudanças frequentes de regime e crises institucionais que abalaram a confiança da população nas lideranças políticas e nas instituições governamentais.',
          'Essa instabilidade tem gerado um ambiente de incerteza que prejudica a tomada de decisões políticas e econômicas, afetando negativamente o investimento e o crescimento sustentável.',
          'Além disso, a corrupção endêmica mina a credibilidade das instituições e mina os esforços para promover a transparência e a responsabilidade no governo.',
          'Enfrentar a instabilidade política e institucional requer um compromisso com a governança eficaz, o fortalecimento das instituições democráticas e o combate à corrupção. Somente assim o Brasil poderá construir uma base sólida para o desenvolvimento econômico e social.'
        ]
      },
      {
        subTitle:
          'Promovendo a Estabilidade Institucional e o Desenvolvimento Sustentável',
        descriptions: [
          'Para superar os desafios enfrentados, o Brasil precisa promover a estabilidade institucional e buscar um desenvolvimento mais sustentável. Isso requer uma abordagem abrangente que englobe aspectos econômicos, sociais e ambientais.',
          'Em primeiro lugar, é crucial investir em educação e capacitação para reduzir as desigualdades sociais e econômicas que têm sido uma característica persistente da sociedade brasileira. O acesso igualitário à educação de qualidade não apenas proporciona oportunidades iguais para todos os cidadãos, mas também é fundamental para promover a inovação e impulsionar o crescimento econômico.',
          'Além disso, são necessárias reformas políticas que fortaleçam as instituições democráticas e aumentem a transparência e a responsabilidade no governo. Isso inclui medidas para combater a corrupção, garantir a independência do judiciário e fortalecer os sistemas de prestação de contas e controle social.',
          'Ao mesmo tempo, o Brasil deve adotar políticas de desenvolvimento sustentável que protejam o meio ambiente e promovam o uso responsável dos recursos naturais. Isso envolve o incentivo à produção e ao consumo sustentáveis, a preservação dos ecossistemas naturais e a mitigação das mudanças climáticas.',
          'Promover a estabilidade política e institucional, bem como o desenvolvimento sustentável, não é tarefa fácil e requer o comprometimento de todos os setores da sociedade. No entanto, é fundamental para construir um futuro mais próspero e equitativo para todos os brasileiros.'
        ],
        image: '/images/por-que-o-brasil-nao-deu-certo/crescimento.jpg'
      }
    ],
    slug: 'por-que-o-brasil-nao-deu-certo',
    image: '/images/por-que-o-brasil-nao-deu-certo/bandeira-do-brasil.jpg',
    date: '27 de março de 2024'
  },
  {
    id: 2,
    title: 'O sistema de Ensino é o Maior Esquema de Pirâmide?',
    description:
      '"Brasil: Desafios e Esperanças" é uma reflexão envolvente sobre os obstáculos históricos e contemporâneos que moldaram o desenvolvimento do país. Desde a herança colonial até a desigualdade social e a instabilidade política, o artigo destaca os desafios enfrentados pelo Brasil. No entanto, também oferece uma visão de esperança, retratando o povo brasileiro como protagonista de sua própria história e chamando à ação para um futuro mais justo e sustentável.',
    contents: [
      {
        subTitle: 'Desafios e Esperanças',
        descriptions: ['Brasil: Desafios e Esperanças']
      }
    ],
    slug: 'o-sistema-de-ensino-e-o-maior-esquema-de-piramide',
    image: '/images/por-que-o-brasil-nao-deu-certo/crescimento.jpg',
    date: '28 de março de 2024'
  }
];
