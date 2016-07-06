/**
 * Controller: myChartCtrl
 */

app.controller('myChartCtrl', function($scope) {
  var chart = Highcharts.chart('container', {
    chart: {
      type: 'line'
    },

    title: {
      text: "Lee's Weight",
      x: -20 // center
    },

    xAxis: {
      title: {text: 'Month'},
      type: 'datetime',
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
      data: [162.8, 161.8, 162.8, 163.4, 162.4, 161.4, 162.2, 160.4, 161.2, 161.6, 162, 162.4]
    }, {
      name: '7-Day rAvg',
      color: '#27AE60',
      dashStyle: 'longdash',
      data: [163.57, 163.31, 163.46, 163.03, 162.57, 162.4, 162.06, 161.97, 161.8, 161.6, 161.6, 161.6]
    }, {
      name: '30-Day rAvg',
      color: '#F1C40F',
      dashStyle: 'dot',
      data: [162.33, 162.38, 162.44, 162.54, 162.59, 162.58, 162.57, 162.48, 162.38, 162.29, 162.28, 162.38]
    }
  ],

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    }

  })

  $scope.submitForm = function(weight) {
    // $scope.data.push(weight);
    // chart.series[0].data.push(['Jan', weight]);
    chart.series[0].addPoint([3, weight]);
    console.log(chart.series[0].data[0]);
    // Update the chart with $scope.data
    // chart.series[0].addPoint([9, weight], true, true);
    // Update the y-axis
    // console.log("this is weight: ", weight);
    // console.log("this is chart: ", chart.series[0]);
    // chart.yAxis[0].update({
    //   min: 0,
    //   max: Math.max.apply(null, $scope.data),
    //   tickInterval: 10
    // });
    // chart.yAxis[0].update({
    //         labels: {
    //             enabled: false
    //         },
    //         title: {
    //             text: null
    //         }
    //     });
    chart.redraw();
  };
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





// app.controller('myChartCtrl', function($scope) {
//   var chart = Highcharts.chart('container', {
//     chart: {
//       type: 'line'
//     },
//
//     title: {
//       text: "Lee's Weight",
//       x: -20 // center
//     },
//
//     xAxis: {
//       title: {text: 'Month'},
//       type: 'datetime',
//       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//       ]
//     },
//
//     yAxis: {
//       title: {text: 'Weight (Lbs)'},
//     },
//
//     tooltip: {
//       // Hovering over dot shows stats for multiple series
//       shared: true,
//       // Crosshair to aid readability
//       crosshairs: true
//     },
//
//     series: [{
//       name: 'Daily Avg',
//       color: '#2980B9',
//       // data: [160, 170]
//       data: []
//     }],
//
//     legend: {
//       layout: 'vertical',
//       align: 'right',
//       verticalAlign: 'middle',
//       borderWidth: 0
//     }
//   });
//
// //   $('#addNew').on('click', function(e) {
// //     $('#container').highcharts().redraw();
// // });
//
//   $scope.data = [];
//
//   $scope.submitForm = function(weight) {
//     // $scope.data.push(weight);
//     // chart.series[0].data.push(['Jan', weight]);
//     chart.series[0].addPoint([3, weight]);
//     console.log(chart.series[0].data[0]);
//     // Update the chart with $scope.data
//     // chart.series[0].addPoint([9, weight], true, true);
//     // Update the y-axis
//     // console.log("this is weight: ", weight);
//     // console.log("this is chart: ", chart.series[0]);
//     // chart.yAxis[0].update({
//     //   min: 0,
//     //   max: Math.max.apply(null, $scope.data),
//     //   tickInterval: 10
//     // });
//     // chart.yAxis[0].update({
//     //         labels: {
//     //             enabled: false
//     //         },
//     //         title: {
//     //             text: null
//     //         }
//     //     });
//     chart.redraw();
//   };
// });
