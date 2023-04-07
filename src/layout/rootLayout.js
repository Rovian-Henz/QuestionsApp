import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import LoadingPage from "../components/loadingPage";

const RootLayout = () => {
    const navigation = useNavigation();

    return (
        <>
            <h1>Root</h1>
            <main>
                {navigation.state === "loading" && <LoadingPage />}
                <Outlet />
            </main>
        </>
    );
};

export default RootLayout;
