import Image from 'next/image';
import Link from 'next/link';

import { posts } from '@/config/posts';

export default async function Page({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  return (
    <main>
      <article>
        <div className="space-y-6 pb-10 border-b-border border-b-[0.5px]">
          <Link href="/" className="text-muted text-md hover:text-primary">
            Voltar
          </Link>
          <div>
            <p className="text-muted text-md">Publicado no dia {post?.date}</p>
          </div>
          <h1 className="font-black text-primary text-4xl">{post?.title}</h1>
          {post?.image && (
            <div className="flex w-full h-[200px] sm:h-[450px] relative rounded-md overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <p className="text-muted">{post?.description}</p>
        </div>
        <div className="text-justify">
          {post?.contents &&
            post.contents.map((content) => (
              <div
                key={content.subTitle}
                className="space-y-6 text-justify py-10 border-b-border border-b-[0.5px]"
              >
                <h2 className="font-bold text-primary text-2xl">
                  {content.subTitle}
                </h2>
                <div className="space-y-3">
                  {content.descriptions?.map((description) => (
                    <p key={description}>{description}</p>
                  ))}
                </div>
                {content.image && (
                  <div className="flex w-full h-[200px] sm:h-[450px] relative rounded-2xl overflow-hidden">
                    <Image
                      src={content.image}
                      alt={content.subTitle}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
        </div>
      </article>
    </main>
  );
}
