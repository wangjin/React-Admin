/**
 * 菜单项
 * Created by 王金 on 2016/12/9.
 */

require('styles/Menu.css');
import React from 'react';

export default class MenuItem extends React.Component {

  render() {
    return (<div>

      <li>
        <a
          href={this.props.url}
          title="Admin Dashboard"
          className="sfActive">
          <i className="glyph-icon icon-linecons-tv"/>
          <span>{this.props.name}</span>
        </a>
      </li>
    </div>)
  }
}
