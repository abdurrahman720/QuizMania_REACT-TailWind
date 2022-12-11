import React from 'react';
import { toast } from 'react-toastify';


const Quiz = ({ quiz, quizes, correct, setCorrect }) => {
    const { id, question, options, correctAnswer } = quiz;
    
    let optionsNew = [];
    const handleClick = (option) => {

        // optionsNew.push(option);

        if (option === correctAnswer) {
            // for (const i in optionsNew) {
            //     if (optionsNew[i] === correctAnswer) {
            //         setCorrect(correct);
            //     }
            // }
            setCorrect(correct + 1);
            toast.success('Correct Answer!', {autoClose: 500})
        }
        else {
            toast.error('Wrong Answer!', {autoClose: 500})
        }
    }

    const showCorrect = () => {
        toast.info( `Correct answer is: ${correctAnswer}` , {autoClose:500})
    }
    console.log(correct);

    return (
        <div className="border text-center p-5 shadow mx-auto my-5 w-3/4 md:w-1/2">
            <div className="flex justify-between md:text-xl font-bold text-sky-500 ">
                <h2 >
               Quiz  :  {question}
                </h2>
                <button onClick={showCorrect} className="ml-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
  <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
</svg>
                </button>

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