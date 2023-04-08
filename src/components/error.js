import React from "react";
import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router";
import {
    Page,
    PageTitle,
    PageMessage,
    PageButton,
} from "../assets/globalStyles";

const Error = ({ title, message, button }) => {
    const error = useRouteError();
    const navigate = useNavigate();

    const handleReload = () => {
        navigate(0);
    };

    if (error && error.status === 500) {
        message = error.data.message;
    }

    if (error && error.status === 404) {
        title = "Not Found!";
        message = "Could Not Find Page";
    }

    return (
        <Page>
            <PageTitle>{title}</PageTitle>
            <PageMessage>{message}</PageMessage>
            {button && <PageButton onClick={handleReload}>{button}</PageButton>}
        </Page>
    );
};

export default Error;
