import React from "react";
import { useLoaderData, Form } from "react-router-dom";
import DetailsHeader from "./DetailsHeader";
import { Title, Button, SubTitle } from "../assets/globalStyles";
import {
    QuestionContent,
    QuestionContainer,
    VoteContent,
    VoteFormContent,
    VoteItems,
    VoteItem,
    VoteFormLabel,
    VoteFormInput,
    ResultContainer,
    ResultList,
    ResultItem,
    ResultName,
    ResultVotes,
    PublishedDate,
} from "../assets/questionDetailStyles";

import styled from "styled-components";

const QuestionDetail = () => {
    const question = useLoaderData();

    const ResultBarContainer = styled.div`
        width: 150px;
        border: 1px solid rgb(136, 136, 136);
        display: flex;
        height: 15px;
    `;
    const ResultBarContent = styled.div`
        background: linear-gradient(
            180deg,
            rgba(175, 110, 235, 1) 0%,
            rgba(49, 89, 218, 1) 100%
        );
        width: ${(props) => props.barWidth + "%" || "0%"};
    `;

    const totalVotes = question.choices.reduce((acc, value) => {
        return acc + value.votes;
    }, 0);

    const date = new Date(question.published_at).toLocaleDateString();

    return (
        <>
            <DetailsHeader image={question.image_url} />
            <QuestionContainer>
                <QuestionContent>
                    <Title>{question.question}</Title>
                    <PublishedDate>
                        <span>Published:</span> <span>{date}</span>
                    </PublishedDate>
                    <VoteContent>
                        <Form method="PUT">
                            <VoteFormContent>
                                <VoteItems>
                                    {question.choices.map((choice, idx) => (
                                        <VoteItem key={idx}>
                                            <VoteFormLabel
                                                htmlFor={`choice-${idx}`}
                                            >
                                                <VoteFormInput
                                                    type="radio"
                                                    id={`choice-${idx}`}
                                                    name={`choices`}
                                                    value={choice.choice}
                                                />
                                                {choice.choice}
                                            </VoteFormLabel>
                                        </VoteItem>
                                    ))}
                                </VoteItems>
                                <Button>Save reply</Button>
                            </VoteFormContent>
                        </Form>
                    </VoteContent>
                    <ResultContainer>
                        <SubTitle>Votes</SubTitle>
                        <ResultList>
                            {question.choices.map((choice, idx) => (
                                <ResultItem key={idx}>
                                    <ResultVotes>{choice.votes}</ResultVotes>
                                    <ResultBarContainer>
                                        <ResultBarContent
                                            barWidth={
                                                (choice.votes * 100) /
                                                totalVotes
                                            }
                                        />
                                    </ResultBarContainer>
                                    <ResultName>{choice.choice}</ResultName>
                                </ResultItem>
                            ))}
                        </ResultList>
                    </ResultContainer>
                </QuestionContent>
            </QuestionContainer>
        </>
    );
};

export default QuestionDetail;
