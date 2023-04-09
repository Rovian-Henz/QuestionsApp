import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuestionsPage, {
    loader as questionsLoader,
    action as questionsAction,
} from "./pages/QuestionsPage";
import QuestionDetail, {
    loader as questionDetailLoader,
    action as questionDetailAction,
} from "./pages/QuestionsDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import StartPage, { loader as healthLoader } from "./pages/StartPage";
import NewQuestionPage, {
    action as newQuestionAction,
} from "./pages/NewQuestionPage";
import { Container } from "./assets/globalStyles";

const router = createBrowserRouter([
    {
        path: "/",
        element: <StartPage />,
        loader: healthLoader,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "questions",
                element: <QuestionsPage />,
                loader: questionsLoader,
                action: questionsAction,
            },
            {
                path: "questions/:questionId",
                element: <QuestionDetail />,
                loader: questionDetailLoader,
                action: questionDetailAction,
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
            <Container>
                <RouterProvider router={router} />
            </Container>
        </>
    );
};

export default App;
