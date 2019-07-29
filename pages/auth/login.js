import React from 'react';
import { Row, Col } from 'antd';

import LoginForm from '../../components/auth/form/LoginForm';

import '../../static/less/login.less';

class Login extends React.Component {
    render() {
        return (
            <Row>
                <Col span={4} offset={10}><LoginForm/></Col>
            </Row>
        );
    }
}

export default Login;