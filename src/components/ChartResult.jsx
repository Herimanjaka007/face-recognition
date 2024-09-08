import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";


const ChartResult = ({ expressions }) => {
    const canvasRef = useRef();

    useEffect(() => {
        const ctx = canvasRef.current.getContext("2d");
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(expressions),
                datasets: [{
                    label: '# of Votes',
                    data: Object.values(expressions),
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        return () => {
            myChart.destroy();
        }
    }, [expressions]);

    return <canvas ref={canvasRef} id="myChart" />;
}

export default ChartResult;