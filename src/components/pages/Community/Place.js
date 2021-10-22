import React from 'react';
import Comment from './Comments'
import { Input, Form, Button, Descriptions } from 'antd';
import styled from 'styled-components';
import moment from 'moment';

const StyledMainContainer = styled(Form.Item)`
    margin:  0;
`;

const StyledCommentContainer =  styled(Form.Item)`
margin:  10px 0;
`;

const Place = () => {

    const [form] = Form.useForm();
    const month = moment().format("YYYY-MM-DD")


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
            <Form form={form} layout="horizontal" onFinish={onFinish} style={{backgroundColor: "#fff"}}>
                <StyledMainContainer>
                    <Descriptions bordered>
                        <Descriptions.Item label="날짜" span={2}>{month}</Descriptions.Item>
                
                        <Descriptions.Item label="총 게시글" > 반복문index </Descriptions.Item>

                        <Descriptions.Item style={{ height: "60vh" }} colSpan={3}>
                            {
                                <Comment />
                            }
                        </Descriptions.Item>
                    </Descriptions>
                </StyledMainContainer>

                <StyledCommentContainer
                    style={{display:"flex"}}
                    rules={[ {required: true} ]}
                >
                    <Input placeholder="You can write to share..." style={{width: "70%", marginRight:"15px"}}/>
                    <Button htmlType="submit" type="primary"> Comment </Button>
                </StyledCommentContainer>
            </Form>
        </>
    );
};

export default Place;

