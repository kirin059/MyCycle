import React, { createElement, useState } from "react";
import { Comment, Tooltip, Avatar, Button, Input } from "antd";
import moment from "moment";
import styled from 'styled-components';
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled
} from "@ant-design/icons";

const StyledComment = styled(Comment)`
    margin: 10px 15px;
    width: 100%;
`;

const Comments = ({commentLists}) => {
    console.log(commentLists, '프롭스로 commentLists잘넘어왔나')

    const { text } = commentLists;

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction("liked");
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction("disliked");
    };

    const handleReplay = () => {
        const replayInput = document.getElementById('replayInput')
        const replayButton = document.getElementById('replayButton')

        replayInput.style.display = 'block';
        replayButton.style.display = 'block';
    }
    const handleSubmitReply = () => {
        const replayInput = document.getElementById('replayInput')
        const replayButton = document.getElementById('replayButton')

        replayInput.style.display = 'none';
        replayButton.style.display = 'none';
    }

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {React.createElement(
                action === "disliked" ? DislikeFilled : DislikeOutlined
                )}
                <span className="comment-action">{dislikes}</span>
            </span>
        </Tooltip>,
        <Button key="comment-basic-reply-to" onClick={handleReplay}>Reply to</Button>,
        <Input id="replayInput" style={{ display: "none", width: "350px" }} placeholder="Replay to ..." />,
        <Button id="replayButton" style={{ display: "none" }} onClick={handleSubmitReply}>reply</Button>
 
    ];

    return (
        <>
            {
                commentLists.map((a, i) =>
                (<StyledComment
                    key={i}
                    style={{textAlign:"left"}}
                    actions={actions}
                    author={"Logged in ID"}
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" /> }
                    content={commentLists[i].text}
                    datetime={
                        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                            <span>{moment().fromNow()}</span>
                        </Tooltip>
                    }
                >
                </StyledComment>))
            }
            
        </>
    );
};

export default Comments;