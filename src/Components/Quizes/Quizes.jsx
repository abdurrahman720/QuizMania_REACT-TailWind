import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizesArray = useLoaderData();
    const quizes = quizesArray.data.questions;
    console.log(quizes);
    return (
        <div>
            <h1 className="text-xl text-center font-extrabold">quiz of {quizesArray.data.name }</h1>
            {
                quizes.map(quiz =><Quiz key={quiz.id} quiz={quiz} quizes={quizes}></Quiz>)
          }
        </div>
    );
};

export default Quizes;