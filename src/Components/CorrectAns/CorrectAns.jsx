import React from 'react';

const CorrectAns = ({correct, quizes}) => {
    return (
        <div className="md:bg-sky-300  bg-transparent md:font-bold md:p-5 md:mr-5 md:mt-5 border rounded">
            <p>Correct Answer: {correct}/{quizes.total}</p>
        </div>
    );
};

export default CorrectAns;