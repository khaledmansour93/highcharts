import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /* Combination Chart */

  // chart = new Chart({ // Creating an instance of Chart object
  //   title: {  // Chart's main title
  //     text: 'Combination chart' // Chart's title
  //   },
  //   xAxis: {  // X axis or category axis (Normally, Horizontal axis)
  //     categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']  // Using names instead of numbers
  //   },
  //   series: [ // Series options for specific data and the data itself
  //     {
  //       type: 'column',
  //       name: 'Jane',
  //       data: [3, 2, 1, 3, 4]
  //     },
  //     {
  //       type: 'column',
  //       name: 'John',
  //       data: [2, 3, 5, 7, 6]
  //     },
  //     {
  //       type: 'column',
  //       name: 'Joe',
  //       data: [4, 3, 3, 9, 0]
  //     },
  //     {
  //       type: 'spline',
  //       name: 'Average',
  //       data: [3, 2.67, 3, 6.33, 3.33]
  //     },
  //     {
  //       type: 'pie',
  //       name: 'Total consumption',
  //       data: [
  //         {
  //           name: 'Jane',
  //           y: 13 // Y value of point
  //         },
  //         {
  //           name: 'John',
  //           y: 23
  //         },
  //         {
  //           name: 'Joe',
  //           y: 19
  //         }
  //       ],
  //       center: [100, 80],  // The center of the pie chart relative to the plot area (% or px)
  //       size: 100,  // The diameter of the pie relative to the plot area (% or px)
  //       dataLabels: { // Options for the series data labels, appearing next to each data point
  //         enabled: false
  //       }
  //     },
  //   ]
  // });

  /* Basic Column Chart */

  basicColumnChart = new Chart({
    title: {
      text: 'Monthly Average Rainfall'
    },
    subtitle: {
      text: 'Source: WorldClimate.com'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Rainfall (mm)'
      }
    },
    tooltip: {
      headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
        '<td style = "padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>', shared: true, useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      type: 'column',
      name: 'Tokyo',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6,
        148.5, 216.4, 194.1, 95.6, 54.4]
    },
    {
      type: 'column',
      name: 'New York',
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3,
        91.2, 83.5, 106.6, 92.3]
    },
    {
      type: 'column',
      name: 'London',
      data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6,
        52.4, 65.2, 59.3, 51.2]
    },
    {
      type: 'column',
      name: 'Berlin',
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4,
        47.6, 39.1, 46.8, 51.1]
    }]
  });

  /* Basic Line Chart */

  basicLineChart = new Chart({
    title: {
      text: 'Monthly Average Temperature'
    },
    subtitle: {
      text: 'Source: WorldClimate.com'
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {
      title: {
        text: "Temperature °C"
      }
    },
    tooltip: {
      valueSuffix: " °C"
    },
    series: [{
      type: 'spline',
      name: 'Tokyo',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    },
    {
      type: 'spline',
      name: 'New York',
      data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    },
    {
      type: 'spline',
      name: 'Berlin',
      data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    },
    {
      type: 'spline',
      name: 'London',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
  });

  /* Basic Pie Chart */

  basicPieChart = new Chart({
    chart: {
      plotBorderWidth: undefined,
      plotShadow: false
    },
    title: {
      text: 'Browser market shares at a specific website, 2014'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && 'contrast') ||
              'black'
          }
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      data: [
        ['Firefox', 45.0],
        ['IE', 26.8],
        {
          name: 'Chrome',
          y: 12.8,
          sliced: true,
          selected: true
        },
        ['Safari', 8.5],
        ['Opera', 6.2],
        ['Others', 0.7]
      ]
    }]
  });

  /* Basic Bar Chart */

  basicBarChart = new Chart({
    title: {
      text: 'Historic World Population by Region'
    },
    subtitle: {
      text: 'Source: Wikipedia.org'
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 460,
      y: 100,
      floating: true,
      borderWidth: 1,

      backgroundColor: (
        (Highcharts.theme && Highcharts.theme.legend?.backgroundColor) ||
        '#FFFFFF'), shadow: true
    },
    xAxis: {
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'], title: {
        text: null
      }
    },
    yAxis: {
      min: 0, title: {
        text: 'Population (millions)', align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ' millions'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    credits: {
      enabled: true
    },
    series: [
      {
        type: 'bar',
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2]
      },
      {
        type: 'bar',
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
      },
      {
        type: 'bar',
        name: 'Year 2008',
        data: [973, 914, 4054, 732, 34]
      }
    ]
  });
}
