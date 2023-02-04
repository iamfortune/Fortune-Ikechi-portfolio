import { storyblokEditable } from "@storyblok/react";

const Intro = ({ blok }: any) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="mx-auto max-w-[600px] md:w-11/12 w-full"
    >
      <h2 className="sm:text-4xl text-2xl font-extrabold">{blok?.headline}</h2>
      <p className="leading-8 mt-4 md:text-lg text-base font-medium">
        {blok?.paragraph1}
      </p>
      <p className="leading-8 mt-4 md:text-lg text-base font-medium">
        {blok?.paragraph2}
      </p>
      <p className="leading-8 mt-4 md:text-lg text-base font-medium">
        {blok?.paragraph3}
      </p>
    </div>
  );
};

export default Intro;
