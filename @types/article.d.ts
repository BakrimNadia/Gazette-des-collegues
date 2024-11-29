export interface IArticle {
    id: number;
    picture?: string;
    title: string;
    subtitle: string;
    articleAuthor: {firstname: string, lastname: string};
    content: string;
    date_publication: string;
    user_id: number;
  }