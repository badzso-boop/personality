import React from "react";
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import BubbleChart from '../components/BubbleChart';

const Home = () => {
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Monthly Sales',
      data: [12, 19, 3, 5, 2, 3, 9],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  const barChartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const pieChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'red',
        'blue',
        'yellow',
        'green',
        'purple',
        'orange'
      ],
      borderWidth: 1
    }]
  };

  const pieChartOptions = {
    // Add options specific to the pie chart if needed
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Monthly Sales',
      data: [12, 19, 3, 5, 2, 3, 9],
      fill: false,
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };

  const lineChartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const bubbleChartData = {
    datasets: [{
      label: 'Bubble Chart Example',
      data: [
        { x: 10, y: 20, r: 5 },
        { x: 30, y: 40, r: 10 },
        { x: 50, y: 10, r: 8 },
        // Add more data points as needed
      ],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  const bubbleChartOptions = {
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true }
    }
  };

  return (
    <div>
      <h1>Your App</h1>
      <div class="container">
        <div class="row">
          <div class="col-6">
            <BarChart data={barChartData} options={barChartOptions} />
          </div>
          <div class="col-6">
            <PieChart data={pieChartData} options={pieChartOptions} />
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <BubbleChart data={bubbleChartData} options={bubbleChartOptions} />
          </div>
          <div class="col-6">
            <LineChart data={lineChartData} options={lineChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
