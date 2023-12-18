import Comment from "../types/Comment";
import "../App.css";

import React, { FormEvent, useState } from "react";
import { Button, TextField } from "@mui/material";

type Props = {
    onAddComment: (newComment: Comment) => void;
};

const MakeComment: React.FC<Props> = ({ onAddComment }: Props) => {
    const [text, setText] = useState("");
    const [error, setError] = useState(false); // error if textfield is empty

    // When submit button is pressed, add comment, clear inputs
    const handleSubmit = (event: FormEvent, text: string) => {
        // prevent page from refreshing
        event.preventDefault();
        if (!text.trim()) {
            setError(true);
            return;
        }
        onAddComment({
            body: text,
            author: "Sam",
            timestamp: new Date(),
            key: 999,
        });

        setText("");
    };

    return (
        <div style={{ margin: "auto", textAlign: "center" }}>
            <form onSubmit={(event) => handleSubmit(event, text)}>
                <TextField
                    error={error}
                    helperText={error ? "This field cannot be empty." : ""}
                    onChange={(x) => {
                        setText(x.target.value);
                        setError(false);
                    }}
                    id="outlined-multiline-static"
                    label="New Post?"
                    multiline
                    rows={4}
                    placeholder="Share your thoughts!"
                    fullWidth={true}
                    size="small"
                    value={text}
                />
                <br />
                <Button variant="contained" type="submit" style={{ margin: "10px 20px" }}>
                    post
                </Button>
                <Button variant="contained" type="reset" style={{ margin: "10px 20px" }}>
                    reset
                </Button>
            </form>
        </div>
    );
};

export default MakeComment;
