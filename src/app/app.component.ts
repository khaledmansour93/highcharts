import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  chart = new Chart({
    title: {
      text: 'Combination chart'
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
    },
    series: [
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
            y: 13
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
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
          enabled: false
        }
      },
    ]
  });

}
