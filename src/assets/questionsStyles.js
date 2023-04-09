import styled from "styled-components";

export const QuestionsHeaderContainer = styled.section`
    background: linear-gradient(
        180deg,
        rgba(175, 110, 235, 1) 0%,
        rgba(49, 89, 218, 1) 100%
    );
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 170px 20px;
`;

export const QuestionsHeaderContent = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 920px;
    position: relative;
    form {
        display: flex;
    }
`;

export const SearchButton = styled.button`
    background: #fff;
    position: absolute;
    right: 0;
    border: none;
    padding: 0px 15px;
    cursor: pointer;
    border-radius: 10px;
    top: 6px;
    svg {
        font-size: 35px;
        rotate: -60deg;
        path {
            fill: #888;
        }
    }
`;

export const SearchInput = styled.input`
    padding: 9px 15px;
    color: #888;
    border: none;
    font-size: 28px;
    outline: none;
    border-radius: 10px;
    width: 100%;
`;

export const QuestionsContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    a {
        text-decoration: none;
    }
`;

export const Content = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 920px;
    position: relative;
    gap: 25px;
    top: -45px;
    margin-bottom: 35px;
`;

export const Item = styled.div`
    display: flex;
    background: #fff;
    border-radius: 10px;
    justify-content: space-between;
    gap: 25px;
    box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.25);
    img {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
`;

export const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
    width: 100%;
    justify-content: space-between;
    padding: 15px 0;
`;

export const ItemActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    padding: 15px 25px 15px 0;
    align-items: flex-end;
    a {
        text-decoration: none;
    }
`;

export const OptionsList = styled.div`
    display: flex;
    gap: 22px;
    justify-content: flex-start;
`;

export const OptionsItem = styled.div`
    display: flex;
    gap: 5px;
`;

export const OptionsItemSpan = styled.div`
    font-size: 16px;
    color: #888;
`;

export const LinkAnswers = styled.span`
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    background: linear-gradient(
        180deg,
        rgba(175, 110, 235, 1) 0%,
        rgba(49, 89, 218, 1) 100%
    );
    padding: 5px 28px;
    border: none;
    border-radius: 10px;
`;

export const NewQuestionLink = styled.span`
    font-size: 24px;
    color: rgb(136, 136, 136);
    display: flex;
    justify-content: center;
    align-items: center;
`;
