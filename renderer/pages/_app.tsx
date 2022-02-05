import { Global } from "@emotion/react";
import { globalStyles } from "../styles/style";
import { initializeApp } from "firebase/app";
import SEO from "../components/common/SEO";
import { firebaseConfig } from "../components/key";

// secret

export default function App({ Component, pageProps }) {
  const app = initializeApp(firebaseConfig);
  console.log(pageProps, "pageprops");
  return (
    <>
      <SEO title="Metri" />
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}
