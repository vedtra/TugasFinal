import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactHighstock from 'react-highcharts/ReactHighstock';


const getConfig = data => ({
  rangeSelector: {
    selected: 1
  },
  title: {
  text: 'Kinerja Masa Lalu'
  },
  series: [{
    name: 'AAPL',
    data: data,
  tooltip: {
    valueDecimals: 2
    }
  }]
});

class highcharts extends Component {
  constructor() {
    super();
    this.state = {
      dataResults: [],
    }
  }

  componentDidMount() {
    this.getData();
  }  

  getData = () => {
    fetch('https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          dataResults: data
        });
      });
    }

  render() {

    const { dataResults } = this.state;
    const chartConfig = getConfig(dataResults);
    return (
      
      <ReactHighstock config={chartConfig}/>
    );
  }
}
export default highcharts;