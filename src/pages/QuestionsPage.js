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
        "https://private-anon-993ce4a9a9-blissrecruitmentapi.apiary-mock.com/questions?limit=10&offset=0"
    );

    console.log("request.url", request);
    console.log("params", params);

    if (!response.ok) {
        throw json({ message: "Could not fetch questions" }, { status: 500 });
    } else {
        return response;
    }
};
