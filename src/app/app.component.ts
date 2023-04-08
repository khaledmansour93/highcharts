import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  chart = new Chart({ // Creating an instance of Chart object
    title: {  // Chart's main title
      text: 'Combination chart' // Chart's title
    },
    xAxis: {  // X axis or category axis (Normally, Horizontal axis)
      categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']  // Using names instead of numbers
    },
    series: [ // Series options for specific data and the data itself
      {
        type: 'column',
        name: 'Jane',
        data: [3, 2, 1, 3, 4]
      },
      {
        type: 'column',
        name: 'John',
        data: [2, 3, 5, 7, 6]
      },
      {
        type: 'column',
        name: 'Joe',
        data: [4, 3, 3, 9, 0]
      },
      {
        type: 'spline',
        name: 'Average',
        data: [3, 2.67, 3, 6.33, 3.33]
      },
      {
        type: 'pie',
        name: 'Total consumption',
        data: [
          {
            name: 'Jane',
            y: 13 // Y value of point
          },
          {
            name: 'John',
            y: 23
          },
          {
            name: 'Joe',
            y: 19
          }
        ],
        center: [100, 80],  // The center of the pie chart relative to the plot area (% or px)
        size: 100,  // The diameter of the pie relative to the plot area (% or px)
        dataLabels: { // Options for the series data labels, appearing next to each data point
          enabled: false
        }
      },
    ]
  });

}
