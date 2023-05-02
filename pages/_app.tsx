import withTwindApp from "@twind/next/shim/app";
import { Analytics } from "@vercel/analytics/react";
import App from "next/app";
import { Reshaped } from "reshaped/bundle";
import "reshaped/bundle.css";
import "themes/gqty/theme.css";
import twindConfig from "../tailwind.config.js";

export default withTwindApp(
  twindConfig,
  class MyApp extends App {
    render() {
      const { Component, pageProps } = this.props;
      return (
        <Reshaped theme="gqty" defaultColorMode="dark">
          <Component {...pageProps} />
          <Analytics />
        </Reshaped>
      );
    }
  }
);
