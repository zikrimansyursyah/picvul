import Head from "next/head";

export default function Layout({ pageTitle }) {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Image, Picture, Social Media, Designer"
        />
        <meta name="description" content="an Platform for Image Sharing" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Picvul | {pageTitle} </title>
        <link
          rel="shortcut icon"
          href="/cdn/webassets/picvul-logo.ico"
          type="image/x-icon"
        />
      </Head>
    </>
  );
}
