import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }: any) => {
  return (
    <div className="mt-20 w-full">
      <h1 className="text-center sm:text-4xl text-2xl font-extrabold mb-6">
        My tech stacks
      </h1>
      <div
        {...storyblokEditable(blok)}
        className="w-full sm:grid grid-cols-12 gap-8 justify-center"
      >
        {blok.columns.map((nestedBlok: any) => (
          <div
            key={nestedBlok._uid}
            className="md:col-span-4 sm:col-span-6 sm:my-0 my-8"
          >
            <StoryblokComponent blok={nestedBlok} component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
