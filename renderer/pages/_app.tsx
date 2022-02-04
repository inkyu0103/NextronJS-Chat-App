import { Global } from "@emotion/react";
import { globalStyles } from "../styles/style";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}
