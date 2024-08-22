// pages/posts/[...slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts } from '../lib/posts';

interface PostProps {
  title: string;
  date: string;
  content: string;
}

export default function Post() {
  console.log('꾸앙')
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const slugs = getAllSlugs();
//   const paths = slugs.map((slug) => ({
//     params: {
//       slug: slug.split('/'),
//     },
//   }));

//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const slug = (params?.slug as string[]).join('/');
//   const post = getPostBySlug(slug);

//   return {
//     props: {
//       ...post,
//     },
//   };
// };
