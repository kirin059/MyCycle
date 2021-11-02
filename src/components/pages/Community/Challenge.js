import React, { useState } from 'react';
import Comment from './Comments'
import styled from 'styled-components';

const StyledMainContainer = styled.div`
    padding: 18px;
    margin:  0;
    height: 67vh;
    border-bottom: 1px solid #E1E2E1;
`;

const StyledTopHeader = styled.div`
    height: 48px;
    background-color: yellow;
    border-radius: 8px;
    padding: 10px;
    color: #fff;
    font-size: 17px;

`;

const StyledCommentContainer = styled.div`
    display:flex;
    justify-content: space-between;
    margin:  13px 20px;
`;

const Challenge = () => {
    const [commentLists, setCommentLists] = useState([
        {      
            text: 'MyCycle 기록 인증',
        },
    ])

    const handleSubmit = (text) => {
        const comment = {
            text,   
        };
        setCommentLists(commentLists.concat(comment));
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
        handleSubmit();
        }
    };
    
    return (
        <div style={{backgroundColor: "#fff", width:"550px", height:"100%", borderRadius:"8px"}}>
            <StyledMainContainer>
                <StyledTopHeader>
                    함께 모여서 그룹라이딩 해봐요
                </StyledTopHeader>         
                <Comment commentLists={commentLists} />
            </StyledMainContainer>
      
            <StyledCommentContainer>
                {/* <Form
                    onSubmit={handleSubmit}
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Input
                        ref={ref}
                        type="text"
                        name="text"
                        value={content}
                        onChange={handleChange}
                        prefix={<EditOutlined />}
                        placeholder="You can write to share..."
                        style={{width: "400px", marginRight:"10px"}}
                    />
                    <Button
                        type="primary"
                        htmlType="submit"
                        onClick={handleSubmit}
                        onKeyPress={handleKeyPress}
                    >
                        Comment
                    </Button>
                </Form> */}
            </StyledCommentContainer>
        </div>
    );
};

export default Challenge;


