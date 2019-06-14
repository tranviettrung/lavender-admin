import React from 'react';
import App, { Container } from 'next/app';
import redirectTo from '../lib/redirectTo';
import axios from 'axios';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';

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
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);