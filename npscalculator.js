// Load google charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function sip() {
    const mi = document.getElementById('mi').value;
    const roi = document.getElementById('roi').value;
    const tp = document.getElementById('tp').value;


    const n = 12

    var expt = n * (60 - tp);
    var num = (roi / (100 * n) + 1) ** expt
    var deno = roi / (100 * n);

    var X = (mi * (num - 1) * (deno + 1)) / deno

    var totalInvest = mi * (60 - tp) * 12;
    var intEarned = X - totalInvest;
    var maturityAmount = 0.6 * X;
    var aInvest = 0.4 * X;


    drawChart(totalInvest, intEarned);

    document.getElementById('totalInvest').innerHTML = "Total Investment: " + "₹" + Math.round(totalInvest)
    document.getElementById('intEarned').innerHTML = "Intrest Earned: " + "₹" + Math.round(intEarned)
    document.getElementById('maturityAmount').innerHTML = "Maturity Amount: " + "₹" + Math.round(maturityAmount)
    document.getElementById('ex').innerHTML = "Annuity Investment: " + "₹" + Math.round(aInvest)

}
// Draw the chart and set the chart values
function drawChart(a, b) {
    var data = google.visualization.arrayToDataTable([
        ['Value', 'Amount'],
        ['Total Investment', a],
        ['Intrest Earned', b]

    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { pieHole: 0.4, 'width': 380, 'height': 355, 'colors': ['#000000', 'D3D3D3'] };

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
        roi = document.getElementById('roi'),
        rangeW = document.getElementById('rangeW'),
        setValue = () => {
            const
                newValue = Number((roi.value - roi.min) * 100 / (roi.max - roi.min)),
                newPosition = 10 - (newValue * 0.2);
            rangeW.innerHTML = `<span>${roi.value}</span>`;
            rangeW.style.left = `calc(${newValue}% + (${newPosition}px))`;
        };
    document.addEventListener("DOMContentLoaded", setValue);
    roi.addEventListener('input', setValue);
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
