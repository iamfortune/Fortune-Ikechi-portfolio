import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer"

const Intro = ({ blok }: any) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="mx-auto max-w-[600px] md:w-11/12 w-full"
    >
      <h2 className="sm:text-4xl text-2xl font-extrabold">{blok?.headline}</h2>
      <div className="markdown leading-8 mt-4 md:text-lg text-base font-medium">
        {render(blok.body)}
      </div>
    </div>
  );
};

export default Intro;
