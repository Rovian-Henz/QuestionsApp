import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";

const RootLayout = () => {
    const navigation = useNavigation();

    return (
        <>
            <main>
                {navigation.state === "loading" && <LoadingPage />}
                {navigation.state !== "loading" && <Outlet />}
            </main>
        </>
    );
};

export default RootLayout;
