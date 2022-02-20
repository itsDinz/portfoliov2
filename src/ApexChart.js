import React, {Component} from 'react';
import ReactApexChart from "react-apexcharts";
import './App.css';
      class ApexChart extends Component {
        constructor(props) {
          super(props);
          this.state = {
            options: {
              chart: {
                toolbar:{
                  show: false
                },
                id: "basic-bar"
              },
              xaxis: {
                categories: ["English", "Tamil", "kannada"]
              }
            },
            series: [
              {
                name: "Speakability/ Readability/ Writability",
                data: [100, 100, 33.33]
              }
            ],
          };
        }

render() {
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
    <div className="redirect_column"> Language </div>
          <ReactApexChart 
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}
}

export default ApexChart;