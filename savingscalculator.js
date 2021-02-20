google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


function sav() {
    const ia = document.getElementById('ia').value
    const mi = document.getElementById('mi').value
    const roi = document.getElementById('roi').value
    const toc = document.getElementById('toc').value
    const tp = document.getElementById('tp').value


    const n = 12
    var expt = (n * tp)
    var trm1 = ((roi / (100 * n)) + 1) ** expt
    var trm2n = trm1 - 1
    var trm2d = (roi / (100 * n))

    var totalInvest=0;
    var intEarned=0;

    if (toc == 'a') {
        var Xa = ia * trm1 + (mi * (trm2n / trm2d))

        var temp = (mi * n * tp)
        var totalInvest = (ia * 1) + temp;
        var intEarned = Xa - totalInvest;
        var totalValue = Xa;
    } else if (toc == 'b') {
        var Xb = ia * trm1 + (mi * (trm2n / trm2d) * (1 + trm2d))

        var temp = (mi * n * tp)
        var totalInvest = (ia * 1) + temp;
        var intEarned = Xb - totalInvest;
        var totalValue = Xb;

    }
    drawChart(totalInvest, intEarned);

    document.getElementById('totalInvest').innerHTML = "Total Investment: " + "₹" + Math.round(totalInvest)
    document.getElementById('intEarned').innerHTML = "Intrest Earned: " + "₹" + Math.round(intEarned)
    document.getElementById('totalValue').innerHTML = "Total Value: " + "₹" + Math.round(totalValue)

}
// Draw the chart and set the chart values
function drawChart(p, c) {
    var data = google.visualization.arrayToDataTable([
        ['Value', 'Amount'],
        ['Total Investment', p],
        ['Intrest Earned', c]

    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { pieHole: 0.4, 'width': 380, 'height': 355, 'colors': ['#000000', 'D3D3D3'] };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}
{
    const
        ia = document.getElementById('ia'),
        rangeU = document.getElementById('rangeU'),
        setValue = () => {
            const
                newValue = Number((ia.value - ia.min) * 100 / (ia.max - ia.min)),
                newPosition = 10 - (newValue * 0.2);
            rangeU.innerHTML = `<span>${ia.value}</span>`;
            rangeU.style.left = `calc(${newValue}% + (${newPosition}px))`;
        };
    document.addEventListener("DOMContentLoaded", setValue);
    ia.addEventListener('input', setValue);
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


