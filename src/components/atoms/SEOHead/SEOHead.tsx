import { FC } from "react";
import NextHead from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

const SEOHead: FC<SEOHeadProps> = ({
  title = "",
  description = "Fortune Ikechi — Software Engineer, Technical Writer, and Developer Relations Engineer.",
  ogImage = "https://res.cloudinary.com/origho-precious/image/upload/v1675376558/City_Js_165_1_voc5wt.webp"
}) => {
  const capitalizeFirstLetter = (string: any) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const capitalizedTitle = capitalizeFirstLetter(title);
  const joinedTitle = title
    ? `Fortune Ikechi | ${capitalizedTitle}`
    : "Fortune Ikechi";

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{joinedTitle}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="robots" content="all" />
      <meta name="googlebot" content="all" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#DAF40A" />
      <meta
        name="keywords"
        content="Software Engineer, Technical Writer, Developer Relations Engineer, Content Creator, MERN stack Developer, Web Developer, Nigeria, Africa"
      />
      <meta property="og:url" content="http://fortuneikechi.com" />
      <meta property="og:title" content={description} />
      <meta property="og:site_name" content={description} />
      <meta
        property="og:description"
        content="Fortune is a Software Engineer, Technical Writer, and Developer Relations Engineer."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@Codedog_" />
      <meta name="twitter:site" content="@Codedog_" />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="675" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta
        name="application-name"
        content="Fortune Ikechi — Software Engineer, Content Creator, and Developer Advocate."
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Fortune Ikechi" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#DAF40A" />
      <meta name="msapplication-tap-highlight" content="yes" />

      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#01192F" />
    </NextHead>
  );
};

export default SEOHead;
