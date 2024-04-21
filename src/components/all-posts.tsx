'use client';

import { useDispatch, useSelector } from 'react-redux';

import { posts } from '@/config/posts';
import { setFinanceItemValue, states } from '@/redux/slice/finance-item';

import { Button } from './ui/button';
import { PostCard } from './ui/post-card';

export const AllPosts = () => {
  const { financeItemValue } = useSelector(
    (state: { financeItem: states }) => state.financeItem
  );
  const dispatch = useDispatch();

  return (
    <section className="space-y-6 sm:space-y-16">
      <div className="space-y-3">
        <span className="text-muted">Veja todos os artigos</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold">Mais artigos</h1>
      </div>

      <div className="space-y-6">
        <nav>
          <ul className="flex gap-x-3">
            <li>
              <Button
                variant={
                  financeItemValue === 'personal-finances'
                    ? financeItemValue
                    : 'none'
                }
                size="sm"
                rounded="full"
                onClick={() =>
                  dispatch(setFinanceItemValue('personal-finances'))
                }
              >
                Finaças pessoais
              </Button>
            </li>
            <li>
              <Button
                variant={
                  financeItemValue === 'debts' ? financeItemValue : 'none'
                }
                size="sm"
                rounded="full"
                onClick={() => dispatch(setFinanceItemValue('debts'))}
              >
                Quitar dívidas
              </Button>
            </li>
            <li>
              <Button
                variant={
                  financeItemValue === 'investments' ? financeItemValue : 'none'
                }
                size="sm"
                rounded="full"
                onClick={() => dispatch(setFinanceItemValue('investments'))}
              >
                Investimentos
              </Button>
            </li>
          </ul>
        </nav>

        {posts.length > 0 && (
          <ul className="flex flex-wrap justify-evenly gap-3">
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
