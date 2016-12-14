/**
 * 页面头部JS
 * Created by wangjin on 2016/12/1.
 */
import React from 'react';

export default class Header extends React.Component {

  render() {

    // var data = this.getData();

    return (
      <div>
        <div></div>
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
    return (<div>
      <input ref="buttonInput" type="text"/>
      <br/>
      <button onClick={this.handleClick.bind(this)}>{this.state.name}</button>

    </div>);
  }
}
