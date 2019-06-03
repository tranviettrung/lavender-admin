import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
const { Header, Content, Footer, Sider } = Layout;


class MainLayout extends React.Component {
  render() {
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={'4'}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              { this.props.children }
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;