import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Nav } from '../Components/NavBar/NavBar';

export const QuizesContext = createContext();

const Root = () => {
    const quizes = useLoaderData();
    return (
        <QuizesContext.Provider value={quizes.data}>
             <Nav></Nav>
            <Outlet></Outlet>
        </QuizesContext.Provider>
    );
};

export default Root;