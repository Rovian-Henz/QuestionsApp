import React from "react";
import { NewQuestionHeader } from "../assets/questionNewStyles";
import { BackLink } from "../assets/questionDetailStyles";
import { Link } from "react-router-dom";
import { Back } from "../assets/icons";

const HeaderNewQuestion = () => {
    return (
        <NewQuestionHeader>
            <Link to={"/questions"}>
                <BackLink>
                    <Back /> Back to List
                </BackLink>
            </Link>
        </NewQuestionHeader>
    );
};

export default HeaderNewQuestion;
