'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { posts } from '@/config/posts';
import { setFinanceItemValue, states } from '@/redux/slice/finance-item';

import { Badge } from './ui/badge';
import { FinanceItem } from './ui/FinanceItem';

export const FinanceDashboard = () => {
  const { financeItemValue } = useSelector(
    (state: { financeItem: states }) => state.financeItem
  );
  const dispatch = useDispatch();

  return (
    <section className="px-2 sm:px-12 lg:px-24 space-y-6 sm:space-y-16">
      <div className="space-y-3">
        <span className="text-muted">Seus primeiros passos</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold">
          Fique por dentro
        </h1>
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
                  <div className="space-y-3 w-[350px]">
                    {post.image && (
                      <Link href={`/post/${post.slug}`}>
                        <Image
                          src={`${post.image}`}
                          alt={post.title}
                          width={350}
                          height={300}
                          className="object-cover w-full overflow-hidden rounded-xl"
                        />
                      </Link>
                    )}
                    <div>
                      <Badge category={post.category}>
                        {post.category == 'personal-finances' &&
                          'Finanças pessoais'}
                        {post.category == 'debts' && 'Quitar dívidas'}
                        {post.category == 'investments' && 'Investimentos'}
                      </Badge>
                    </div>
                    <div className="px-3 space-y-3 ">
                      <Link href={`/post/${post.slug}`}>
                        <h3 className="font-bold text-lg">{post.title}</h3>
                      </Link>
                      <p className="text-muted text-sm leading-6 line-clamp-[7]">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </section>
  );
};
