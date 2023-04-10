import React, { useEffect } from "react";
import {
    Outlet,
    useNavigation,
    json,
    useLoaderData,
    useNavigate,
    useLocation,
} from "react-router-dom";
import useNetwork from "../hooks/useNetwork";
import LoadingPage from "../pages/LoadingPage";
import { Main } from "../assets/globalStyles";
import ErrorPage from "../pages/ErrorPage";
import Footer from "../layout/Footer";

const StartPage = () => {
    const navigation = useNavigation();
    const health = useLoaderData();
    const networkState = useNetwork();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "") {
            return navigate("/questions");
        }
    }, []);

    return (
        <>
            <Main>
                {!networkState.online && (
                    <ErrorPage
                        message={"Connect to the internet"}
                        title={"You are offline"}
                    />
                )}

                {networkState.online && health.status !== "OK" && (
                    <ErrorPage
                        button={"Try Again"}
                        message={"Wait a moment and"}
                        title={"Server not Health"}
                    />
                )}
                {networkState.online &&
                    health.status === "OK" &&
                    navigation.state === "loading" && <LoadingPage />}
                {networkState.online &&
                    health.status === "OK" &&
                    navigation.state !== "loading" && <Outlet />}
            </Main>
            <Footer />
        </>
    );
};

export default StartPage;

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
