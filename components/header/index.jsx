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
          href="https://drive.google.com/uc?export=view&id=1NBDGJFbZ0o0FGd2Au39DgGDQD8d74xHI"
          type="image/x-icon"
        />
      </Head>
    </>
  );
}
