export type ArticleFilter = {
  title: string;
  category: 'all' | 'personal-finances' | 'debts' | 'investments';
};

export const articleFilter: ArticleFilter[] = [
  {
    title: 'Todos os artigos',
    category: 'all'
  },
  {
    title: 'Finaças pessoais',
    category: 'personal-finances'
  },
  {
    title: 'Quitar dívidas',
    category: 'debts'
  },
  {
    title: 'Investimentos',
    category: 'investments'
  }
];
