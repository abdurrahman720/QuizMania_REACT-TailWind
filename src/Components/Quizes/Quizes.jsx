import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizes = () => {
    const quizesArray = useLoaderData();
    const quizes = quizesArray.data.questions;
    console.log(quizes);
    return (
        <div>
          
        </div>
    );
};

export default Quizes;