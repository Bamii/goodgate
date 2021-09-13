(function() {
  const CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)',
    brown: '#4D4A21',
    orange: '#F57F3D',
    lime: '#A0DA62'
  };

  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  // new Chartist.Pie('#loan_statistic_chart', {
  //   series: [20, 10, 30, 40]
  // }, {
  //   donut: true,
  //   donutWidth: 60,
  //   donutSolid: true,
  //   startAngle: 270,
  //   showLabel: true,
  //   labelPosition: 'center',
  //   labelDirection: 'explode',
  //   labelOffset: 50,
  //   width: '18rem',
  //   height: '18rem',
  //   plugins: [
  //     ctPointLabels({
  //       textAnchor: 'middle'
  //     })
  //   ]
  // });

  

  
  var ctx1 = document.getElementById('loan_statistic_chart').getContext('2d');
  var ctx2 = document.getElementById('repayment_bar_chart').getContext('2d');
  var ctx3 = document.getElementById('funds_pie_chart').getContext('2d');


  new Chart(ctx1, {
    type: 'doughnut',
    data: {
      labels: [
        'Approved Loan',
        'Pending Loan',
        'Declined Loan',
        'Repaid'
      ],
      datasets: [
        {
          label: 'Dataset 1',
          data: [100,91,52,78],
          backgroundColor: Object.values(CHART_COLORS),
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        }
      }
    },
  });

  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: MONTHS,
      datasets: [
        {
          label: 'Paid',
          data: [1,2,3,4,5,6,7,8,9,9,8,7],
          borderColor: CHART_COLORS.red,
          borderRadius: 5,
          backgroundColor: CHART_COLORS.lime,
        },
        {
          label: 'Overdue',
          data: [1,2,3,4,5,6,7,8,9,9,8,7],
          borderColor: CHART_COLORS.blue,
          borderRadius: 5,
          backgroundColor: CHART_COLORS.orange,
        },
        {
          label: 'Total',
          data: [1,2,3,4,5,6,7,8,9,9,8,7],
          borderColor: CHART_COLORS.green,
          borderRadius: 5,
          backgroundColor: CHART_COLORS.brown,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      }
    },
  });

  new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: [
        'Total Loaned',
        'Total Returned',
      ],
      datasets: [
        {
          label: 'Dataset 1',
          data: [100,91],
          backgroundColor: Object.values(CHART_COLORS),
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        }
      }
    },
  });
})();