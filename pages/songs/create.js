import React from 'react';
import { Form, Input } from 'antd';

import MainLayout from '../../components/layout/MainLayout';
import WrappedSongForm from '../../components/songs/form';

class Index extends React.Component {
  render() {
    return (
      <MainLayout>
        <WrappedSongForm />
      </MainLayout>
    );
  }
}

export default Index;