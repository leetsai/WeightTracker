/**
 * Controller: myChartCtrl
 */

app.controller('myChartCtrl', function($scope) {
  Highcharts.chart('container', {
    chart: {
      type: 'line'
    },

    title: {
      text: "Lee's Weight",
      x: -20 // center
    },

    xAxis: {
      title: {text: 'Month'},
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
    },

    yAxis: {
      title: {text: 'Weight (Lbs)'},
    },

    tooltip: {
      // Hovering over dot shows stats for multiple series
      shared: true,
      // Crosshair to aid readability
      crosshairs: true
    },

    series: [{
      name: 'Daily Avg',
      color: '#2980B9',
      data: [150, 155, 160, 165]
    }, {
      name: '7-Day rAvg',
      color: '#27AE60',
      dashStyle: 'longdash',
      data: [162, 162.5, 161, 160.9, 144.32, 153.7, 169.55, 155.21, 184.9, 124, 163.9, 163.005]
    }, {
      name: '30-Day rAvg',
      color: '#F1C40F',
      dashStyle: 'dot',
      data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
    }
  ],

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    }

  })
});


// app.controller('newTableCtrl', function($scope) {
//   $scope.table = {fields: []};
//
//   $scope.addFormField = function() {
//     $scope.table.fields.push('');
//   }
//
//   $scope.submitTable = function() {
//     console.log($scope.table);
//   }
// });
