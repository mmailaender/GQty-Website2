import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";
import gqtyLogo from "./components/icons/gqty/logo.svg";

const config: DocsThemeConfig = {
  logo: <Image src={gqtyLogo} alt="GQty Logo" width={86} height={45} />,
  project: {
    link: "https://github.com/gqty-dev/gqty",
  },
  chat: {
    link: "https://discord.gg/NZ9U3XjW",
  },
  darkMode: true,
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} &copy;{" "}
        <a href="https://gqty.dev">GQty</a>.
      </span>
    ),
  },
};

export default config;
