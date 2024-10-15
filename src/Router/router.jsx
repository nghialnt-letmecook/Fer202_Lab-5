import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import News from '../pages/News'
import Contact from '../pages/Contact'
import Quiz from '../pages/Quiz'
import About from '../pages/About'

export const router = createBrowserRouter ([
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path:"news",
                element: <News/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "quizzes",
                element: <Quiz/>
            },
            {
                path: "about",
                element: <About/>
            }
        ]
    }
])
