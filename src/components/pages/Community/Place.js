import React, { useState } from 'react';
import Comment from './Comments'
import { Input, Form, Button } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledMainContainer = styled.div`
    padding: 18px;
    margin:  0;
    height: 68vh;
    border-bottom: 1px solid #E1E2E1;
`;

const StyledTopHeader = styled.div`
    height: 48px;
    background-color: #A5D6A7;
    border-radius: 8px;
    padding: 10px;
    color: #fff;
    font-size: 17px;

`;

const StyledCommentContainer =  styled(Form.Item)`
    margin:  13px 20px;
    background-color: #fff;
    height: 80px;
`;

const StyledUserName = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom: 10px;
    Input {
        border-radius: 4px;
    }
`;

const Place = () => {
    const [inputValues, setInputValues] = useState({
        nameValue: '',
        commentValue: '',
    })
    const { nameValue, commentValue } = inputValues;

    const [name, setName] = useState('');
    const [comment, setComment] = useState('')
    const [show, setShow] = useState(false)

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        })
    }

    const handleComments = (e) => {
        e.preventDefault();
        if (inputValues.nameValue.length && inputValues.commentValue.length > 0) {
            setName(inputValues.nameValue)
            setComment(inputValues.commentValue);
            setShow(true)
        }
        else {
            return null
        }
        setInputValues({
            [name]: ''
        })
    }
    
    return (
        <div style={{backgroundColor: "#fff", width:"550px", borderRadius:"8px"}}>
            <StyledMainContainer>
                <StyledTopHeader>
                    당신의 Hot Place를 공유해주세요
                </StyledTopHeader>
                {
                    <Comment name={name} comment={comment} show={show}/>
                }
            </StyledMainContainer>

            <StyledCommentContainer>
                <StyledUserName>
                    <Input
                        name="nameValue"
                        value={nameValue}
                        onChange={handleOnChange}
                        placeholder="Enter your username"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        rules={[{ required: true, message: '이름을 입력해주세요' }]}
                        style={{ width: "65%", marginRight: "15px" }}
                    />
                    <Button onClick={handleComments} type="primary"> Comment </Button>
                </StyledUserName>
                <Input
                    name="commentValue"
                    value={commentValue}
                    onChange={handleOnChange}
                    //autoSize={true}
                    type="Input.TextArea"
                    rules={[{ required: true, message: '내용을 입력해주세요' }]}
                    prefix={<EditOutlined />}
                    placeholder="You can write to share..."
                />
            </StyledCommentContainer>
        </div>
    );
};

export default Place;

