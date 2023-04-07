import React from "react";
import { storeActions } from "./store/index";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    const pageNumber = useSelector((state) => state.pageNumber);
    const isHealth = useSelector((state) => state.isHealth);

    const handleNextPage = () => {
        dispatch(storeActions.nextPage());
    };
    const handlePrevPage = () => {
        if (pageNumber <= 1) return;
        dispatch(storeActions.previousPage());
    };

    return (
        <>
            <p>Page: {pageNumber}</p>
            <p>isHealth: {isHealth ? "sim" : "nao"}</p>
            <button onClick={handlePrevPage}>Decrement</button>
            <button onClick={handleNextPage}>Increment</button>
        </>
    );
};

export default App;
