import React from "react";
import { json } from "react-router-dom";
import SearchQuestion from "../components/SearchQuestion";
import QuestionsList from "../components/QuestionsList";

const QuestionsPage = () => {
    return (
        <>
            <SearchQuestion />
            <QuestionsList />
        </>
    );
};

export default QuestionsPage;

export const loader = async ({ request, params }) => {
    const response = await fetch(
        `https://private-anon-993ce4a9a9-blissrecruitmentapi.apiary-mock.com/questions?limit=20&offset=10`
    );

    if (!response.ok) {
        throw json({ message: "Could not fetch questions" }, { status: 500 });
    } else {
        return response;
    }
};

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

    console.log("data", data);
    console.log("request", request);
    console.log("params", params);

    const questionData = {
        choices: [data.get("choices")],
    };

    console.log("questionData", questionData);
    // const response = await fetch(
    //     `https://private-anon-1f23fc696b-blissrecruitmentapi.apiary-mock.com/questions/${id}`,
    //     {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(questionData),
    //     }
    // );

    // if (!response.ok) {
    //     throw json({ message: "Could not save question" }, { status: 500 });
    // }
}
