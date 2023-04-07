import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import QuestionsList, {
    loader as questionsLoader,
} from "./components/questions";
import QuestionDetail, {
    loader as questionDetailLoader,
} from "./components/questionDetail";
import RootLayout from "./layout/rootLayout";
import ErrorPage from "./components/error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "questions",
                children: [
                    {
                        index: true,
                        element: <QuestionsList />,
                        loader: questionsLoader,
                        errorElement: <ErrorPage />,
                    },
                    {
                        path: ":questionId",
                        element: <QuestionDetail />,
                        loader: questionDetailLoader,
                        errorElement: <ErrorPage />,
                    },
                ],
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
