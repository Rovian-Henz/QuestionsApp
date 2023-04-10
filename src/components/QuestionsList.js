import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
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
    const offSet = useSelector((state) => state.offSet);
    const totalQuestions = useSelector((state) => state.questions);
    const search = useSelector((state) => state.search);
    const [addedNewData, setAddNewData] = useState(false);
    const [currentQueryParameters, setSearchParams] = useSearchParams();
    const newQueryParameters = new URLSearchParams();
    const dispatch = useDispatch();

    if (!questions || questions.length < 1) {
        return <p>{questions.message}</p>;
    }

    useEffect(() => {
        dispatch(storeActions.addQuestions(questions));
    }, [questions]);

    useEffect(() => {
        if (addedNewData) {
            dispatch(storeActions.changeOffSet());
        }
    }, [addedNewData]);

    useEffect(() => {
        if (offSet > 0 && addedNewData === true) {
            setAddNewData(false);
            newQueryParameters.set("limit", 10);
            newQueryParameters.set("offset", offSet);
            newQueryParameters.set("filter", search);
            setSearchParams(newQueryParameters);
        }
    }, [offSet]);

    const loadMore = () => {
        setAddNewData(true);
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
                                    <img src={question.thumb_url} />
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
