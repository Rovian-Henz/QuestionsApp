import React from "react";
import { LoadingIcon, Page, PageTitle } from "../assets/globalStyles";

const LoadingPage = () => {
    return (
        <Page>
            <LoadingIcon>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </LoadingIcon>
            <PageTitle>LOADING</PageTitle>
        </Page>
    );
};

export default LoadingPage;
