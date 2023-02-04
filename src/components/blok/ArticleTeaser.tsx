/* eslint-disable @next/next/no-img-element */
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import { FC, useContext } from "react";
import styled from "styled-components";
import { IArticle } from "../../interfaces/IArticle";
import { AppContext } from "../../store/AppState";
import { convertDate, truncateText } from "../../utils/helper-functions";

const ArticleTeaser: FC<{ blok: IArticle }> = ({ blok }) => {
  const { theme } = useContext(AppContext);

  return (
    <Wrapper
      theme={theme}
      {...storyblokEditable(blok as any)}
      className="text-white flex flex-col justify-between"
    >
      <div className="mb-8">
        <img
          className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
          src={blok.image.filename}
          alt="blog"
        />
        <h2 className="md:text-2xl text-xl font-black mb-3">{blok?.title}</h2>
        <p>{truncateText(blok.intro, 180)}</p>
      </div>
      <div className="flex items-center justify-between">
        <p>{convertDate(blok?.published_at)}</p>
        <Link href={`/blog/${blok.slug}`}>
          <p className="font-bold hover:text-blue-100 transition-all duration-300 ease-in-out">
            Read more
          </p>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ theme: "dark" | "light" }>`
  height: 100%;
  padding: 24px;
  border-radius: 8px;
  transition: all 0.5s ease;
  background: ${({ theme }) => (theme === "dark" ? "#043159" : "#3a7ebf")};
`;

export default ArticleTeaser;
