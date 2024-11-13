export interface INews {
    id: number;
    picture?: string;
    title: string;
    subtitle: string;
    user_id: string;
    content: string;
    date_publication: string;
    newsAuthor: {
      firstname: string,
      lastname: string,
    }
  }