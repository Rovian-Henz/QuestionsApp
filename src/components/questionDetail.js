import React, { useState, useRef } from "react";
import { useLoaderData, useSubmit, useActionData } from "react-router-dom";
import DetailsHeader from "./DetailsHeader";
import { Share, Send } from "../assets/icons";
import {
    Title,
    Button,
    SubTitle,
    SvgShareCont,
    ButtonShare,
    ShareComponent,
    InputShare,
    SendShareBtn,
    InputContent,
} from "../assets/globalStyles";
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
    TitleContainer,
} from "../assets/questionDetailStyles";
import { storeActions } from "../store/index";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const QuestionDetail = () => {
    const question = useLoaderData();
    const action = useActionData();
    const dispatch = useDispatch();
    const shareInput = useRef(null);
    const submit = useSubmit();
    const [shareItem, setShareItem] = useState(false);
    const [selected, setSelected] = useState("");
    const [isMessageShown, setIsMessageShown] = useState(false);

    if (action && action.question && !isMessageShown) {
        dispatch(storeActions.setInfoScreen(["success", "Vote added"]));
        dispatch(storeActions.showInfoScreen());
        setIsMessageShown(true);
    }
    if (action && action.status === "OK" && !isMessageShown) {
        dispatch(storeActions.setInfoScreen(["success", "Shared"]));
        dispatch(storeActions.showInfoScreen());
        setIsMessageShown(true);
    }

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

    const submitFormHandler = () => {
        const questionCopy = question;
        setIsMessageShown(false);
        questionCopy.selected = questionCopy.choices.find(
            (choice) => choice.choice === selected
        ).choice;
        questionCopy.choices = questionCopy.choices.map(
            (choice) => choice.choice
        );

        submit(questionCopy, { method: "PUT" });
    };

    const handleShare = (e) => {
        e.preventDefault();
        setIsMessageShown(false);

        if (
            !shareInput.current.value ||
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                shareInput.current.value
            )
        ) {
            dispatch(
                storeActions.setInfoScreen(["error", "Type a valid email"])
            );
            dispatch(storeActions.showInfoScreen());
            return;
        }

        setShareItem(!shareItem);
        submit(
            {
                email: shareInput.current.value,
                intent: "share",
            },
            { method: "POST" }
        );
    };

    const shareToggle = () => {
        setShareItem(!shareItem);
    };

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
                                                checked={
                                                    selected === choice.choice
                                                }
                                                onChange={(event) =>
                                                    setSelected(
                                                        event.target.value
                                                    )
                                                }
                                                value={choice.choice}
                                            />
                                            {choice.choice}
                                        </VoteFormLabel>
                                    </VoteItem>
                                ))}
                            </VoteItems>
                            <Button onClick={submitFormHandler}>
                                Save reply
                            </Button>
                        </VoteFormContent>
                    </VoteContent>
                    <ResultContainer>
                        <TitleContainer>
                            <SubTitle>Votes</SubTitle>
                            <div>
                                <ButtonShare onClick={shareToggle}>
                                    <SvgShareCont>
                                        <Share />
                                    </SvgShareCont>
                                </ButtonShare>
                                {shareItem && (
                                    <ShareComponent>
                                        <InputContent>
                                            <InputShare
                                                placeholder="Email"
                                                ref={shareInput}
                                                type="email"
                                            />
                                            <SendShareBtn onClick={handleShare}>
                                                <Send />
                                            </SendShareBtn>
                                        </InputContent>
                                    </ShareComponent>
                                )}
                            </div>
                        </TitleContainer>
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
