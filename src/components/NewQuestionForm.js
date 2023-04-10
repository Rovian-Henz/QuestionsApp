import React, { useRef, useState } from "react";
import { useNavigate, useSubmit } from "react-router-dom";
import {
    NewQuestionContainer,
    NewQuestionContent,
    NewQuestionFormContainer,
    NewQuestionFormContent,
    Input,
    ChoicesContainer,
    NewQuestionActions,
    Button,
    ErrorContainer,
} from "../assets/questionNewStyles";
import { Title } from "../assets/globalStyles";
import { storeActions } from "../store/index";
import { useDispatch } from "react-redux";

const NewQuestionForm = () => {
    const navigate = useNavigate();
    const submit = useSubmit();
    const dispatch = useDispatch();
    const questionRef = useRef();
    const image_urlRef = useRef();
    const thumb_urlRef = useRef();
    const choices1Ref = useRef();
    const choices2Ref = useRef();
    const choices3Ref = useRef();
    const choices4Ref = useRef();
    const [formErrors, setFormErrors] = useState([]);

    function cancelHandler() {
        navigate("/questions");
    }

    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (err) {
            return false;
        }
    }

    function validateErrors() {
        let errors = [];
        if (questionRef.current.value.length < 2)
            errors.push("You need to add a question");
        if (questionRef.current.value.at(-1) !== "?")
            errors.push("A question need to end with ?");

        if (!isValidUrl(image_urlRef.current.value))
            errors.push("Type a valid URL for Image");

        if (!isValidUrl(thumb_urlRef.current.value))
            errors.push("Type a valid URL for Thumb");

        if (choices1Ref.current.value.length < 1)
            errors.push("You need to add an first option");
        if (choices2Ref.current.value.length < 1)
            errors.push("You need to add an second option");
        if (choices3Ref.current.value.length < 1)
            errors.push("You need to add an third option");
        if (choices4Ref.current.value.length < 1)
            errors.push("You need to add an fourth option");

        if (errors.length > 0) {
            setFormErrors(errors);
            dispatch(
                storeActions.setInfoScreen([
                    "error",
                    "Fix the errors and try again",
                ])
            );
            dispatch(storeActions.showInfoScreen());
            return true;
        }

        return false;
    }

    function handleSubmit() {
        setFormErrors([]);
        if (validateErrors()) return;
        dispatch(storeActions.setInfoScreen(["success", "Question sent"]));
        dispatch(storeActions.showInfoScreen());
        submit(
            {
                question: questionRef.current.value,
                image_url: image_urlRef.current.value,
                thumb_url: thumb_urlRef.current.value,
                choices1: choices1Ref.current.value,
                choices2: choices2Ref.current.value,
                choices3: choices3Ref.current.value,
                choices4: choices4Ref.current.value,
            },
            { method: "POST" }
        );
    }

    return (
        <NewQuestionContainer>
            <NewQuestionContent>
                <Title>New question</Title>
                <NewQuestionFormContainer>
                    <NewQuestionFormContent>
                        {formErrors.length > 0 && (
                            <ErrorContainer>
                                {formErrors.map((error, idx) => (
                                    <span key={idx}>{error}</span>
                                ))}
                            </ErrorContainer>
                        )}
                        <Input
                            id="question"
                            type="text"
                            name="question"
                            placeholder="Question"
                            required
                            ref={questionRef}
                        />
                        <Input
                            id="image_url"
                            type="url"
                            name="image_url"
                            placeholder="Image Url"
                            required
                            ref={image_urlRef}
                        />
                        <Input
                            id="thumb_url"
                            type="url"
                            name="thumb_url"
                            placeholder="Thumb Url"
                            required
                            ref={thumb_urlRef}
                        />
                        <ChoicesContainer>
                            <Input
                                id="choices1"
                                type="text"
                                name="choices1"
                                placeholder="Option 1"
                                required
                                ref={choices1Ref}
                            />
                            <Input
                                id="choices2"
                                type="text"
                                name="choices2"
                                placeholder="Option 2"
                                required
                                ref={choices2Ref}
                            />
                            <Input
                                id="choices3"
                                type="text"
                                name="choices3"
                                placeholder="Option 3"
                                required
                                ref={choices3Ref}
                            />
                            <Input
                                id="choices4"
                                type="text"
                                name="choices4"
                                placeholder="Option 4"
                                required
                                ref={choices4Ref}
                            />
                        </ChoicesContainer>

                        <NewQuestionActions>
                            <Button type="button" onClick={cancelHandler}>
                                Cancel
                            </Button>
                            <Button onClick={handleSubmit}>Save</Button>
                        </NewQuestionActions>
                    </NewQuestionFormContent>
                </NewQuestionFormContainer>
            </NewQuestionContent>
        </NewQuestionContainer>
    );
};

export default NewQuestionForm;
