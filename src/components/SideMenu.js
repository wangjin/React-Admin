/**
 * Created by 王金 on 2016/12/9.
 */
require('styles/Menu.css');

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
          'iconType':'mail',
          'spin': false,
          'subMenu': [
            {
              'title': 'subMenu1',
              'key': 'subMenu1'
            },
            {
              'title': 'subMenu2',
              'key': 'subMenu2'
            },
            {
              'title': 'subMenu3',
              'key': 'subMenu3'
            }
          ]
        },
        {
          'title': 'Menu2',
          'key': 'menu2',
          'iconType':'mail',
          'spin': false,
          'subMenu': [
            {
              'title': 'subMenu21',
              'key': 'subMenu21'
            },
            {
              'title': 'subMenu22',
              'key': 'subMenu22'
            }
          ]
        },
        {
          'title': 'Menu3',
          'key': 'menu3',
          'iconType':'mail',
          'spin': false
        },
        {
          'title': 'Menu4',
          'key': 'menu4',
          'iconType':'apple',
          'spin': false
        },
        {
          'title': 'Menu5',
          'key': 'menu5',
          'iconType':'mail',
          'spin': false
        }
      ]
    }
  }

  handleClick(e) {
    this.setState({current: e.key});
    // console.log(e);
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
      sub3: ['sub2']
    };
    return map[key] || [];
  }

  /**
   * 渲染菜单
   * @param menuData
   */
  renderMenu(menuData) {
    return menuData.map((menu) => {
      return (
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          selectedKeys={[this.state.current]}
          style={{width: 240}}
          onOpenChange={this.onOpenChange.bind(this)}
          onClick={this.handleClick.bind(this)}
        >
          <SubMenu key={menu.key} title={<span><Icon type={menu.iconType} spin={menu.spin} className="icon_color"/><span>{menu.title}</span></span>}>
            {menu.subMenu ? this.renderMenuItem(menu.subMenu) : null}
          </SubMenu>
          <Menu.Divider/>
        </Menu>);
    });
  }

  /**
   * 渲染菜单项
   * @param menuItems
   */
  renderMenuItem(menuItems) {
    return menuItems.map((item) => {
      return (<Menu.Item key={item.key}>{item.title}</Menu.Item>);
    });
  }

  render() {

    return (
      <div>
        {this.renderMenu(this.state.menuData)}
      </div>
    )
  }
}
