Highcharts.chart('container', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Зарабатная плата'
  },
  xAxis: {
    categories: ['Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь']
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total fruit consumption'
    }
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [{
    name: 'Nikita',
    data: [5000, 4500, 4000, 3500, 2000, 300]
  }, {
    name: 'Anton',
    data: [300, 2000, 3500, 4000, 4500, 5000]
  }, {
    name: 'Sergo',
    data: [100, 0, 1000, 500, 0]
  }]
});
