import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailsHeader = ({ image }) => {
    const navigate = useNavigate();
    function handleBack() {
        navigate("..");
    }

    const HeaderQuestion = styled.div`
        background-image: linear-gradient(
                180deg,
                rgba(175, 110, 235, 0.4) 0%,
                rgba(49, 89, 218, 0.4) 100%
            ),
            url("${(props) => props.imgUrl}");
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 300px;
        display: block;
    `;

    return (
        <HeaderQuestion imgUrl={image}>
            <button onClick={handleBack}> Voltar </button>
            {/* <img src={image}></img> */}
        </HeaderQuestion>
    );
};

export default DetailsHeader;
