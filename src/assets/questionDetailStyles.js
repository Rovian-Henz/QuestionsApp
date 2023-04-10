import styled from "styled-components";

export const QuestionContent = styled.section`
    padding: 20px;
    background-color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 920px;
`;

export const QuestionContainer = styled.section`
    display: flex;
    background-color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    margin-bottom: 120px;
`;

export const VoteContent = styled.div`
    padding: 30px;
    background-color: #fff;
    box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.25);
`;

export const VoteFormContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const VoteItems = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: space-around;
    flex: 1;
    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const VoteItem = styled.div`
    display: flex;
    font-size: 18px;
    color: #888;
    line-height: 22px;
`;

export const VoteFormLabel = styled.label`
    position: relative;
    margin: 0.5rem;
    line-height: 135%;
    cursor: pointer;
`;

export const VoteFormInput = styled.input`
    position: relative;
    margin: 0 1rem 0 0;
    cursor: pointer;
    &:before {
        -webkit-transition: -webkit-transform 0.4s
            cubic-bezier(0.45, 1.8, 0.5, 0.75);
        -moz-transition: -moz-transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
        transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
        -webkit-transform: scale(0, 0);
        -moz-transform: scale(0, 0);
        -ms-transform: scale(0, 0);
        -o-transform: scale(0, 0);
        transform: scale(0, 0);
        content: "";
        position: absolute;
        top: 0;
        left: 0.125rem;
        z-index: 1;
        width: 0.75rem;
        height: 0.75rem;
        background: #af6eeb;
        border-radius: 50%;
    }
    &:checked {
        &:before {
            -webkit-transform: scale(1, 1);
            -moz-transform: scale(1, 1);
            -ms-transform: scale(1, 1);
            -o-transform: scale(1, 1);
            transform: scale(1, 1);
        }
    }

    &:after {
        content: "";
        position: absolute;
        top: -0.25rem;
        left: -0.125rem;
        width: 1rem;
        height: 1rem;
        background: #fff;
        border: 2px solid #888;
        border-radius: 50%;
    }
`;

export const ResultContainer = styled.div`
    margin-top: 50px;
`;

export const BackLink = styled.span`
    padding: 25px 40px;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg {
        font-size: 50px;
        path {
            fill: #fff;
        }
    }
`;

export const ResultList = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ResultItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export const ResultVotes = styled.span`
    font-size: 32px;
    background-color: #f3ec78;
    background-image: linear-gradient(
        180deg,
        rgba(175, 110, 235, 1) 0%,
        rgba(49, 89, 218, 1) 100%
    );
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    font-weight: 700;
`;

export const ResultName = styled.div`
    font-size: 18px;
    color: #888;
`;

export const PublishedDate = styled.div`
    font-size: 18px;
    color: #888;
    margin-bottom: 40px;
    display: flex;
    gap: 5px;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const TitleContainer = styled.div`
    display: grid;
    gap: 5px;
    grid-template-columns: 1fr 45px;
    position: relative;
    justify-content: center;
    align-items: center;
    @media (max-width: 992px) {
        grid-template-columns: 1fr;
        margin-bottom: 35px;
        & > div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            & > div {
                position: relative;
                right: 0;
                bottom: 0;
            }
        }
    }
`;
