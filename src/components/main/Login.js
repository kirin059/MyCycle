import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const StyledForm = styled(Form)`
    margin-top: 10%;
    padding: 40px;
    width: 350px;
    border-radius: 8px;
    h1 {
        font-weight: 700;
        color: #FF7F50;
    }
`;

const Login = () => {
    const [userInfo, setUserInfo] = useState(
        () => JSON.parse(window.localStorage.getItem("values")) || null
    );

    useEffect(() => {
        localStorage.getItem("values")
    }, [userInfo]);

    const history = useHistory();
    const onFinish = () => {
        const idValue = document.querySelector("input[name=id]").value
        const pwValue = document.querySelector("input[name=pw]").value

        if (idValue === userInfo.userId && pwValue === userInfo.password) {
            history.push("/")
        }
        else {
            alert("아이디 또는 비밀번호를 확인해주세요")
        }
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
                        name="id"
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
                        name="pw"
                        autocomplete="on"
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
                    <div style={{ fontSize: "15px", marginTop: "35px" }}> If you are not out member,<br />
                        <strong><span style={{ color: "#1990FF", cursor: "pointer" }}
                            onClick={() => { history.push("/signup") }}>
                            register now
                        </span></strong>
                    </div>
                </Form.Item>
            </StyledForm>

        </div>
    );
};

export default Login;