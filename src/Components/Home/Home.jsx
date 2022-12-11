import React, { useContext } from 'react';
import { QuizesContext } from '../../Layouts/Root';
import Header from '../Header/Header';

const Home = () => {
    const quizes = useContext(QuizesContext);
    const { id, name, logo } = quizes;
    return (
        <div>
            <Header></Header>
            <div className="grid mx-auto gap-4 md:grid-cols-4 md:grid-rows-4  rounded">
            {
                quizes.map(quiz =>
                    
                    <div className="border bg-white p-1 mx-5">
                        <div className=" bg-gray-200 " >
                            <img className="w-fit" src={quiz.logo} alt="" />
                        </div>
                        <div className="flex justify-between aligned-center">
                            <div className="text-blue-400 py-1 font-bold">
                                {quiz.name}
                            </div>
                            <div className="bg-blue-400 rounded p-1 m-1">
                                <button>
                                    <p className="inline text-sm font-bold">Start Practice
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
</svg>
</p>
                                </button>
                            </div>
                        </div>
                    </div>
                        
                )
            }
            </div>
           
        </div>
    );
};

export default Home;