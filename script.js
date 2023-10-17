

var ctx = document.getElementById('myLineChart').getContext('2d');

var data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Line 1',
            data: [10, 20, 15, 25, 30, 35], 
            borderColor: 'blue',
            fill: false
        },
        {
            label: 'Line 2',
            data: [5, 15, 10, 20, 25, 30], 
            borderColor: 'yellow',
            fill: false
        }
    ]
};

var myLineChart = new Chart(ctx, {
    type: 'line', 
    data: data,   
});


var ctx = document.getElementById('myBarChart').getContext('2d');

var data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [10, 20, 15, 25, 30, 35],
            backgroundColor: 'blue'
        },
        {
            label: 'Dataset 2',
            data: [5, 15, 10, 20, 25, 30],
            backgroundColor: 'yellow'
        },
        {
            label: 'Dataset 3',
            data: [15, 10, 20, 15, 30, 25],
            backgroundColor: 'green'
        }

    ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar', 
    data: data,
    options: {
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true 
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top' 
            },
            title: {
                display: true,
                text: '' 
            }
        }
    }
});



var xValues = ["Italy", "France"];
var yValues = [5, 9];
var barColors = [
  "#CCCCCC",
  "#00aba9"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Current Rate"
    }
  }
});


var aValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var bValues = [40,60];
var barColors = [
  "#f5f54a",
  "#cccccc"
];
new Chart("myChart2", {
    type: "doughnut",
    data: {
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "DSI"
      }
    }
  });



var eValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var fValues = [50, 50];
var barColors = [
  "#b91d47",
  "#CCCCCC"
];
new Chart("myChart3", {
    type: "doughnut",
    data: {
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "DSO"
      }
    }
  });
  
  var gValues = ["Italy", "France"];
  var hValues = [30,70];
  var barColors = [
    "#cccccc",
    "#2c4b2c",
  ];  

  new Chart("myChart4", {
    type: "doughnut",
    data: {
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "DPO"
      }
    }
  });
  


var ctx = document.getElementById('accountBarChart').getContext('2d');

var data = {
    labels: ['Account 1', 'Account 2', 'Account 3', 'Account 4', 'Account 5'],
    datasets: [{
        label: 'Account Balances',
        data: [5000, 8000, 3000, 6000, 9000], 
        backgroundColor: 'rgba(75, 192, 192, 0.6)', 
        borderColor: 'rgba(75, 192, 192, 1)', 
        borderWidth: 1 
    }]
};


var accountBarChart = new Chart(ctx, {
    type: 'bar', 
    data: data,   
    options: {
        scales: {
            y: {
                beginAtZero: true 
            }
        },
        plugins: {
            legend: {
                display: false 
            },
            title: {
                display: true,
                text: 'Account Balances' 
            }
        }
    }
});
