import React, { useRef } from "react";
import { SvgPlusCont } from "../assets/globalStyles";
import { Search } from "../assets/icons";
import {
    QuestionsHeaderContainer,
    QuestionsHeaderContent,
    SearchButton,
    SearchInput,
    NewQuestionLink,
} from "../assets/questionsStyles";
import { Plus } from "../assets/icons";
import { Form, Link } from "react-router-dom";

const SearchQuestion = () => {
    const inputRef = useRef(null);

    const searchHandler = () => {
        console.log("inputRef.current.value", inputRef.current.value);
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
            <Link to={`questions/new`}>
                <NewQuestionLink>
                    <SvgPlusCont>
                        <Plus />
                    </SvgPlusCont>
                    Add new question
                </NewQuestionLink>
            </Link>
        </QuestionsHeaderContainer>
    );
};

export default SearchQuestion;
