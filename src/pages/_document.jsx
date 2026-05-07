import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body id="root" className="bg-bg text-fg font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-accent focus:text-bg focus:px-3 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
