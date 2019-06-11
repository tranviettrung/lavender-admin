import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if(ctx.pathname != '/auth/login') {
      Router.push('/auth/login');
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