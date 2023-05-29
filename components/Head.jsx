import Head from "next/head";

const GTM_ID = "G-0HHN5D8NY5";

const HeadPages = () => (
  <Head>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GTM_ID}');
        `,
      }}
    ></script>
  </Head>
);

export default HeadPages;
