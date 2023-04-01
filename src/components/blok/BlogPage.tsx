/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import ArticleTeaser from "./ArticleTeaser";
import Spinner from "../atoms/Spinner/Spinner";
import SEOHead from "../atoms/SEOHead/SEOHead";

const BlogPage = ({ blok }: any) => {
  const storyblokApi = getStoryblokApi();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const getArticles = async () => {
    setLoading(true);

    try {
      const res = await storyblokApi?.get(`cdn/stories/`, {
        starts_with: "blog/",
        is_startpage: false,
        version: "draft"
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

  return (
    <>
    <SEOHead title={blok.title} />

    <div className="w-full">
      <h2 className="text-3xl md:text-left text-center mb-12 font-bold">
        {blok.title}
      </h2>
      {loading ? (
        <div className="flex flex-col items-center">
          <Spinner size={100} />
        </div>
      ) : articles?.length ? (
        <div
          {...storyblokEditable(blok)}
          className="grid w-full grid-cols-1 md:grid-cols-2 gap-8 mx-auto lg:grid-cols-3 mb-20"
        >
          {articles.map((article: any) => (
            <ArticleTeaser key={article.uuid} blok={article.content} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg mt-12">No article at the moment!</p>
      )}
    </div>
  </>
  );
};

export default BlogPage;
