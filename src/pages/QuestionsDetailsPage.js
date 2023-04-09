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

    const intent = data.get("intent");

    if (intent && intent == "share") {
        const destination_email = data.get("email");

        const response = await fetch(
            `https://private-anon-1f23fc696b-blissrecruitmentapi.apiary-mock.com/share?destination_email=${destination_email}&content_url=${request.url}`,
            { method: "POST" }
        );

        if (!response.ok) {
            throw json({ message: "Could not share" }, { status: 500 });
        }
        return response;
    }

    const choices = data.get("choices");
    const selected = data.get("selected");

    let choicesObj = choices.split(",").map((item) => {
        return {
            choice: item,
            votes: selected === item ? 1 : 0,
        };
    });

    const questionData = {
        id: id,
        question: data.get("question"),
        image_url: data.get("image_url"),
        thumb_url: data.get("thumb_url"),
        published_at: data.get("published_at"),
        choices: choicesObj,
    };

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
    return response;
}
