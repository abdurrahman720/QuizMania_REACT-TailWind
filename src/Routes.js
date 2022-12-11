import { createBrowserRouter } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import Quizes from "./Components/Quizes/Quizes";
import Statics from "./Components/Static/Statics";
import Root from "./Layouts/Root";
import { loadData } from "./Utilitis/loadData";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: loadData ,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/topics",
                element: <Home></Home>
            },
            { 
                path: "/topics/:id",
                loader: async ({params}) => {
                   return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                },
                element: <Quizes></Quizes>
            },
            {
                path: "/statics",
                element: <Statics></Statics>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
            
        ]
    }
])