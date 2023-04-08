import React from "react";
import { LoadingIcon, Loading, LoadingTitle } from "../assets/globalStyles";

const LoadingPage = () => {
    return (
        <Loading>
            <LoadingIcon>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </LoadingIcon>
            <LoadingTitle>LOADING</LoadingTitle>
        </Loading>
    );
};

export default LoadingPage;
