import React from "react";
import { useParams } from "react-router-dom";

const QuestionDetail = () => {
    const params = useParams();
    return <>Questions Detail {params.questionId}</>;
};

export default QuestionDetail;
