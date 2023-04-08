import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { SubTitleH3 } from "../assets/globalStyles";
import { QuestionContent } from "../assets/questionDetailStyles";
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
    NewQuestionLink,
} from "../assets/questionsStyles";

const QuestionsList = () => {
    const questions = useLoaderData();
    const navigate = useNavigate();

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
                                <span>Share</span>
                                <Link to={`questions/${question.id}`}>
                                    <LinkAnswers>Details</LinkAnswers>
                                </Link>
                            </ItemActions>
                        </Item>
                    ))}
                </Content>
                <Link to={`questions/new`}>
                    <NewQuestionLink> + Add new question</NewQuestionLink>
                </Link>
            </QuestionsContainer>
        </>
    );
};

export default QuestionsList;
