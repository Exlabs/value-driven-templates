import React from 'react';
import NextApp from 'next/app';
import Head from 'next/head';

import '../../.css/antd.less';
import { ThemeProvider } from '../providers/theme.provider';

export default class App extends NextApp {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <title>VDT | Value Driven Templates</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <ThemeProvider>
          <Component {...pageProps} key={router.route} />
        </ThemeProvider>
      </>
    );
  }
}
