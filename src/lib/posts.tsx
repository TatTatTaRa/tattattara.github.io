// lib/posts.ts
import fs from 'fs';
import path from 'path';
import { sync as globSync } from 'glob';
import matter from 'gray-matter';
import { Post } from './types';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts() {
  const filePaths = globSync(`${postsDirectory}/**/*.md`);
  console.log('와 대체 뭐', filePaths)
  return filePaths
  
  // return filePaths.map((filePath) => {
  //   const fileContents = fs.readFileSync(filePath, 'utf8');
  //   const { data, content } = matter(fileContents);

  //   const slug = filePath
  //     .replace(postsDirectory, '')
  //     .replace(/\\/g, '/')
  //     .replace(/\.md$/, '')
  //     .replace(/^\//, '');

  //   return {
  //     slug,
  //     ...data,
  //     content,
  //   };
  // });
}

// export function getAllSlugs() {
//   return getAllPosts().map((post) => post.slug);
// }

// export function getPostBySlug(slug: string) {
//   const filePath = path.join(postsDirectory, `${slug}.md`);
//   const fileContents = fs.readFileSync(filePath, 'utf8');
//   const { data, content } = matter(fileContents);

//   return {
//     slug,
//     ...data,
//     content,
//   };
// }
