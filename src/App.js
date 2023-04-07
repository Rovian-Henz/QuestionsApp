import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import QuestionsList from "./components/questions";
import QuestionDetail from "./components/questionDetail";
import RootLayout from "./layout/rootLayout";
import ErrorPage from "./components/error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "/questions",
                element: <QuestionsList />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/questions/:questionId",
                element: <QuestionDetail />,
                errorElement: <ErrorPage />,
            },
        ],
    },
]);

const App = () => {
    return (
        <>
            <div className="App">
                <RouterProvider router={router} />
            </div>
        </>
    );
};

export default App;
