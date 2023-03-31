import "../styles/globals.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Store from "../store/AppState";
import Article from "../components/blok/Article";
import Grid from "../components/blok/Grid";
import Page from "../components/blok/Page";
import Intro from "../components/blok/Intro";
import BlogPage from "../components/blok/BlogPage";
import Teaser from "../components/blok/Teaser";
import Talks from "../components/blok/Talks";

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    Article: Article,
    BlogPage: BlogPage,
    grid: Grid,
    intro: Intro,
    page: Page,
    Teaser: Teaser,
    Talks: Talks
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  );
}
