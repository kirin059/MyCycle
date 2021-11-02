import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';


const StyledForm = styled(Form)`
    padding: 40px;
    width: 350px;
    border-radius: 8px;
    h1 {
        font-weight: 700;
        color: #FF7F50;
    }
`;

const Login = () => {
    const history = useHistory();
    const onFinish = (values) => {
        console.log(values);  // localstorage 적용하기
    };


    return (
        <div>
            
            <StyledForm
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <h1>로그인</h1>
                <Form.Item
                    name="userId"
                    rules={[{ required: true, message: 'ID를 입력해 주세요' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="ID"
                        style={{ borderRadius: "5px" }}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '비밀번호를 입력해 주세요' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        style={{borderRadius:"5px"}}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                    </Button>
                    <div style={{fontSize:"18px", marginTop:"35px"}}> If you are not out member, <strong><span style={{color:"#1990FF", cursor:"pointer"}} onClick={ () => {history.push("/signup")}}>register now</span></strong> </div>
                </Form.Item>
            </StyledForm>

        </div>
    );
};

export default Login;