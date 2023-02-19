/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Link from "next/link";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import ArticleTeaser from "./ArticleTeaser";

const Teaser = ({ blok }: any) => {
  const storyblokApi = getStoryblokApi();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const getArticles = async () => {
    setLoading(true);

    try {
      const res = await storyblokApi?.get(`cdn/stories/`, {
        starts_with: "blog/",
        is_startpage: false,
        version: "draft",
        page: 1,
        per_page: 3,
        sort_by: "first_published_at:desc"
      } as any);

      setArticles((_prev) =>
        res?.data?.stories?.map((article: any) => {
          article.content.slug = article.slug;
          return article;
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  console.log(articles);

  if (!articles?.length) return null;

  return (
    <div className="mt-20">
      <h2 className="text-center text-3xl mb-12 font-bold">{blok.title}</h2>
      <div
        {...storyblokEditable(blok)}
        className="grid w-full grid-cols-1 md:grid-cols-2 gap-8 mx-auto lg:grid-cols-3 mb-16"
      >
        {articles?.length
          ? articles.map((article: any) => (
              <ArticleTeaser key={article.uuid} blok={article.content} />
            ))
          : null}
      </div>

      <div className="flex justify-center mb-20">
        <Link
          href="/blog"
          className="text-center text-lg font-bold hover:text-gray-700 transition-all duration-300 ease-in-out"
        >
          View all articles
        </Link>
      </div>
    </div>
  );
};

export default Teaser;
