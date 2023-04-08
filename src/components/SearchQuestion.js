import React, { useRef } from "react";
import { Button } from "../assets/globalStyles";
import {
    QuestionsHeaderContainer,
    QuestionsHeaderContent,
    SearchButton,
    SearchInput,
} from "../assets/questionsStyles";

const SearchQuestion = () => {
    const inputRef = useRef(null);

    const searchHandler = () => {
        console.log("inputRef.current.value", inputRef.current.value);
    };

    return (
        <QuestionsHeaderContainer>
            <QuestionsHeaderContent>
                <SearchInput
                    type="text"
                    ref={inputRef}
                    id="name"
                    name="name"
                    placeholder="Filtrar"
                />
                <SearchButton onClick={searchHandler}>Search</SearchButton>
            </QuestionsHeaderContent>
        </QuestionsHeaderContainer>
    );
};

export default SearchQuestion;
