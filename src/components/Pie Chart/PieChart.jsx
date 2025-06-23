import './PieChart.css'
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({myArr}) {

  const expenseByCategory = myArr.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + Number(curr.amount);
    return acc;
  }, {});

  const data = {
    labels: Object.keys(expenseByCategory),
    datasets: [
      {
        label: 'Expenses',
        data: Object.values(expenseByCategory),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#8e44ad', '#2ecc71',
          '#f1c40f', '#e67e22', '#e74c3c', '#1abc9c', '#34495e'
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: 'white' // Change legend label color
        }
      },
      title: {
        display: true,
        text: 'Expense Distribution by Category'
      }
    }
  };



  return (
    <>
      <div className='pie-wrapper'>
        <Pie data={data} options={options} />
      </div>
    </>
  )
}

export default PieChart