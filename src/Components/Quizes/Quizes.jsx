import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CorrectAns from '../CorrectAns/CorrectAns';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizesArray = useLoaderData();
    const quizes = quizesArray.data.questions;
    const [correct, setCorrect] = useState(0);

    return (
        <div id="quizes" className="flex justify-evenly">
            <div>
                <h1 className="text-3xl text-center text-sky-300 font-extrabold">Quiz of {quizesArray.data.name}</h1>
            {
                quizes.map(quiz =><Quiz key={quiz.id} quiz={quiz} quizes={quizes} correct={correct} setCorrect={setCorrect}></Quiz>)
            }
            </div>
            <div className="fixed right-1">
                <CorrectAns  correct={correct} setCorrect={setCorrect} quizes={quizesArray.data}></CorrectAns>
            </div>
        </div>
    );
};

export default Quizes;