import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: [
          'Product A',
          'Product B',
          'Product C',
          'Product D',
          'Product E',
        ],
        datasets: [
          {
            label: 'Number of Sales',
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75,192,192,0.8)',
            hoverBorderColor: 'rgba(75,192,192,1)',
            data: [12, 19, 3, 5, 2],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <HorizontalBar
          data={this.state.data}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
