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
            <div>
                {questions.map((question) => (
                    <Link to={`questions/${question.id}`} key={question.id}>
                        <div>
                            <img src="https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)" />
                            <div>
                                <div>
                                    <h3>{question.question}</h3>
                                    <div>
                                        <p>option1</p>
                                        <p>option2</p>
                                        <p>option3</p>
                                        <p>option4</p>
                                    </div>
                                </div>
                                <div>
                                    <p>Share</p>
                                    <button>Answers</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <button onClick={handleNewQuestion}>Add new Question</button>
        </>
    );
};

export default QuestionsList;
