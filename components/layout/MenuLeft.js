import React from 'react';
import { Menu, Icon } from 'antd';
import Link from 'next/link';
import Router from 'next/router';

class MenuLeft extends React.Component {
  state = {
    current: '1',
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      current: e.key,
    });
    Router.push(e.item.props.href);
  }

  render() {
    return (
      <Menu theme="dark" mode="inline" onClick={this.handleClick} selectedKeys={[this.state.current]}>
        <Menu.Item key="1" href="/songs">
          <Icon type="user" />
          <span className="nav-text" >Songs</span>
        </Menu.Item>
        <Menu.Item key="2" href="/songs/create">
          <Icon type="user" />
          <span className="nav-text" >Songs create</span>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuLeft;
