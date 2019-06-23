import React from 'react';
import { Layout, Menu, Icon, Avatar, Spin } from 'antd';
import { connect } from 'react-redux';
import Link from 'next/link';

import 'antd/dist/antd.css';
const { Header, Content, Footer, Sider } = Layout;


class MainLayout extends React.Component {
  render() {
    let user = this.props.user;
    let avatar;
    if(user) {
      avatar = <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large">{user.name}</Avatar>
    }
    else {
      avatar = <Spin/>
    }

    return (
      <Layout>
        <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0
            }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <Link href="/songs"><span className="nav-text" >Songs</span></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="user" />
              <Link href="/songs/create"><span className="nav-text" >Songs create</span></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0 }} >
            {avatar}
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff' }}>
              { this.props.children }
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
};

export default connect(mapStateToProps)(MainLayout);