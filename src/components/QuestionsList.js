import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
    SubTitleH3,
    SvgPlusCont,
    SvgShareCont,
    ButtonShare,
} from "../assets/globalStyles";
import { QuestionContent } from "../assets/questionDetailStyles";
import { Plus, Share } from "../assets/icons";

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

    if (!questions || questions.length < 1) {
        return <p>{questions.message}</p>;
    }

    const handleShare = (e) => {
        e.preventDefault();
        console.log("clicado");
    };

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
                                <ButtonShare onClick={handleShare}>
                                    <SvgShareCont>
                                        <Share />
                                    </SvgShareCont>
                                </ButtonShare>
                                <Link to={`questions/${question.id}`}>
                                    <LinkAnswers>Details</LinkAnswers>
                                </Link>
                            </ItemActions>
                        </Item>
                    ))}
                </Content>
                <Link to={`questions/new`}>
                    <NewQuestionLink>
                        <SvgPlusCont>
                            <Plus />
                        </SvgPlusCont>
                        Add new question
                    </NewQuestionLink>
                </Link>
            </QuestionsContainer>
        </>
    );
};

export default QuestionsList;
