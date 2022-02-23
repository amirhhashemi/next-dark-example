import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Head>
        <body className="dark:text-white text-gray-900 dark:bg-gray-900"></body>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
