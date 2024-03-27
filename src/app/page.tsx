import Image from 'next/image';

import { CardPost } from '@/components/ui/card-post';

export default function Home() {
  return (
    <main className="space-y-12">
      <section className="flex flex-wrap gap-8 items-center justify-center">
        <div className="flex w-full max-w-[544px] h-[200px] sm:h-[344px] relative rounded-2xl overflow-hidden">
          <Image
            src="/images/image.jpg"
            alt="image"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col flex-1 gap-y-6">
          <h2 className="font-black text-4xl text-blue-600">
            Por que você deveria começar a investir na bolsa de valores
          </h2>
          <p className="text-zinc-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur rerum soluta tempore autem ut officiis maiores harum
            molestiae perspiciatis voluptas dicta sit quo quidem quod, nesciunt
            quisquam error, hic culpa.
          </p>

          <div>
            <p className="font-bold text-zinc-900">Maycon Douglas</p>
            <p className="text-zinc-600 text-sm">
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap gap-2 justify-evenly">
        {Array.from({ length: 9 }).map((_, index) => (
          <CardPost.Root key={index}>
            <CardPost.Image src="/images/image.jpg" alt="image" />
            <CardPost.Content>
              <CardPost.Title>
                Por que você deveria iniciar a investir na bolsa de valores
              </CardPost.Title>
              <CardPost.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                excepturi soluta nam ratione nulla, fugit vitae ipsum iste
                voluptates alias assumenda dolores, enim fuga, recusandae minus!
                Natus quas possimus beatae.
              </CardPost.Description>
              <CardPost.Autor>Maycon Douglas</CardPost.Autor>
            </CardPost.Content>
          </CardPost.Root>
        ))}
      </section>
    </main>
  );
}
