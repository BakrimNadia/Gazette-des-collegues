export interface INews {
    id: number;
    picture?: string;
    title: string;
    subtitle: string;
    content: string;
    date_publication: string;
    newsAuthor: {firstname: string, lastname: string};
    user_id: number;
  }