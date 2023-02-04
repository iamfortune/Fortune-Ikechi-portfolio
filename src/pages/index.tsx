/* eslint-disable react/no-unescaped-entities */
import { FC } from "react";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
  ISbStoriesParams
} from "@storyblok/react";
import SEOHead from "../components/atoms/SEOHead/SEOHead";
import Layout from "../components/layout/Layout";

interface Props {
  story: any;
}

const Home: FC<Props> = ({ story }) => {
  story = useStoryblokState(story);

  return (
    <>
      <SEOHead />
      <Layout>
        <div className="md:mt-20 mt-8">
          <StoryblokComponent blok={story.content} />
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const slug = "home";

  const sbParams = {
    version: "draft" // or 'published'
  };

  const storyblokApi = getStoryblokApi();

  const res = await storyblokApi?.get(
    `cdn/stories/${slug}`,
    sbParams as ISbStoriesParams
  );

  return {
    props: {
      story: res?.data ? res?.data?.story : false,
      key: res?.data ? res?.data?.story.id : false
    },
    revalidate: 3600
  };
}

export default Home;
