/**
 * 页面头部JS
 * Created by wangjin on 2016/12/1.
 */
import React from "react";

export default class Header extends React.Component {

  fetchData(){
    fetch("http://localhost:8080/emalldemo/ProductsServlet?action=productlist")
      .then(response => response.text())
      .then(responseText => {
        alert(responseText);
      })
      .catch((error) => {
        alert("error");
      });
  }

  render() {
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
