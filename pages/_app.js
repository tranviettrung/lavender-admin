import React from 'react';
import App, { Container } from 'next/app';
import redirectTo from '../lib/redirectTo';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';
import cookies from 'next-cookies';
import { loadAuthUser } from '../actions/authActions';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const c = cookies(ctx);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if(!c.token && ctx.pathname != '/auth/login') {
      redirectTo('/auth/login', { res: ctx.res, status: 301 });
    }

    return { pageProps };
  }

  componentWillMount() {
    let store = this.props.reduxStore;

    if(!store.getState().user) {
      store.dispatch(loadAuthUser()).catch(() => {
        
      });
    }
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