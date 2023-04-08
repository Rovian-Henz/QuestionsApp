import React from "react";
import { useNavigate, Form } from "react-router-dom";

const NewQuestionForm = () => {
    const navigate = useNavigate();
    function cancelHandler() {
        navigate("..");
    }

    return (
        <Form method="post">
            <p>
                <label htmlFor="question">Title</label>
                <input id="question" type="text" name="question" required />
            </p>
            <p>
                <label htmlFor="image_url">Image</label>
                <input id="image_url" type="url" name="image_url" required />
            </p>
            <p>
                <label htmlFor="thumb_url">Image</label>
                <input id="thumb_url" type="url" name="thumb_url" required />
            </p>
            <p>
                <label htmlFor="choices1">Date</label>
                <input id="choices1" type="text" name="choices1" required />
                <input id="choices2" type="text" name="choices2" required />
                <input id="choices3" type="text" name="choices3" required />
                <input id="choices4" type="text" name="choices4" required />
            </p>
            <div>
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
                <button>Save</button>
            </div>
        </Form>
    );
};

export default NewQuestionForm;
