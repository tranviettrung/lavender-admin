import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.enterLoading = this.enterLoading.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        loading: false,
        email: '',
        password: ''
    };

    enterLoading() {
        this.setState({ loading: true });
    };

    onSubmit(e){
        e.preventDefault();

        const { email, password } = this.state;
        
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form className="login-form" >
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your email'}]
                    })(
                        <Input
                            prefix={<Icon type="user" />}
                            placeholder="Email"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }]
                    })(
                        <Input
                            prefix={<Icon type="lock" />}
                            type="password"
                            placeholder="Password"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <Button type="primary" htmlType="submit" block={true} loading={this.state.loading} onClick={this.enterLoading}>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create({ name: 'login_form'})(LoginForm);