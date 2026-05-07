import Head from "next/head";
import { HomPage } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayman Nabgouri — Full-stack developer</title>
        <meta
          name="description"
          content="Ayman Nabgouri — full-stack developer working in React, Next.js, and TypeScript. Building products end to end."
        />
        <meta property="og:title" content="Ayman Nabgouri" />
        <meta
          property="og:description"
          content="Full-stack developer building products with taste."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomPage />
    </>
  );
}
