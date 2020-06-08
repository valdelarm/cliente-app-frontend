import React, { Component } from "react";
import {ACCESS_TOKEN} from './Constantes'
import { Menu, Layout } from 'antd';
import { Link, withRouter} from 'react-router-dom';

const Header = Layout.Header;
class AppHeader extends Component {

    handleMenuClick() {
        localStorage.removeItem(ACCESS_TOKEN)
    }

    render() {
        let menu;
        if (localStorage.getItem(ACCESS_TOKEN)) {
            menu = [
                <Link onClick={this.handleMenuClick}>Logout</Link>
              ]; 
        } else {
            menu = [
                <Menu.Item key="/login">
                  <Link to="/">Login</Link>
                </Menu.Item>,              
              ];
        }

        return (
            <Header className="app-header">
            <div className="container">
              <div className="app-title" >
                <Link to="/">Cliente App</Link>
              </div>
              <Menu
                className="app-menu"
                mode="horizontal"
                selectedKeys={[this.props.location.pathname]}
                style={{ lineHeight: '64px' }} >
                  {menu}
              </Menu>
            </div>
          </Header>
        );
    }
}
export default withRouter(AppHeader);