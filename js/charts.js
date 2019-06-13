var ctx = document.getElementById('myChart').getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'pie',

    // The data for our dataset
    data: {

        labels: [
            'Black',
            'Yellow',
            'Grey'
        ],
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                '#000',
                '#fcdb00',
                '#6b6b6b'
            ]
        }]
    },

    // Configuration options go here
    options: {}
});
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});
//практика с charts.js
