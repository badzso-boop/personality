import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ data, options }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    // Destroy previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Get the canvas context and create a new chart instance
    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: options
    });

    // Cleanup: Destroy the chart instance when the component unmounts
    return () => {
      chartInstanceRef.current.destroy();
    };
  }, [data, options]);

  return (
    <div>
      <h2>Pie Chart Example</h2>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
};

export default PieChart;