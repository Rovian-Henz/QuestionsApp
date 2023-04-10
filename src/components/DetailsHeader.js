import React from "react";
import styled from "styled-components";
import { BackLink } from "../assets/questionDetailStyles";
import { Link } from "react-router-dom";
import { Back } from "../assets/icons";

const DetailsHeader = ({ image }) => {
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
        a {
            text-decoration: none;
        }
    `;

    return (
        <HeaderQuestion imgUrl={image}>
            <Link to={"/questions"}>
                <BackLink>
                    <Back /> Back to List
                </BackLink>
            </Link>
        </HeaderQuestion>
    );
};

export default DetailsHeader;
