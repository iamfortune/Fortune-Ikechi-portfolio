import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
  ISbStoriesParams
} from "@storyblok/react";
import Layout from "../components/layout/Layout";

const DynamicPageWithSlug = ({ story }: any) => {
  story = useStoryblokState(story);

  return (
    <>
      <Layout>
        <StoryblokComponent blok={story.content} />
      </Layout>
    </>
  );
};

export async function getStaticProps({ params }: any) {
  let slug = params?.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: "draft" // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  const res = await storyblokApi?.get(
    `cdn/stories/${slug}`,
    sbParams as ISbStoriesParams
  );

  return {
    props: {
      story: res?.data ? res?.data.story : false,
      key: res?.data ? res?.data.story.id : false
    },
    revalidate: 3600
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  const res = await storyblokApi?.get("cdn/links/", {
    version: "draft"
  });

  let paths: any[] = [];
  if (res?.data) {
    Object.keys(res?.data.links).forEach((linkKey) => {
      if (
        res?.data.links[linkKey].is_folder ||
        res?.data.links[linkKey].slug === "home"
      ) {
        return;
      }

      const slug = res?.data.links[linkKey].slug;
      const splittedSlug = slug.split("/");

      paths.push({ params: { slug: splittedSlug } });
    });
  }

  return {
    paths: paths,
    fallback: false
  };
}

export default DynamicPageWithSlug;
