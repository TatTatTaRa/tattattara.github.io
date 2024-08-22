export interface PostMetaData {
    title: string;
    date: string;
  }
  
  export interface Post {
    slug: string;
    meta: PostMetaData;
    content: string;
  }
  