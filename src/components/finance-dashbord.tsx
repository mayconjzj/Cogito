'use client';

import { useDispatch, useSelector } from 'react-redux';

import { learningResources } from '@/config/learning-resources';
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
          {learningResources.map((post) => (
            <li key={post.title}>
              <FinanceItem.Wrapper
                active={financeItemValue === post.category}
                onClick={() => dispatch(setFinanceItemValue(post.category))}
              >
                <FinanceItem.Title active={financeItemValue === post.category}>
                  {post.title}
                </FinanceItem.Title>
                <FinanceItem.Description>
                  {post.description}
                </FinanceItem.Description>
              </FinanceItem.Wrapper>
            </li>
          ))}
        </ul>

        {posts.length > 0 && (
          <ul className="flex overflow-auto gap-x-3 carousel-container">
            {posts
              .filter((post) => post.category === financeItemValue)
              .slice(0, 5)
              .map((post) => (
                <li key={post.id}>
                  <PostCard post={post} className="w-[300px]" />
                </li>
              ))}
          </ul>
        )}
      </div>
    </section>
  );
};
