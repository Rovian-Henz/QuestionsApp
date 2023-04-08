import React from "react";
import { json } from "react-router-dom";
import QuestionDetail from "../components/QuestionDetail";

const QuestionDetailsPage = () => {
    return <QuestionDetail />;
};

export default QuestionDetailsPage;

export async function loader({ params }) {
    const id = params.questionId;

    const response = await fetch(
        `https://private-anon-993ce4a9a9-blissrecruitmentapi.apiary-mock.com/questions/${id}`
    );

    if (!response.ok) {
        throw json(
            { message: `Could not fetch question ${id}` },
            { status: 500 }
        );
    } else {
        return response;
    }
}
