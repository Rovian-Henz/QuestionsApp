import React from "react";
import { json } from "react-router-dom";
import NewQuestionForm from "../components/NewQuestionForm";

const NewQuestionPage = () => {
    return <NewQuestionForm />;
};

export default NewQuestionPage;

const DUMMYQUESTION = {
    question: "Favourite programming language? added NEW",
    image_url:
        "https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)",
    thumb_url:
        "https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)",
    choices: ["js", "c#", "php", "c++"],
};

export async function action({ request }) {
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
        "https://private-anon-1f23fc696b-blissrecruitmentapi.apiary-mock.com/questions",
        {
            method: "POST",
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
