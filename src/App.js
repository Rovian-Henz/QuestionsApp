import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuestionsPage, {
    loader as questionsLoader,
} from "./pages/QuestionsPage";
import QuestionDetail, {
    loader as questionDetailLoader,
} from "./pages/QuestionsDetailsPage";
import RootLayout from "./layout/rootLayout";
import ErrorPage from "./pages/ErrorPage";
import NewQuestionPage, {
    action as newQuestionAction,
} from "./pages/NewQuestionPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <QuestionsPage />,
                loader: questionsLoader,
            },
            {
                path: "questions/:questionId",
                element: <QuestionDetail />,
                loader: questionDetailLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "questions/new",
                element: <NewQuestionPage />,
                // loader: questionDetailLoader,
                action: newQuestionAction,
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
