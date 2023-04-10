import React, { useEffect } from "react";
import { FooterStyle, InfoMessage } from "../assets/globalStyles";
import { storeActions } from "../store/index";
import { useSelector, useDispatch } from "react-redux";

const Footer = () => {
    const dispatch = useDispatch();
    const showInfoScreen = useSelector((state) => state.showInfoScreen);
    const infoScreenMessage = useSelector((state) => state.infoScreenMessage);
    const typeInfo = useSelector((state) => state.typeInfo);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(storeActions.hideInfoScreen());
        }, 3000);
        return () => clearTimeout(timer);
    }, [showInfoScreen]);

    return (
        <div>
            <FooterStyle>
                <span>Created By Rovian Henz</span>
            </FooterStyle>
            {showInfoScreen && (
                <InfoMessage>
                    <div className={typeInfo}>{infoScreenMessage}</div>
                </InfoMessage>
            )}
        </div>
    );
};

export default Footer;
