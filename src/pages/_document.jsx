import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Ayman Nabgouri</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body id="root" className="bg-zinc-900 text-zinc-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
