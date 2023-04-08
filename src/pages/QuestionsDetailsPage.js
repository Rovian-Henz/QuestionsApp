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

    const DUMMYQUESTION = {
        id: id,
        image_url:
            "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
        thumb_url:
            "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
        question: "Favourite programming language?",
        choices: [
            {
                choice: "Swift",
                votes: 1,
            },
            {
                choice: "Python",
                votes: 0,
            },
            {
                choice: "Objective-C",
                votes: 0,
            },
            {
                choice: "Ruby",
                votes: 0,
            },
        ],
    };

    // const data = request.formData();
    // console.log("data", data);
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
    const response = await fetch(
        `https://private-anon-1f23fc696b-blissrecruitmentapi.apiary-mock.com/questions/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(DUMMYQUESTION),
            // body: JSON.stringify(questionData)
        }
    );

    if (!response.ok) {
        throw json({ message: "Could not save question" }, { status: 500 });
    }
}
