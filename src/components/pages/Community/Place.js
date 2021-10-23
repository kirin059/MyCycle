import React from 'react';
import Comment from './Comments'
import { Input, Form, Button, Descriptions } from 'antd';
import styled from 'styled-components';
import moment from 'moment';

const StyledMainContainer = styled(Form.Item)`
    margin:  0;
`;

const StyledCommentContainer =  styled(Form.Item)`
    margin:  10px 70px;
`;

const Place = () => {

    const [form] = Form.useForm();
    const month = moment().format("YYYY-MM-DD")

    const validateMessages = {
        required: '${label} is required!',
        types: {
            Name: '${label} is not a valid email!',
            Comment: '${label} is not a valid number!',
        }
    };
    
    const onFinish = async () => {
      try {
        const values = await form.validateFields();
        console.log("Submit:", values);
      } catch (errInfo) {
        console.log("Error:", errInfo);
      }
    };
    
    return (
        <>
            <Form form={form} layout="horizontal" onFinish={onFinish} validateMessages={validateMessages} style={{backgroundColor: "#fff"}}>
                <StyledMainContainer>
                    <Descriptions bordered>
                        <Descriptions.Item label="날짜" span={2}>{month}</Descriptions.Item>  
                        <Descriptions.Item label="총 게시글" > 3 </Descriptions.Item>
                        <Descriptions.Item style={{ height: "60vh" }} colSpan={3}>
                            {
                                <Comment />
                            }
                        </Descriptions.Item>
                    </Descriptions>
                </StyledMainContainer>

                <StyledCommentContainer>
                    <Form.Item
                        style={{display:"flex", justifyContent:"start"}}
                        rules={[{ required: true }]}
                        label="Name"
                    >
                        <Input placeholder="name" style={{ width: "65%", marginRight:"15px" }} /> <Button htmlType="submit" type="primary"> Comment </Button>
                    </Form.Item>
                    <Form.Item
                        style={{display:"flex"}}
                        rules={[{ required: true }]}
                        label="Comment"
                    >
                        <Input.TextArea rules={[{ required: true }]} placeholder="You can write to share..."/>
                    </Form.Item>
                </StyledCommentContainer>
            </Form>
        </>
    );
};

export default Place;

