import type { AppProps } from "next/app";
import Head from "next/Head";
import "../../global.css";
const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>SW Card Battles</title>
        <meta name="description" content="Best Game of 2022 Ever " />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
