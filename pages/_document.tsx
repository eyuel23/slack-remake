import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;900&family=Lato:wght@300;400;700;900&family=Merriweather&family=Merriweather+Sans:wght@700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300&family=Sacramento&family=Ubuntu:ital,wght@0,300;0,400;1,500&family=Work+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
