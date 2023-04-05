import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <Image src="/logo/gqty.svg" alt="GQty Logo" width={86} height={45} />,
  project: {
    link: "https://github.com/gqty-dev/gqty",
  },
  chat: {
    link: "https://discord.gg/NZ9U3XjW",
  },
  darkMode: true,
  docsRepositoryBase: "https://github.com/gqty-dev/GQty-Website",
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} &copy;{" "}
        <a href="https://gqty.dev">GQty</a>.
      </span>
    ),
  },
  useNextSeoProps: () => {
    const { asPath } = useRouter();

    return {
      titleTemplate: asPath === "/" ? "GQty" : "%s - GQty",
      description: "A No-GraphQL Client for TypeScript",
    };
  },
};

export default config;
