import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import {BookStoreThemeProvider} from "./context/themeContext";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";

const routeList = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/books",
        element: <Books/>

    },
    {
        path: "/signup",
        element: <Signup/>
    },
    {
        path: "/reset",
        element: <ResetPassword/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/book/:bookId",
        element: <BookDetail/>
    }
];

const router = createBrowserRouter(routeList.map((item) => {
    return {
        ...item,
        element: <Layout>{item.element}</Layout>,
        errorElement: <Error/>
    }
}));

function App() {
    return (
        <BookStoreThemeProvider>
            <RouterProvider router={router}/>
        </BookStoreThemeProvider>
    )
}

export default App;
