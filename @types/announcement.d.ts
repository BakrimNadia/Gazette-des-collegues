export interface IAnnouncement {
    id: number;
    picture?: string;
    title: string;
    price: string;
    author: string;
    content: string;
    date_publication: string;
    category: {name: string};
    category_id: number;
  }