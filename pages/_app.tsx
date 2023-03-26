import withTwindApp from "@twind/next/shim/app";
import App from "next/app";
import { Reshaped } from "reshaped/bundle";
import "reshaped/bundle.css";
import "reshaped/themes/reshaped/theme.css";
import twindConfig from "../tailwind.config.js";

export default withTwindApp(
  twindConfig,
  class MyApp extends App {
    render() {
      const { Component, pageProps } = this.props;
      return (
        <Reshaped theme="reshaped">
          <Component {...pageProps} />
        </Reshaped>
      );
    }
  }
);
