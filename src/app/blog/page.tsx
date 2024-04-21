import Image from 'next/image';
import Link from 'next/link';

import { posts } from '@/config/posts';

import { AllPosts } from '@/components/all-posts';
import { Badge } from '@/components/ui/badge';

export default function Blog() {
  return (
    <section className="px-2 sm:px-12 lg:px-24 space-y-6 sm:space-y-16">
      <section className="space-y-6 sm:space-y-16">
        <div className="space-y-3">
          <span className="text-muted">Veja as últimas postagens</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            Fique por dentro
          </h1>
        </div>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ul className="space-y-6 max-w-[500px]">
              {posts.slice(0, 2).map((post) => (
                <li key={post.title} className="space-y-3">
                  <Link href={`/post/${post.slug}`}>
                    <Image
                      src={`${post.image}`}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="object-cover rounded-xl overflow-hidden"
                    />
                  </Link>
                  <div>
                    <Badge category={post.category}>
                      {post.category == 'personal-finances' &&
                        'Finanças pessoais'}
                      {post.category == 'debts' && 'Quitar dívidas'}
                      {post.category == 'investments' && 'Investimentos'}
                    </Badge>
                  </div>
                  <div className="px-3 space-y-3">
                    <Link href={`/post/${post.slug}`}>
                      <h2 className="font-bold text-xl">{post.title}</h2>
                    </Link>
                    <p className="text-muted leading-6 line-clamp-[7]">
                      {post.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="space-y-6">
              {posts.slice(2, 7).map((post) => (
                <li
                  key={post.title}
                  className="flex flex-col lg:flex-row space-x-3 space-y-3 max-w-[500px]"
                >
                  <Link href={`/post/${post.slug}`}>
                    <Image
                      src={`${post.image}`}
                      alt={post.title}
                      width={500}
                      height={333}
                      className="object-cover min-w-[250px] lg:max-w-[250px] w-full rounded-xl overflow-hidden"
                    />
                  </Link>
                  <div className="space-y-3">
                    <div>
                      <Badge category={post.category}>
                        {post.category == 'personal-finances' &&
                          'Finanças pessoais'}
                        {post.category == 'debts' && 'Quitar dívidas'}
                        {post.category == 'investments' && 'Investimentos'}
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <Link href={`/post/${post.slug}`}>
                        <h2 className="font-bold text-lg line-clamp-3">
                          {post.title}
                        </h2>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <AllPosts />
    </section>
  );
}
