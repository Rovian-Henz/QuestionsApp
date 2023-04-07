import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    let title = "An error occurred!";
    let message = "Something went wrong";

    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = "Not Found!";
        message = "Could Not Find Page";
    }

    return (
        <>
            <h1>{title}</h1>
            <p>{message}</p>
        </>
    );
};

export default ErrorPage;
