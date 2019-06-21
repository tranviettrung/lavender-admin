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
    selectedSong: null
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

    const token = cookie.get('token');
    const uploadProps = {
      action: 'http://lavender.test/api/songs/upload',
      name: 'song',
      headers: {
        'Authorization': token ? `Bearer ${token}` : '',
      },
      multiple: true,
      onChange({ file, fileList}) {
        if(file.status !== 'uploading') {
          console.log(file, fileList);
        }
      },
      onPreview(file) {
        this.setState({selectedSong: file.response.uid});
      }
    };

    return (
      <Form {...formItemLayout} >
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
              Support for a single or bulk upload. Strictly prohibit from uploading company data or other
              band files
            </p>
          </Dragger>
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