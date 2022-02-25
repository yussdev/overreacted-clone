import "../styles/globals.css";
import "../styles/theme.scss";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
