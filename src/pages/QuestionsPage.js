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
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("filter");
    const limit = url.searchParams.get("limit") || 10;
    const offSet = url.searchParams.get("offset") || 0;

    if (searchTerm) {
        const response = await fetch(
            `https://private-anon-993ce4a9a9-blissrecruitmentapi.apiary-mock.com/questions?limit=${limit}&offset=${offSet}&filter=${searchTerm}`
        );
        if (!response.ok) {
            throw json(
                { message: "Could not fetch questions" },
                { status: 500 }
            );
        } else {
            return response;
        }
    } else {
        const response = await fetch(
            `https://private-anon-993ce4a9a9-blissrecruitmentapi.apiary-mock.com/questions?limit=${limit}&offset=${offSet}`
        );
        if (!response.ok) {
            throw json(
                { message: "Could not fetch questions" },
                { status: 500 }
            );
        } else {
            return response;
        }
    }
};

export async function action({ request, params }) {
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
}
