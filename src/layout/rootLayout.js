import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";
import { Main } from "../assets/globalStyles";

const RootLayout = () => {
    const navigation = useNavigation();

    return (
        <>
            <Main>
                {navigation.state === "loading" && <LoadingPage />}
                {navigation.state !== "loading" && <Outlet />}
            </Main>
        </>
    );
};

export default RootLayout;
