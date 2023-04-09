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

    if (!response.ok) {
        throw json({ message: "Could not fetch questions" }, { status: 500 });
    } else {
        return response;
    }
};

export const action = async ({ request, params }) => {
    const data = await request.formData();
    console.log("data", data);
    console.log("request", request);
    console.log("params", params);
    // const questionData = {
    //     question: data.get("question"),
    //     image_url: data.get("image_url"),
    //     thumb_url: data.get("thumb_url"),
    //     choices: [
    //         data.get("choices1"),
    //         data.get("choices2"),
    //         data.get("choices3"),
    //         data.get("choices4"),
    //     ],
    // };

    // console.log("questionData", questionData);
    // const response = await fetch(
    //     "https://private-anon-1f23fc696b-blissrecruitmentapi.apiary-mock.com/questions",
    //     {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(questionData),
    //     }
    // );

    // if (!response.ok) {
    //     throw json({ message: "Could not save question" }, { status: 500 });
    // }

    // return redirect("/");
};
