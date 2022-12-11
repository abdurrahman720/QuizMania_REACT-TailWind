import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizesArray = useLoaderData();
    const quizes = quizesArray.data.questions;
    console.log(quizes);
    return (
        <div>
            <h1 className="text-3xl text-center text-sky-300 font-extrabold">Quiz of {quizesArray.data.name }</h1>
            {
                quizes.map(quiz =><Quiz key={quiz.id} quiz={quiz} quizes={quizes}></Quiz>)
          }
        </div>
    );
};

export default Quizes;