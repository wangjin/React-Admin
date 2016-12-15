/**
 * Created by 王金 on 2016/12/9.
 */
import React from 'react';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;

export default class SideMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      current: '1',
      openKeys: [],
      menuData: [
        {
          'title': 'Menu1',
          'key': 'menu1',
          'spin': false,
          'subMenu': [
            {
              'title': 'subMenu1',
              'key': 'subMenu1',
            },
            {
              'title': 'subMenu2',
              'key': 'subMenu2',
            }
          ]
        },
        {
          'title': 'Menu2',
          'key': 'menu2',
          'spin': false
        },
        {
          'title': 'Menu3',
          'key': 'menu3',
          'spin': false
        },
        {
          'title': 'Menu4',
          'key': 'menu4',
          'spin': false
        },
        {
          'title': 'Menu5',
          'key': 'menu5',
          'spin': false
        }
      ]
    }
  }

  handleClick(e) {
    this.setState({current: e.key});
    console.log(e);
  }

  onOpenChange(openKeys) {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({openKeys: nextOpenKeys});
  }

  getAncestorKeys(key) {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  }

  render() {

    const menuItems = this.state.menuData.map(menu => {
      return (
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          selectedKeys={[this.state.current]}
          style={{width: 240}}
          onOpenChange={this.onOpenChange.bind(this)}
          onClick={this.handleClick.bind(this)}
        >
          <SubMenu key={menu.key} title={<span><Icon type="mail" spin={menu.spin}/><span>{menu.title}</span></span>}>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <Menu.Divider/>
        </Menu>
      );
    });
    return (
      <div>
        {menuItems}
      </div>
    )
  }
}
