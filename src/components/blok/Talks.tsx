import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import SEOHead from "../atoms/SEOHead/SEOHead";

const Talks = ({ blok }: any) => {
    
  return (
    <>
    <SEOHead title="All my talks" />

    <div
      {...storyblokEditable(blok)}
      className="mx-auto max-w-[600px] md:w-11/12 w-full"
    >
      <div className="markdown leading-8 mt-4 md:text-lg text-base font-medium -ml-4">
        {render(blok.body)}
      </div>
    </div>
  </>
  );
};

export default Talks;