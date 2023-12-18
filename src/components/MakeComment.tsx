import "../App.css";

import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const MakeComment: React.FC = () => {
    const [text, setText] = useState("");
    return (
        <div style={{ margin: "auto", textAlign: "center" }}>
            <form onSubmit={() => console.log(text)}>
                <TextField
                    onChange={(x) => setText(x.target.value)}
                    id="outlined-multiline-static"
                    label="New Post?"
                    multiline
                    rows={4}
                    placeholder="Share your thoughts!"
                    fullWidth={true}
                    size="small"
                />
                <br />
                <Button variant="contained" type="submit" style={{ margin: "10px 20px" }}>
                    post
                </Button>
            </form>
        </div>
    );
};

export default MakeComment;
