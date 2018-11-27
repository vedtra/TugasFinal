import React, { Component } from 'react';
import List from './Detail.css';
import Highcharts from '../Charts/Highcharts';

function contentClass(isShow) {
  if (isShow) {
    return "contents";
  }
  return "content invisible";
}

class detail extends Component {
  constructor(props) {
    super(props);
    this.state = {isShow: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(function(prevState) {
      return {isShow: !prevState.isShow};
    });
  }

  render(){
    return (
      <div>
        <div className='details' onClick={this.handleClick}><span class="detail">Lihat Detail</span><span class="caret"></span> </div>
        <div className="try">
        <div className={contentClass(this.state.isShow)}><Highcharts /></div></div>
      </div>
    );
  }
}
export default detail;