import React, { useRef, useState } from "react";
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
import { Form, Link, useSubmit } from "react-router-dom";
import { storeActions } from "../store/index";
import { useDispatch } from "react-redux";

const SearchQuestion = () => {
    const [shareItem, setShareItem] = useState(false);
    const [selected, setSelected] = useState("");
    const [isMessageShown, setIsMessageShown] = useState(false);
    const dispatch = useDispatch();
    const submit = useSubmit();
    const shareInput = useRef(null);
    const inputRef = useRef(null);

    const searchHandler = () => {
        console.log("inputRef.current.value", inputRef.current.value);
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
        <QuestionsHeaderContainer>
            <QuestionsHeaderContent>
                <Form method="PUT">
                    <SearchInput
                        type="text"
                        ref={inputRef}
                        id="name"
                        name="name"
                        placeholder="Search"
                    />
                    <SearchButton>
                        <Search />
                    </SearchButton>
                </Form>
            </QuestionsHeaderContent>
            <SearchActions>
                <Link to={`questions/new`}>
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
