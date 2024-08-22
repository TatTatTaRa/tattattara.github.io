import globby from 'globby';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getAllPosts() {
  const patterns = `${postsDirectory}/**/*.md`;
  const filePaths = await globby(patterns);
  return filePaths;
}