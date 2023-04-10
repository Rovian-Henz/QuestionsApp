import React, { useEffect, useRef, useState } from "react";
import {
    SvgPlusCont,
    SvgShareCont,
    ButtonShare,
    ShareComponent,
    InputShare,
    SendShareBtn,
    InputContent,
} from "../assets/globalStyles";
import { Search } from "../assets/icons";
import {
    QuestionsHeaderContainer,
    QuestionsHeaderContent,
    SearchButton,
    SearchInput,
    NewQuestionLink,
    SearchActions,
    SearchShare,
} from "../assets/questionsStyles";
import { Share, Send, Plus } from "../assets/icons";
import { Link, useSubmit, useSearchParams } from "react-router-dom";
import { storeActions } from "../store/index";
import { useDispatch, useSelector } from "react-redux";

const SearchQuestion = () => {
    const [shareItem, setShareItem] = useState(false);
    const dispatch = useDispatch();
    const submit = useSubmit();
    const shareInput = useRef(null);
    const inputRef = useRef(null);
    const [currentQueryParameters, setSearchParams] = useSearchParams();
    const newQueryParameters = new URLSearchParams();

    const searchHandler = () => {
        newQueryParameters.set("limit", 10);
        newQueryParameters.set("offset", 0);
        newQueryParameters.set("filter", inputRef.current.value);
        dispatch(storeActions.changeSearch(inputRef.current.value));
        setSearchParams(newQueryParameters);
    };

    useEffect(() => {
        inputRef.current.focus();
        const currentFilter = currentQueryParameters.get("filter");
        if (currentFilter) {
            inputRef.current.value = currentFilter;
        }
    }, []);

    const handleShare = (e) => {
        e.preventDefault();
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
        <QuestionsHeaderContainer>
            <QuestionsHeaderContent>
                <SearchInput
                    type="text"
                    ref={inputRef}
                    id="search"
                    name="search"
                    placeholder="Search"
                />
                <SearchButton onClick={searchHandler}>
                    <Search />
                </SearchButton>
            </QuestionsHeaderContent>
            <SearchActions>
                <Link to={`/questions/new`}>
                    <NewQuestionLink>
                        <SvgPlusCont>
                            <Plus />
                        </SvgPlusCont>
                        Add new question
                    </NewQuestionLink>
                </Link>
                <SearchShare>
                    <ButtonShare onClick={shareToggle}>
                        <SvgShareCont>
                            <Share />
                        </SvgShareCont>
                    </ButtonShare>
                    {shareItem && (
                        <ShareComponent className="questionsShare">
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
                </SearchShare>
            </SearchActions>
        </QuestionsHeaderContainer>
    );
};

export default SearchQuestion;
