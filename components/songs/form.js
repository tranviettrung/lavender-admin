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

class SongForm extends React.Component {
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
      onChange({ file, fileList}) {
        if(file.status !== 'uploading') {
          console.log(file, fileList);
        }
      },
      headers: {
        'Authorization': token ? `Bearer ${token}` : '',
      }
    };

    return (
      <Form {...formItemLayout} >
        <Form.Item label="Title">
          <Input />
        </Form.Item>
        <Form.Item label="Upload">
          <Upload {...uploadProps}>
            <Button>
              <Icon type="upload" />Upload
            </Button>
          </Upload>
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