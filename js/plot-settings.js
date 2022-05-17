const plot = document.querySelector('#plot-element');

const planData = {
  x: [0, 24],
  y: [100, 100],
  mode: 'lines',
  name: 'План добычи',
};

const actuallyDayData = {
  x: [0, 1, 2, 20, 24],
  y: [0, 10, 15, 80, 100],
  mode: 'lines',
  name: 'Добыто (сутки)',
};

const actuallyHourData = {
  x: [0, 1, 2, 3, 4, 5],
  y: [1, 50, 20, 30, 10],
  type: 'bar',
  name: 'Добыто (час)',
};

const predictionData = {
  x: [0, 24],
  y: [0, 100],
  type: 'lines',
  line: {
    dash: 'dash',
    width: 2,
  },
  name: 'Прогноз добычи',
};

const data = [planData, actuallyDayData, actuallyHourData, predictionData];

Plotly.newPlot(plot, data, {
  margin: { t: 0 }
});


