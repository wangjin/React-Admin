/**
 * 菜单项
 * Created by 王金 on 2016/12/9.
 */

import React from 'react'

export default class MenuItem extends React.Component {

  render() {
    return (<div><a href={this.props.url}>{this.props.name}</a></div>);
  }
}
