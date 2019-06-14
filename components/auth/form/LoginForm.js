import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { PropsTypes } from 'prop-types';

import { login } from '../../../actions/authActions';
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

    static propsTypes = {

    }

    enterLoading() {
        this.setState({ loading: true });
    };

    onSubmit(e){
        e.preventDefault();

        const { email, password } = this.state;
        
    }

    render() {
        return (
            <Form className="login-form" >
                <Form.Item>
                    <Input
                        prefix={<Icon type="user" />}
                        placeholder="Email"
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<Icon type="lock" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Checkbox>Remember me</Checkbox>
                    <Button type="primary" htmlType="submit" block={true} loading={this.state.loading} onClick={this.enterLoading}>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default connect(null, { login })(LoginForm);