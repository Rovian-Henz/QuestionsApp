import React, { useState, useEffect } from "react";
import { Link, useLoaderData, useActionData } from "react-router-dom";
import { SubTitleH3, LoadingQuestions } from "../assets/globalStyles";
import { QuestionContent } from "../assets/questionDetailStyles";
import { Loading, Share } from "../assets/icons";

import {
    QuestionsContainer,
    Content,
    Item,
    ItemContent,
    ItemActions,
    OptionsList,
    OptionsItem,
    OptionsItemSpan,
    LinkAnswers,
} from "../assets/questionsStyles";

const QuestionsList = () => {
    const questions = useLoaderData();
    const data = useActionData();
    const [isLoading, setIsLoading] = useState(false);

    if (!questions || questions.length < 1) {
        return <p>{questions.message}</p>;
    }

    return (
        <>
            <QuestionsContainer>
                <Content>
                    {questions.map((question) => (
                        <Item key={question.id}>
                            <img src="https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)" />
                            <ItemContent>
                                <SubTitleH3>{question.question}</SubTitleH3>
                                <OptionsList>
                                    {question.choices.map((choice, idx) => (
                                        <OptionsItem key={idx}>
                                            <OptionsItemSpan>
                                                {choice.choice}:
                                            </OptionsItemSpan>
                                            <OptionsItemSpan>
                                                {choice.votes}
                                            </OptionsItemSpan>
                                        </OptionsItem>
                                    ))}
                                </OptionsList>
                            </ItemContent>
                            <ItemActions>
                                <Link to={`questions/${question.id}`}>
                                    <LinkAnswers>Details</LinkAnswers>
                                </Link>
                            </ItemActions>
                        </Item>
                    ))}
                    {isLoading && (
                        <LoadingQuestions>
                            <div>
                                <Loading />
                            </div>
                        </LoadingQuestions>
                    )}
                </Content>
            </QuestionsContainer>
        </>
    );
};

export default QuestionsList;
