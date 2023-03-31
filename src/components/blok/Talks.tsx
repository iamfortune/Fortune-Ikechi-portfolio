import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Talks = ({ blok }: any) => {
    
  return (
    <div
      {...storyblokEditable(blok)}
      className="mx-auto max-w-[600px] md:w-11/12 w-full"
    >
      <div className="markdown leading-8 mt-4 md:text-lg text-base font-medium -ml-4">
        {render(blok.body)}
      </div>
    </div>
  );
};

export default Talks;