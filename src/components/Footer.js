/**
 * 页面底部JS
 * Created by wangjin on 2016/12/1.
 */

require('styles/Footer.css')
import React from "react";

export default class Footer extends React.Component {
  render() {
    let date = new Date();
    let currentYear = date.getFullYear(); //获取当前年份

    return (
      <div className="footer">
        <div className="copyright">&copy;{currentYear}&nbsp;江苏鸿信系统集成有限公司&nbsp;版权所有</div>
      </div>
    );
  }
}
