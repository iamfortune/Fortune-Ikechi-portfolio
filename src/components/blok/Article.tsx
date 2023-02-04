/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { render } from "storyblok-rich-text-react-renderer";
import { IArticle } from "../../interfaces/IArticle";
import { convertDate } from "../../utils/helper-functions";

const Article: FC<{ blok: IArticle }> = ({ blok }) => {
  return (
    <section className="w-full mx-auto overflow-x-hidden mb-20">
      <div className="mx-auto flex items-center justify-center flex-col">
        <div className="w-full">
          <div className="text-center max-w-[800px] mx-auto mb-14">
            <h1 className="sm:text-4xl text-3xl mb-2 font-extrabold">
              {blok.title}
            </h1>
            <p>{convertDate(blok.published_at)}</p>
          </div>
          <img
            className="sm:block hidden"
            src={blok.image.filename}
            alt={blok.image.alt}
            style={{ height: 480, width: "100%", objectFit: "cover" }}
          />
          <div className="max-w-[800px] mx-auto mt-12">
            <blockquote>
              <p className="text-left text-lg mb-10 font-medium">
                {blok.intro}
              </p>
            </blockquote>
            <div className="mb-8 leading-relaxed text-justify markdown">
              {render(blok.body)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
