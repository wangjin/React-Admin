/**
 * 页面头部JS
 * Created by wangjin on 2016/12/1.
 */
import React from "react";

export default class Header extends React.Component {


  getData() {
    return (
      fetch("http://61.160.137.78:8080/edp4.0/druid/sql.json", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'no-cors'
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            alert(data)
          });
        } else {
          alert(response.status);
        }
      }).catch((error) => {
        alert("error");
      })
    );
  }


  render() {

    var data = this.getData();

    return (
      <div>
        <div></div>
      </div>
    );
  }
}


class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '按钮'}
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
