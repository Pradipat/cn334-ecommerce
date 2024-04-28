"use client"
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ courseData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (window.myChart) { 
      window.myChart.destroy(); 
    }

    window.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: courseData.map((item) => item.title), 
        datasets: [
          {
            label: 'Sales',
            data: courseData.map((item) => item.soldCount),  
            // ... your chart customization options ... 
          },
        ],
      },
    });
  }, [courseData]);

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;
