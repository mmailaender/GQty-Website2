import nextra from "nextra";

/**
 * @type {import("nextra").NextraConfig}
 */
const nextraConfig = {
  latex: true,
  mdxOptions: {
  },
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
};

const withNextra = nextra(nextraConfig);

export default withNextra();
