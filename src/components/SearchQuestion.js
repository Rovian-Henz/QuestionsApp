import React, { useRef } from "react";
import { Button } from "../assets/globalStyles";
import { Search } from "../assets/icons";
import {
    QuestionsHeaderContainer,
    QuestionsHeaderContent,
    SearchButton,
    SearchInput,
} from "../assets/questionsStyles";
import { Form } from "react-router-dom";

const SearchQuestion = () => {
    const inputRef = useRef(null);

    const searchHandler = () => {
        console.log("inputRef.current.value", inputRef.current.value);
    };

    return (
        <QuestionsHeaderContainer>
            <QuestionsHeaderContent>
                <Form>
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
        </QuestionsHeaderContainer>
    );
};

export default SearchQuestion;
