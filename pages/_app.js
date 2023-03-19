import "/styles.css";
import { Reshaped } from "reshaped/bundle";
import "reshaped/themes/reshaped/theme.css";
import "reshaped/bundle.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Reshaped theme="reshaped" defaultColorMode="dark">
      <Component {...pageProps} />
    </Reshaped>
  );
}
