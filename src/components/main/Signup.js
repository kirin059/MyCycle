import React from 'react';
import { Form, Input, Button } from 'antd';

const Signup = () => {
    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <h1>회원가입</h1>
                <Form.Item
                    name="userId"
                    rules={[{ required: true, message: '4자 이상의 영문 혹은 영문과 숫자를 조합' }]}
                >
                    <Input placeholder="ID" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '비밀번호를 입력해 주세요' }]}
                >
                    <Input
                    type="password"
                    placeholder="비밀번호"
                    />
                </Form.Item>
                <Form.Item
                    name="password2"
                    rules={[{ required: true, message: '비밀번호를 한번 더 입력해 주세요' }]}
                >
                    <Input
                    type="password"
                    placeholder="비밀번호 확인"
                    />
                </Form.Item>
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: '이름을 입력해 주세요' }]}
                >
                    <Input
                    placeholder="이름을 입력해 주세요"
                    />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: '이메일을 입력해 주세요' }]}
                >
                    <Input
                    placeholder="이메일을 입력해 주세요"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                    </Button>
                    <div> If you are not out member, <strong><a href="./Signup.js">register now</a></strong> </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Signup;