import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import nextCookies from 'next-cookies';
import withRedux from 'next-redux-wrapper';

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

    if(token) {
      let store = ctx.store.getState();

      if(!store.auth.token) {
        ctx.store.dispatch(reauthenticate(token));
      }

      if(!process.browser) {
        clientConfig(token);
      }
      
      if(!store.auth.user) {
        await ctx.store.dispatch(loadAuthUser());
      }
    }

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return {pageProps};
  }

  constructor(props) {
    super(props);

    if(process.browser) {
      let store = this.props.store.getState();
      clientConfig(store.auth.token);
    }
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