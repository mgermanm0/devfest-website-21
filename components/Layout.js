import styled from "styled-components";
import Head from "next/head";
import { Navbar } from "./Navbar";
import { GA_TRACKING_ID } from "../lib/gtag";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

const Layout = (props) => (
  <div>
    <Head>
      <title>DevFest GDG Jaén 2022</title>
      <meta
        name="description"
        content="El DevFest GDG Jaén 2022 es una gran conferencia multi-plataforma de carácter inclusivo para tod@s l@s developers. ¡El GDG te invita a unirte en Jaén, el 19 de Noviembre de 2022 en la Universidad de Jaén!"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta
        property="og:image"
        content="https://ik.imagekit.io/gdgjaen/devfest-2021/banner_tMB7jCZ_O.png"
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@GdgJaen" />
      <meta name="twitter:title" content="DevFest GDG Jaén 2021" />
      <meta
        name="twitter:description"
        content="El DevFest GDG Jaén 2022 es una gran conferencia multi-plataforma de carácter inclusivo para tod@s l@s developers. ¡El GDG te invita a unirte en Jaén, el 19 de Noviembre de 2022 en la Universidad de Jaén!"
      />
      <meta name="twitter:creator" content="@GDG_NewOrleans" />
      <meta
        name="twitter:image"
        content="https://ik.imagekit.io/gdgjaen/devfest-2021/banner_tMB7jCZ_O.png"
      />
      <meta name="twitter:image:alt" content="New DevFest skyline" />
      <meta
        name="twitter:domain"
        content="https://gdgjaen-devfest.vercel.app/"
      />

      <link
        rel="preconnect"
        href="https://fonts.gstatic.com/"
        crossOrigin="true"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Product+Sans:400&amp;lang=en&amp;display=swap"
        rel="stylesheet"
      ></link>
      <style>
        {`
          body{
            color:#555555;
            font-family: 'Open Sans', "Helvetica", "Arial", sans-serif;
            margin: 0;}
          body h1 {
            font-size: 1.6em;
            font-family: 'Product Sans', "Helvetica", "Arial", sans-serif;}
          body h2 {
            font-size: 1.4em;
            font-family: 'Product Sans', "Helvetica", "Arial", sans-serif;}
        `}
      </style>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/static/browserconfig.xml" />
      <meta name="theme-col</meta>or" content="#ffffff" />
      {/* {Global site tag (gtag.js) - Google Analytics} --> */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
    </Head>
    <Navbar />
    <Main>{props.children}</Main>
  </div>
);

export default Layout;
