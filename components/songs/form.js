import React from 'react';
import cookie from 'js-cookie';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Upload
} from 'antd';

const Dragger = Upload.Dragger;

class SongForm extends React.Component {
  state = {
    name: null,
    lyric: null,
    selectedSong: null,
    uploadedSongs: [],
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({uploadedSongs: this.props.uploadedSongs}) 
  }

  handleSubmit(e) {
    e.preventSubmit();
    console.log('submit');
    console.log(this.state);
  };

  setSelectedSong(id) {
    this.setState({selectedSong: id})
  }

  onChangeInput(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    let selectedSongLabel = this.state.uploadedSongs.map(uploadedSong => {
      if(uploadedSong.uid === this.state.selectedSong) {
        return uploadedSong.path;
      }
    });

    const token = cookie.get('token');
    const uploadProps = {
      action: 'http://lavender.test/api/songs/upload',
      name: 'song',
      headers: {
        'Authorization': token ? `Bearer ${token}` : '',
      },
      multiple: true,
      defaultFileList: this.state.uploadedSongs,
      onPreview: file => {
        this.setSelectedSong(file.uid);
      }
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Title">
          <Input />
        </Form.Item>
        <Form.Item label="Upload">
          <Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              {selectedSongLabel}
            </p>
          </Dragger>
        </Form.Item>
        <Form.Item label="Lyric">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default SongForm;