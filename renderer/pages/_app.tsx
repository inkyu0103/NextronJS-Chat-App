import { Global } from "@emotion/react";
import { globalStyles } from "../styles/style";
import { initializeApp } from "firebase/app";
import SEO from "../components/common/SEO";
import { firebaseConfig } from "../components/key";
import { store } from "../redux/store";
import { Provider, useSelector } from "react-redux";

export const app = initializeApp(firebaseConfig);

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SEO title="Metri" />
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </Provider>
  );
}
