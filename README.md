# HighchartsApp

The goal of this project is to display a combination of 3 different types of charts (column, spline and pie) in an Angular app using angular-highcharts library

## How to use angular-highcharts?

For this project, angular-highcharts is included using the [distribution package](https://www.npmjs.com/package/angular-highcharts)

## Development environment

- Nodejs v16.15.1
- npm v8.11.0
- Angular CLI v15.2.4
- IDE: VSCode

## Procedures

1. Create an Angular project called *highchartsApp* using the following command: ng new highchartsApp
2. Download and install [angular-highcharts](https://www.npmjs.com/package/angular-highcharts)
3. Modify *app.module.ts*, *app.component.ts* and *app.component.html* (For template: Remove *button* element) as described [here](https://www.npmjs.com/package/angular-highcharts)
4. Modify *app.component.ts* using only the following properties: *title*, *xAxis*, *series* (For *pie* type: Don't use *color* property as it isn't compatible with this version of *angular-highcharts*), *center*, *size* and *dataLabels* described [here](https://www.tutorialspoint.com/angular_highcharts/angular_highcharts_combinations_column.htm)
5. Build app using the following command: ng-serve-o and the output should appear as follows:

![Chart](https://user-images.githubusercontent.com/41340307/230717910-d2a0ebb7-eae5-4a5a-a8f3-ba02ec7bd6ba.PNG)
