import React from 'react';
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
    const { getFieldDecorator } = this.props.form;

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

    const uploadProps = {
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange({ file, fileList}) {
        if(file.status !== 'uploading') {
          console.log(file, fileList);
        }
      }
    };

    return (
      <Form {...formItemLayout} >
        <Form.Item label="Title">
          {
            getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'Please input songs title'
                }
              ]
            })(<Input />)
          }
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

export default Form.create({ name: 'songForm'})(SongForm);