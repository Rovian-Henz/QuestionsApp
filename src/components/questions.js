import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData, json } from "react-router-dom";

const QuestionsList = () => {
    const questions = useLoaderData();

    if (!questions || questions.length < 1) {
        return <p>{questions.message}</p>;
    }

    return (
        <>
            <h1>Questions Page</h1>
            <ul>
                {questions.map((question) => (
                    <li key={question.id}>
                        <Link to={`${question.id}`}>
                            Question {question.id} - {question.question}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default QuestionsList;

export const loader = async ({ request, params }) => {
    const response = await fetch(
        "https://private-anon-993ce4a9a9-blissrecruitmentapi.apiary-mock.com/questions?limit=10&offset=0"
    );

    console.log("request.url", request.url);
    console.log("params", params);

    if (!response.ok) {
        throw json({ message: "Could not fetch questions" }, { status: 500 });
    } else {
        return response;
    }
};
