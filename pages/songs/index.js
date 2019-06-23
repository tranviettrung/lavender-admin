import React from 'react';
import MainLayout from '../../components/layout/MainLayout';

class Index extends React.Component {
  static async getInitialProps({ Component, ctx }) {
    console.log('getInitialProps song index');
  }

  render() {
    return (
      <MainLayout>
        
      </MainLayout>
    )
  }
}

export default Index;