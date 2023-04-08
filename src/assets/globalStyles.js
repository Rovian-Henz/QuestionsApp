import styled from "styled-components";

export const Main = styled.main`
    display: block;
    float: left;
    width: 100%;
`;

export const Container = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

    font-weight: 400;
    font-family: "Lato", sans-serif;

    & h1 {
        font-family: "Lato", sans-serif;
    }
`;

export const Title = styled.h1`
    font-size: 40px;
    line-height: 48px;
    font-weight: 700;
    color: #888;
`;

export const SubTitle = styled.h2`
    font-size: 35px;
    line-height: 40px;
    font-weight: 700;
    color: #888;
`;

export const Button = styled.button`
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    background: linear-gradient(
        180deg,
        rgba(175, 110, 235, 1) 0%,
        rgba(49, 89, 218, 1) 100%
    );
    padding: 5px 13px;
    border: none;
    border-radius: 10px;
`;
