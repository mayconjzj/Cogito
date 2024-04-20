import Image from 'next/image';
import Link from 'next/link';

import { posts } from '@/config/posts';

export default function Home() {
  return (
    <section className="space-y-6 max-w-[1080px] m-auto">
      <h1 className="text-xl font-bold">Artigos</h1>

      <ul className="space-y-6 items-start justify-evenly">
        {posts?.map((post) => (
          <li key={post.slug}>
            <Link href={`/post/${post.slug}`}>
              <div className="bg-primary p-4 space-y-4 max-w-[860px]">
                <h2 className="text-xl font-bold line-clamp-2">{post.title}</h2>
                {post?.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={860}
                    height={430}
                    className="object-cover w-full max-h-[430px]"
                  />
                )}
                <p className="text-justify line-clamp-4">{post.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
