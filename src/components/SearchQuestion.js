import React, { useRef } from "react";
import { storeActions } from "../store/index";
import { useSelector, useDispatch } from "react-redux";

const SearchQuestion = () => {
    const inputRef = useRef(null);

    const searchHandler = () => {
        console.log("inputRef.current.value", inputRef.current.value);
    };

    return (
        <div>
            <div className="nav-questions">
                <input
                    type="text"
                    ref={inputRef}
                    id="name"
                    name="name"
                    placeholder="Task Title"
                />
                <div>
                    <button type="button" onClick={searchHandler}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchQuestion;
