export type LearningResourcesProps = {
  title: string;
  description: string;
  category: 'personal-finances' | 'debts' | 'investments';
};

export const learningResources: LearningResourcesProps[] = [
  {
    title: 'Organizar as finanças',
    description: 'Aprendar a organizar e planejar suas finançasa pessoais.',
    category: 'personal-finances'
  },
  {
    title: 'Quitar dívidas',
    description: 'Aprendar a organizar e planejar suas finançasa pessoais.',
    category: 'debts'
  },
  {
    title: 'Como investir',
    description: 'Aprenda como investir e multiplicar seu dinheiro',
    category: 'investments'
  }
];
