export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: number;
  title: string;
  slug?: any;
  metadata?: string;
  body?: string;
  body1?: string;
  body2?: string;
  body3?: string;
  body4?: string;
  body5?: string;
  body6?: string;
  body7?: string;
  body8?: string;
  body9?: string;
  body10?: string;
  mainImage: string;
  secondImage?: string;
  thirdImage?: string;
  fourthImage?: string;
  author?: string;
  tags?: string[];
  publishedAt?: string;
};
