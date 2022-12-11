import React from 'react';
import { toast } from 'react-toastify';


const Quiz = ({ quiz, quizes }) => {
    const { id, question, options, correctAnswer } = quiz;

    const handleClick = (option) => {
       
        if (option === correctAnswer) {
            toast.success('Correct Answer!', {autoClose: 500})
        }
        else {
            toast.error('Correct Answer!', {autoClose: 500})
        }
    }


    return (
        <div className="border text-center p-5 shadow mx-auto my-5 w-3/4 md:w-1/2">
            <div>
            <h2 className="md:text-2xl font-bold text-sky-500 ">
               Quiz  :  {question}
            </h2>
            </div>
            <div className="grid gap-2 md:grid-cols-2  ">
               {
                    options.map(option => <button key={option.index} onClick={() =>handleClick(option)} className="border p-5 border-cyan-200 hover:bg-sky-700 hover:text-white rounded m-2">
                            <div>
                            {option}
                            </div>
                        </button>)
                   }
              
            </div>

        </div>
    );
};

export default Quiz;