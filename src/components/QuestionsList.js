import React, { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
    Link,
    useLoaderData,
    useActionData,
    useSubmit,
} from "react-router-dom";
import { SubTitleH3, LoadingQuestions } from "../assets/globalStyles";
import { QuestionContent } from "../assets/questionDetailStyles";
import { Loading } from "../assets/icons";

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
import { storeActions } from "../store/index";
import { useSelector, useDispatch } from "react-redux";

const QuestionsList = () => {
    const questions = useLoaderData();
    const data = useActionData();
    const offSet = useSelector((state) => state.offSet);
    const totalQuestions = useSelector((state) => state.questions);
    const [addedNewData, setAddNewData] = useState(false);
    const submit = useSubmit();
    const dispatch = useDispatch();

    if (!questions || questions.length < 1) {
        return <p>{questions.message}</p>;
    }

    useEffect(() => {
        if (!data) {
            dispatch(storeActions.addQuestions(questions));
        }
    }, []);

    if (data && data.length > 0 && !addedNewData) {
        console.log("data leng", data);
        console.log("totalQuestions", totalQuestions);
        setAddNewData(true);
    }

    useEffect(() => {
        if (data && data.length > 0 && addedNewData) {
            dispatch(storeActions.addQuestions(data));
        }
    }, [addedNewData]);

    const loadMore = () => {
        setAddNewData(false);
        dispatch(storeActions.changeOffSet());
        submit({ intent: "fetch", page: offSet }, { method: "POST" });
    };

    return (
        <>
            <QuestionsContainer>
                <Content>
                    <InfiniteScroll
                        dataLength={totalQuestions.length}
                        next={loadMore}
                        hasMore={totalQuestions.length < 90}
                        loader={
                            <LoadingQuestions>
                                <div>
                                    <Loading />
                                </div>
                            </LoadingQuestions>
                        }
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        {totalQuestions.length > 0 &&
                            totalQuestions.map((question, idx) => (
                                <Item key={idx}>
                                    <img src="https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)" />
                                    <ItemContent>
                                        <SubTitleH3>
                                            {question.question}
                                        </SubTitleH3>
                                        <OptionsList>
                                            {question.choices.map(
                                                (choice, idx) => (
                                                    <OptionsItem key={idx}>
                                                        <OptionsItemSpan>
                                                            {choice.choice}:
                                                        </OptionsItemSpan>
                                                        <OptionsItemSpan>
                                                            {choice.votes}
                                                        </OptionsItemSpan>
                                                    </OptionsItem>
                                                )
                                            )}
                                        </OptionsList>
                                    </ItemContent>
                                    <ItemActions>
                                        <Link to={`${question.id}`}>
                                            <LinkAnswers>Details</LinkAnswers>
                                        </Link>
                                    </ItemActions>
                                </Item>
                            ))}
                    </InfiniteScroll>
                </Content>
            </QuestionsContainer>
        </>
    );
};

export default QuestionsList;
