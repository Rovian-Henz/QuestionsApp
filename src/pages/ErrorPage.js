import React from "react";
import Error from "../components/Error";

const ErrorPage = ({
    title = "An error occurred!",
    message = "Something went wrong",
    button = "",
}) => {
    return <Error title={title} message={message} button={button} />;
};

export default ErrorPage;
