import styled, { keyframes } from "styled-components";

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

export const SubTitleH3 = styled.h3`
    font-size: 30px;
    line-height: 35px;
    font-weight: 700;
    color: #888;
    margin: 0;
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
    cursor: pointer;
`;

export const ButtonShare = styled.button`
    color: #ffffff;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
`;

export const Page = styled.div`
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    background: linear-gradient(
        180deg,
        rgba(175, 110, 235, 1) 0%,
        rgba(49, 89, 218, 1) 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const PageTitle = styled.h1`
    font-size: 35px;
    color: #fff;
`;

export const PageMessage = styled.p`
    font-size: 30px;
    color: #fff;
`;

export const PageButton = styled.button`
    font-size: 25px;
    line-height: 30px;
    color: #ffffff;
    background: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    cursor: pointer;
`;

export const SvgPlusCont = styled.span`
    display: flex;
    padding: 0px 10px;
    z-index: 9999;
    width: 25px;
    svg {
        font-size: 25px;
        rotate: 45deg;
        background: linear-gradient(
            180deg,
            rgba(175, 110, 235, 1) 0%,
            rgba(49, 89, 218, 1) 100%
        );
        border-radius: 50%;
        path {
            fill: #fff;
        }
    }
`;

export const SvgShareCont = styled.span`
    display: flex;
    padding: 0px 10px;
    z-index: 9999;
    width: 25px;
    svg {
        font-size: 25px;
    }
`;

const ldsEellipsis1 = keyframes`
         from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        `;
const ldsEellipsis2 = keyframes`
         from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(24px, 0);
          }
        `;
const ldsEellipsis3 = keyframes`
         from {
            transform: scale(1);
          }
          to {
            transform: scale(0);
          }
        `;

export const LoadingIcon = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    div {
        position: absolute;
        top: 33px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: #fff;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    div:nth-child(1) {
        left: 8px;
        animation: ${ldsEellipsis1} 0.6s infinite;
    }
    div:nth-child(2) {
        left: 8px;
        animation: ${ldsEellipsis2} 0.6s infinite;
    }
    div:nth-child(3) {
        left: 32px;
        animation: ${ldsEellipsis2} 0.6s infinite;
    }
    div:nth-child(4) {
        left: 56px;
        animation: ${ldsEellipsis3} 0.6s infinite;
    }
`;
