import React from "react";
import { Doughnut } from "react-chartjs-2";
class Chart extends React.Component {
  state = {
    labels: ["Min Price", "Max Price", "Modal Price"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  render() {
    return (
      <>
        <div>
          <h2>Doughnut Example</h2>
          <Doughnut data={this.state} />
        </div>
      </>
    );
  }
}

export default Chart;
