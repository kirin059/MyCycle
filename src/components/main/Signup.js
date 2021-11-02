import React from 'react';
import { Form, Input, Button } from 'antd';
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

const Signup = () => {
    const history = useHistory();
    
    const onFinish = (values) => {
        history.push("/login")
        localStorage.setItem("values", JSON.stringify(values))
    };

    const handleRePassword = () => {
        const pwValue = document.querySelector("input[name=pw]").value;
        const rePwValue = document.querySelector("input[name=re_pw]").value;
        if (pwValue != rePwValue) {
            alert("비밀번호가 일치하지 않습니다")
        }
    }
    
    return (
        <div>
            <StyledForm
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <h1>회원가입</h1>
                <Form.Item
                    name="userId"
                    rules={[{ required: true, message: '아이디를 입력해 주세요' }]}
                >
                    <Input
                        name="userId"
                        placeholder="ID"
                        maxLength={12}
                        minLength={4}
                        style={{ borderRadius: "5px" }}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '비밀번호를 입력해 주세요' }]}
                >
                    <Input
                        name="pw"
                        type="password"
                        style={{ borderRadius: "5px" }}
                        placeholder="비밀번호"
                    />
                </Form.Item>
                <Form.Item
                    name="password2"
                    rules={[{ required: true, message: '비밀번호를 한번 더 입력해 주세요' }]}
                >
                    <Input
                        name="re_pw"
                        type="password"
                        style={{ borderRadius: "5px" }}
                        placeholder="비밀번호 확인"
                        onMouseOut={handleRePassword}
                    />
                </Form.Item>
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: '이름을 입력해 주세요' }]}
                >
                    <Input
                        name="name"
                        style={{ borderRadius: "5px" }}
                        placeholder="이름을 입력해 주세요"
                    />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ type: 'email', required: true, message: '올바른 이메일 형식을 입력해 주세요' }]}
                >
                    <Input
                        name="email"
                        style={{ borderRadius: "5px" }}
                        placeholder="이메일을 입력해 주세요"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                    Register
                    </Button>
                </Form.Item>
            </StyledForm>
        </div>
    );
};

export default Signup;