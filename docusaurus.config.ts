import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "astrsk.ai",
  tagline:
    "Next-generation AI agentic roleplay app continuously pushing the boundaries of innovative AI technology",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "harpychat", // Usually your GitHub org/user name.
  projectName: "astrsk-ai-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      // title: 'astrsk.ai',
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "/getting-started", label: "Getting Started", position: "left" },
        { to: "/session", label: "Session", position: "left" },
        { to: "/card", label: "Card", position: "left" },
        { to: "/flow", label: "Flow", position: "left" },
        { to: "/provider", label: "Provider", position: "left" },
        {
          href: "https://astrsk.ai",
          label: "Homepage",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.com/invite/J6ry7w8YCF",
            },
            {
              label: "Reddit",
              href: "https://www.reddit.com/r/astrsk_ai/",
            },
            {
              label: "X",
              href: "https://x.com/astrskai",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Medium",
              href: "https://medium.com/astrsk-ai",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/astrsk-ai/",
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} © astrsk.ai All right reserved`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: "dark",
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
