import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import nextCookies from 'next-cookies';
import withRedux from 'next-redux-wrapper';
import cookies from 'js-cookie';

import { loadAuthUser, reauthenticate } from '../actions/authActions';
import { initializeStore } from '../store';

import redirectTo from '../lib/redirectTo';
import { clientConfig } from '../lib/client';


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const c = nextCookies(ctx);
    const token = c.token;

    if(!token && ctx.pathname != '/auth/login') {
      redirectTo('/auth/login', { res: ctx.res, status: 301 });
    }

    let store = ctx.store.getState();

    if(!store.auth.token) {
      ctx.store.dispatch(reauthenticate(token));
    }

    clientConfig(token);
    if(!store.auth.user) {
      await ctx.store.dispatch(loadAuthUser());
    }

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return {pageProps};
  }
  
  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initializeStore)(MyApp);