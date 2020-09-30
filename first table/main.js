document.addEventListener('DOMContentLoaded', function () {
  var myChart = Highcharts.chart('container', {
      chart: {
          type: 'bar'
      },
      title: {
          text: '% подготовки:'
      },
      xAxis: {
          categories: ['ОП', 'JS', 'CSS']
      },
      yAxis: {
          title: {
              text: '<b>0-o</b>'
          }
      },
      series: [{
          name: 'Антон',
          data: [30, 85, 50]
      }, {
          name: 'Кот Барбос',
          data: [70, 15, 99]
      }]
  });
});
