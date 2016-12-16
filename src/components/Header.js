/**
 * 页面头部JS
 * Created by wangjin on 2016/12/1.
 */
require('styles/Header.css');
import React from 'react';
import Popconfirm from 'antd/lib/popconfirm';
import Button from 'antd/lib/button';

import 'antd/dist/antd.css';

export default class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      iconLoading: false
    }
  }

  enterIconLoading() {
    this.setState({iconLoading: true});
  }

  render() {
    return (
      <div className="header">
        <div className="admin-title">React Admin</div>
        <div className="user-info">
          <Popconfirm placement="bottom" title="退出登录" ookText="确定">
            <Button
              type="primary"
              icon="poweroff"
              loading={this.state.iconLoading}
              onClick={this.enterIconLoading.bind(this)}>
              登出
            </Button>
          </Popconfirm>
        </div>
      </div>
    )
  }
}


class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '按钮'}
  }

  getData() {
    fetch('http://127.0.0.1:8080/saveUser', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: 'aaa',
        age: '1'
      })
    }).then(response => {
      if (response.ok) {
        response.json().then(
          data => {
            alert(data.name);
          }
        )
      } else {
        alert('错误码:' + response.status);
      }
    }).catch(error => {
      alert(error);
    })
  }

  handleClick() {
    this.setState({name: this.refs.buttonInput.value});
  }

  render() {
    return (
      <div className="">
        <input ref="buttonInput" type="text"/>
        <br/>
        <button onClick={this.handleClick.bind(this)}>{this.state.name}</button>
      </div>
    );
  }
}
