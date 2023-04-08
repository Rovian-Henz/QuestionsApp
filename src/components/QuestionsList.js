import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const QuestionsList = () => {
    const questions = useLoaderData();
    const navigate = useNavigate();

    if (!questions || questions.length < 1) {
        return <p>{questions.message}</p>;
    }

    const handleNewQuestion = () => {
        navigate("/questions/new");
    };

    return (
        <>
            <ul>
                {questions.map((question) => (
                    <li key={question.id}>
                        <Link to={`questions/${question.id}`}>
                            Question {question.id} - {question.question}
                        </Link>
                    </li>
                ))}
            </ul>
            <button onClick={handleNewQuestion}>Add new Question</button>
        </>
    );
};

export default QuestionsList;
