import fs from "fs";
import { globby } from "globby";
import prettier from "prettier";

(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc");

  const pages = await globby([
    // ignored routes
    "!src/pages/app/**/*.{js,jsx,ts,tsx,mdx}",
    "!src/pages/**/[*.{js,jsx,ts,tsx,mdx}",

    // Allowed routes
    "src/pages/index.tsx",
    "src/pages/blog/**/*.{js,jsx,ts,tsx,mdx}"
  ]);

  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace("src/pages", "")
                  .replace(/\.[^/.]+$/, ""); // Remove "src/pages" and file extension
                const indexPath = path === "/index";
                const route = path.replace("/index", "");
                const changeFreq = "<changefreq>weekly</changefreq>";
                const priority = indexPath
                  ? "<priority>1.00</priority>"
                  : "<priority>0.80</priority>";

                return `
                        <url>
                            <loc>${`https://fortuneikechi.com${route}`}</loc>
                            <lastmod>${new Date().toISOString()}</lastmod>
                            ${changeFreq}
                            ${priority}
                        </url>
                    `;
              })
              .join("")}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html"
  });

  fs.writeFileSync("public/sitemap.xml", formatted);
})();
