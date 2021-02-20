// Load google charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function ppf() {
    const mi = document.getElementById('mi').value;
    const tp = document.getElementById('tp').value;

    const roi = 7.1
    const n = 1

    var expt = n * tp;


    var num = (((roi / (100 * n)) + 1) ** expt) - 1
    var deno = roi / (100 * n);

    var X = (mi * num * 1.071) / deno

    var totalInvest = mi * tp;
    var intEarned = X - totalInvest;
    var totalValue = X;


    drawChart(totalInvest, intEarned);

    document.getElementById('totalInvest').innerHTML = "Total Investment: " + "₹" + Math.round(totalInvest)
    document.getElementById('intEarned').innerHTML = "Intrest Earned: " + "₹" + Math.round(intEarned)
    document.getElementById('totalValue').innerHTML = "Total Value: " + "₹" + Math.round(totalValue)

}

// Draw the chart and set the chart values
function drawChart(a,b) {
    var data = google.visualization.arrayToDataTable([
    ['Value', 'Amount'],
    ['Total Investment', a],
    ['Intrest Earned', b]
   
  ]);
  
    // Optional; add a title and set the width and height of the chart
      var options = { pieHole: 0.4, 'width': 380, 'height': 355, 'colors': ['#000000', 'D3D3D3']};
  
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }
{
    const
        mi = document.getElementById('mi'),
        rangeV = document.getElementById('rangeV'),
        setValue = () => {
            const
                newValue = Number((mi.value - mi.min) * 100 / (mi.max - mi.min)),
                newPosition = 10 - (newValue * 0.2);
            rangeV.innerHTML = `<span>${mi.value}</span>`;
            rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
        };
    document.addEventListener("DOMContentLoaded", setValue);
    mi.addEventListener('input', setValue);
}
{
    const
        tp = document.getElementById('tp'),
        rangeX = document.getElementById('rangeX'),
        setValue = () => {
            const
                newValue = Number((tp.value - tp.min) * 100 / (tp.max - tp.min)),
                newPosition = 10 - (newValue * 0.2);
            rangeX.innerHTML = `<span>${tp.value}</span>`;
            rangeX.style.left = `calc(${newValue}% + (${newPosition}px))`;
        };
    document.addEventListener("DOMContentLoaded", setValue);
    tp.addEventListener('input', setValue);
}

