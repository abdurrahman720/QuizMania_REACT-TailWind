import React, { useContext, PureComponent } from 'react';
import { QuizesContext } from '../../Layouts/Root';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
//   import faker from 'faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'left',
      },
      title: {
        display: true,
        text: 'BarChart of Quiz Statics',
      },
    },
  };
  
  const labels = ['React', 'JavaScript', 'CSS', 'Git'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Total',
        data: [8,9,8,11],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
      
    ],
  };

const Statics = () => {
    // const quizes = useContext(QuizesContext);
    // console.log(quizes);

    // const questions = [
    //     {
    //         id: 1,
    //         name: "React",
    //         logo: "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",
    //         total: 8
    //     },
    //     {
    //         id: 2,
    //         name: "JavaScript",
    //         logo: "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",
    //         total: 9
    //     },
    //     {
    //         id: 3,
    //         name: "CSS",
    //         logo: "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",
    //         total: 8
    //     },
    //     {
    //         id: 4,
    //         name: "Git",
    //         logo: "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
    //         total: 11
    //     }
    // ];

    return (
        <div>
            <Bar options={options} data={data} />;
        </div>

        
    );
};

export default Statics;