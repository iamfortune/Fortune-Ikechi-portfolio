export interface IArticle {
  body: any;
  image: {
    alt: string;
    filename: string;
    source: string;
    title: string;
  };
  intro: string;
  published_at: string;
  title: string;
  slug?: string;
  _uid: string;
}
