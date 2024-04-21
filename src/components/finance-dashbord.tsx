'use client';

import { useDispatch, useSelector } from 'react-redux';

import { posts } from '@/config/posts';
import { setFinanceItemValue, states } from '@/redux/slice/finance-item';

import { FinanceItem } from './ui/FinanceItem';
import { PostCard } from './ui/post-card';

export const FinanceDashboard = () => {
  const { financeItemValue } = useSelector(
    (state: { financeItem: states }) => state.financeItem
  );
  const dispatch = useDispatch();

  return (
    <section className="px-2 sm:px-12 lg:px-24 space-y-6 sm:space-y-16">
      <div className="space-y-3">
        <span className="text-muted">Seus primeiros passos</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold">Comece por aqui</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-3">
        <ul className="flex flex-col">
          <li>
            <FinanceItem.Wrapper
              active={financeItemValue === 'personal-finances'}
              onClick={() => dispatch(setFinanceItemValue('personal-finances'))}
            >
              <FinanceItem.Title
                active={financeItemValue === 'personal-finances'}
              >
                Organizar as finanças
              </FinanceItem.Title>
              <FinanceItem.Description>
                Aprendar a organizar e planejar suas finançasa pessoais.
              </FinanceItem.Description>
            </FinanceItem.Wrapper>
          </li>
          <li>
            <FinanceItem.Wrapper
              active={financeItemValue === 'debts'}
              onClick={() => dispatch(setFinanceItemValue('debts'))}
            >
              <FinanceItem.Title active={financeItemValue === 'debts'}>
                Quitar dívidas
              </FinanceItem.Title>
              <FinanceItem.Description>
                Descubra estrátegias, renegociar e quitar dívidas.
              </FinanceItem.Description>
            </FinanceItem.Wrapper>
          </li>
          <li>
            <FinanceItem.Wrapper
              active={financeItemValue === 'investments'}
              onClick={() => dispatch(setFinanceItemValue('investments'))}
            >
              <FinanceItem.Title active={financeItemValue === 'investments'}>
                Como investir
              </FinanceItem.Title>
              <FinanceItem.Description>
                Dê seus primeiros nos investimentos, quais o tipos e quais os
                riscos.
              </FinanceItem.Description>
            </FinanceItem.Wrapper>
          </li>
        </ul>

        {posts.length > 0 && (
          <ul className="flex overflow-auto gap-x-3 carousel-container">
            {posts
              .filter((post) => post.category === financeItemValue)
              .slice(0, 5)
              .map((post) => (
                <li key={post.id}>
                  <PostCard post={post} />
                </li>
              ))}
          </ul>
        )}
      </div>
    </section>
  );
};
