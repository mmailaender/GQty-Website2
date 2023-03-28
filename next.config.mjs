import nextra from "nextra";
import { remarkMermaid } from "remark-mermaid-nextra";

/**
 * @type {import("nextra").NextraConfig}
 */
const nextraConfig = {
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  mdxOptions: {
    remarkPlugins: [remarkMermaid],
  },
};

const withNextra = nextra(nextraConfig);

export default withNextra();
