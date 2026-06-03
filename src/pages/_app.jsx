import "@/styles/globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

// Microsoft Clarity project ID — replace with your own from clarity.microsoft.com
const CLARITY_PROJECT_ID = "x1by2b9ylg";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script id="ms-clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");`}
      </Script>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
