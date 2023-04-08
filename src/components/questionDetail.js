import React from "react";
import { useLoaderData, Form } from "react-router-dom";
import DetailsHeader from "../layout/DetailsHeader";

const QuestionDetail = () => {
    const question = useLoaderData();

    return (
        <>
            <DetailsHeader image={question.image_url} />
            <h1>{question.question}</h1>
            <p>Publicado em: {question.question}</p>
            <div>
                <Form method="put">
                    <div>
                        {question.choices.map((choice, idx) => (
                            <div key={idx}>
                                <input
                                    type="radio"
                                    id={`choice-${idx}`}
                                    name={`choices`}
                                    value={choice.choice}
                                />
                                <label htmlFor={`choice-${idx}`}>
                                    {choice.choice}
                                </label>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button>Save</button>
                    </div>
                </Form>
            </div>
            <div>
                <h2>Votes</h2>
                {question.choices.map((choice, idx) => (
                    <div key={idx}>
                        <div>{choice.votes}</div>
                        <div>{choice.choice}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default QuestionDetail;
