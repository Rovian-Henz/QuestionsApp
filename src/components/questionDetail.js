import React from "react";
import { useLoaderData } from "react-router-dom";

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
