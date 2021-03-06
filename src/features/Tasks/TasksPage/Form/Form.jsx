import React, {useState, useRef} from "react";
import {useDispatch} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";
import {addTask} from "../../tasksSlice";
import {FormButton, FormContainer} from "./styled";
import {FormInput} from "../../Input/styled";

export const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        focusInput();

        const trimmedTaskContent = newTaskContent.trim();
        if (trimmedTaskContent.length > 0) {
            dispatch(
                addTask({
                    id: nanoid(),
                    content: trimmedTaskContent,
                    done: false,
                })
            );
            setNewTaskContent("");
        }
        return;
    };

    return (
        <FormContainer onSubmit={onFormSubmit}>
            <FormInput
                ref={inputRef}
                placeholder="What are you up to?"
                value={newTaskContent}
                onChange={({target}) => setNewTaskContent(target.value)}
            />
            <FormButton>Add a task</FormButton>
        </FormContainer>
    );
};
