import styled from "styled-components";

export const NewQuestionPageStyle = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NewQuestionHeader = styled.section`
    background: linear-gradient(
        180deg,
        rgba(175, 110, 235, 1) 0%,
        rgba(49, 89, 218, 1) 100%
    );
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    a {
        text-decoration: none;
    }

    span {
        padding: 5px 20px;
        font-size: 20px;
        color: rgb(255, 255, 255);
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
`;

export const NewQuestionContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NewQuestionContent = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 920px;
    position: relative;
    gap: 25px;
    margin-bottom: 35px;
`;

export const NewQuestionFormContainer = styled.div`
    display: flex;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 60px 80px;
`;

export const NewQuestionFormContent = styled.div`
    display: grid;
    gap: 15px;
`;

export const Input = styled.input`
    width: 100%;
    font-size: 16px;
    color: #888;
    border: 1px solid #888;
    padding: 14px 20px;
    border-radius: 5px;
    outline: none;
`;

export const ChoicesContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const NewQuestionActions = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

export const Button = styled.div`
    font-size: 20px;
    color: rgb(255, 255, 255);
    background: linear-gradient(rgb(175, 110, 235) 0%, rgb(49, 89, 218) 100%);
    padding: 2px 25px 6px 25px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;

export const ErrorContainer = styled.div`
    text-align: left;
    color: red;
    display: flex;
    flex-flow: column;
`;
