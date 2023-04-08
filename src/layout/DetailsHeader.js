import React from "react";
import { useNavigate } from "react-router-dom";

const DetailsHeader = ({ image }) => {
    const navigate = useNavigate();
    function handleBack() {
        navigate("..");
    }

    return (
        <div>
            <button onClick={handleBack}> Voltar </button>
            <img src={image}></img>
        </div>
    );
};

export default DetailsHeader;
