import React from "react";
import { json } from "react-router-dom";
import QuestionDetail from "../components/QuestionDetail";

const QuestionDetailsPage = () => {
    return (
        <>
            <QuestionDetail />
        </>
    );
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

export async function action({ request, params }) {
    const id = params.questionId;

    const data = await request.formData();
    console.log("data", data);
    console.log("request", request);
    console.log("params", params);

    const questionData = {
        choices: [data.get("choices")],
    };

    console.log("questionData", questionData);
    const response = await fetch(
        `https://private-anon-1f23fc696b-blissrecruitmentapi.apiary-mock.com/questions/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(questionData),
        }
    );

    if (!response.ok) {
        throw json({ message: "Could not save question" }, { status: 500 });
    }
}
