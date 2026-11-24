// session 3
export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  thumbnail: string;
  images: string[];
}
// end of session 3

// session 8
export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
  reactions: { likes: number; dislikes: number };
  views: number;
  tags: string[];
}
// end of session 8

// session 10
export interface IUser {
  id: number;
  firstName: string;
  username: string;
  password: string;
}
// end of session 10
