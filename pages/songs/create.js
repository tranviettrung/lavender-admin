import React from 'react';
import axios from 'axios';

import MainLayout from '../../components/layout/MainLayout';
import WrappedSongForm from '../../components/songs/form';

class Index extends React.Component {
  state = {
    uploadedSongs: [],
  }

  static async getInitialProps({ Component, ctx }) {
    const response = await axios.get('/songs/upload');

    return {
      uploadedSongs: response.data.data
    };
  }

  render() {
    return (
      <MainLayout>
        <WrappedSongForm uploadedSongs={this.props.uploadedSongs} action={ '/songs' } />
      </MainLayout>
    );
  }
}

export default Index;