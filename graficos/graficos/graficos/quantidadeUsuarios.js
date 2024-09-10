import { getCSS, tickConfig } from "./common.js";

async function userCountByNetwork() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
    const res = await fetch(url);
    const data = await res.json();
    const networkNames = Object.keys(data);
    const userCounts = Object.values(data);

    const chartData = [
        {
            x: networkNames, 
            y: userCounts, 
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Social Networks with Most Users',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                family: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Network Names',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Billions of Active Users',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    };

    const chart = document.createElement('div');
    chart.className = 'chart';
    document.getElementById('charts-container').appendChild(chart);
    Plotly.newPlot(chart, chartData, layout);
}

userCountByNetwork();
