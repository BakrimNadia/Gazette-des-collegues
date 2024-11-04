export interface IUser {
    id: number;
    avatar?: string;
    lastname: string;
    firstname: string;
    email: string;
    password: string;
    role: string;
    is_active: boolean;
  }