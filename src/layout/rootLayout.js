import React from "react";
import { Outlet, useNavigation, json, useLoaderData } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";
import { Main } from "../assets/globalStyles";
import ErrorPage from "../pages/ErrorPage";

const RootLayout = () => {
    const navigation = useNavigation();
    const health = useLoaderData();

    return (
        <>
            <Main>
                {health.status !== "OK" && (
                    <ErrorPage
                        button={"Try Again"}
                        message={"Wait a moment and"}
                        title={"Server not Health"}
                    />
                )}
                {health.status === "OK" && navigation.state === "loading" && (
                    <LoadingPage />
                )}
                {health.status === "OK" && navigation.state !== "loading" && (
                    <Outlet />
                )}
            </Main>
        </>
    );
};

export default RootLayout;

export const loader = async () => {
    const response = await fetch(
        "https://private-anon-1f23fc696b-blissrecruitmentapi.apiary-mock.com/health"
    );

    if (!response.ok) {
        throw json(
            { message: "An error happened, try again" },
            { status: 500 }
        );
    } else {
        return response;
    }
};
