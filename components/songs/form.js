import React from 'react';
import {
    Form,
    Input
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

    return (
      <Form {...formItemLayout} >
        <Form.Item label="Title">
          <Input />
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'songForm'})(SongForm);