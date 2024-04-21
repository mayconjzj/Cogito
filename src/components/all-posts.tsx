'use client';

import { useDispatch, useSelector } from 'react-redux';

import { articleFilter } from '@/config/article-filter';
import { posts } from '@/config/posts';
import { setFilteredPostsValue, states } from '@/redux/slice/filtered-posts';

import { Button } from './ui/button';
import { PostCard } from './ui/post-card';

export const AllPosts = () => {
  const { filteredPostsValue } = useSelector(
    (state: { filteredPosts: states }) => state.filteredPosts
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
          <ul className="flex flex-wrap gap-x-3">
            {articleFilter.map((post) => (
              <Button
                key={post.category}
                variant={
                  filteredPostsValue === post.category
                    ? filteredPostsValue
                    : 'none'
                }
                size="sm"
                rounded="full"
                onClick={() => dispatch(setFilteredPostsValue(post.category))}
              >
                {post.title}
              </Button>
            ))}
          </ul>
        </nav>

        {posts.length > 0 && (
          <ul className="flex flex-wrap justify-evenly gap-y-6">
            {filteredPostsValue === 'all' &&
              posts.map((post) => (
                <li key={post.id}>
                  <PostCard post={post} />
                </li>
              ))}
            {posts
              .filter((post) => post.category === filteredPostsValue)
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
