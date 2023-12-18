import CommentItem from "./CommentItem";
import Comment from "../types/Comment";

import React from "react";

type Props = {
    styled: boolean;
    comments: Comment[];
};

const BasicCommentList: React.FC<Props> = ({ styled, comments }) => {
    return (
        <ul>
            {comments.map((comment) => (
                <CommentItem comment={comment} styled={styled} key="" />
            ))}
        </ul>
    );
};

export default BasicCommentList;
