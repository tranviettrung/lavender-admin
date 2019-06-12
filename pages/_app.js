import React from 'react';
import App, { Container } from 'next/app';
import redirectTo from '../lib/redirectTo';
import axios from 'axios';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    // setting default config
    axios.defaults.baseURL = 'https://lavender.test/api';

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if(ctx.pathname != '/auth/login') {
      redirectTo('/auth/login', { res: ctx.res, status: 301 });
    }

    return { pageProps };
  }
  
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;