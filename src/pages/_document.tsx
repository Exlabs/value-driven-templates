import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Collection of tools and frameworks in template form to help your team solve problems, make decisions, and successfully finish projects."
          />
          <link rel="icon" href={`${process.env.ASSET_PREFIX}/favicon-32x32.png`}></link>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700|Raleway:400,500,700&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="stylesheet" href="./animations.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
