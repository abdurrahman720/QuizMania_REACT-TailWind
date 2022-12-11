import React, { useContext } from 'react';
import { QuizesContext } from '../../Layouts/Root';
import Header from '../Header/Header';
import QuizTopic from '../QuizTopic/QuizTopic';

const Home = () => {
    const quizes = useContext(QuizesContext);
  

    return (
        <div>
        <Header></Header>
            <div className="grid mx-auto gap-4 md:grid-cols-4 md:grid-rows-4  rounded">
                {
                    quizes.map(quiz => <QuizTopic key={quiz.id} quiz={quiz}></QuizTopic>)
                }
        </div>
        
        </div>
    );
    
        
};

export default Home;