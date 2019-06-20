import React from 'react';
import App, { Container } from 'next/app';
import redirectTo from '../lib/redirectTo';
import { Provider } from 'react-redux';
import cookies from 'next-cookies';
import { loadAuthUser } from '../actions/authActions';
import withRedux from 'next-redux-wrapper';
import { initializeStore } from '../store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const c = cookies(ctx);

    if(!c.token && ctx.pathname != '/auth/login') {
      redirectTo('/auth/login', { res: ctx.res, status: 301 });
    }

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return {pageProps};
  }

  // componentWillMount() {
    // let store = this.props.reduxStore;

    // if(!store.getState().user) {
    //   store.dispatch(loadAuthUser()).catch(() => {
        
    //   });
    // }
  // }
  
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