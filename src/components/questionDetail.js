import React from "react";
import { useLoaderData, json } from "react-router-dom";

const QuestionDetail = () => {
    const questions = useLoaderData();

    return (
        <>
            Questions Detail {questions.id}
            <p>question : {questions.question}</p>
            <p>image: {questions.image_url}</p>
        </>
    );
};

export default QuestionDetail;

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
