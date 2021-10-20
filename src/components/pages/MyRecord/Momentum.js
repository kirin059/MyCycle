import React from 'react';
import { Progress, PageHeader, Tag, Input, Select , Form, Button } from "antd";
import styled from 'styled-components';

const StyledTtopHeader = styled.div`
        border: 1px solid #E1E2E1;
        border-radius: 8px;
        padding: 10px 0 20px 0;
    `;

const Momentem = () => {

    const { Option } = Select;


    return (
        <>
            <StyledTtopHeader>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <PageHeader
                    title="My Cycle 운동량"
                    tags={<Tag color="coral">Cycling</Tag>}
                    extra={[
                        <Button htmltype="submit" type="primary">
                        저장
                        </Button>,
                    ]}
                >
                    <Input placeholder="목표 칼로리(cal)"  style={{ width: 200, marginRight: "5px" }}/>
                    <Input placeholder="현재 몸무게(kg)"  style={{ width: 200 }}/>
                    <Select
                    showSearch
                    style={{ width: 200, marginLeft: "5px" }}
                    placeholder="평균속도(km/h)"
                    //   filterOption={(input, option) =>
                    //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    //   }
                    >
                        <Option value="16.1 km/h">16.1 km/h</Option>
                        <Option value="19.3 km/h">19.3 km/h</Option>
                        <Option value="22.5 km/h">22.5 km/h</Option>
                        <Option value="24.1 km/h">24.1 km/h</Option>
                        <Option value="25.7 km/h">25.7 km/h</Option>
                        <Option value="27.4 km/h">27.4 km/h</Option>
                        <Option value="29 km/h">29 km/h</Option>
                        <Option value="30.6 km/h">30.6 km/h</Option>
                        <Option value="32.2 km/h">32.2 km/h</Option>
                        <Option value="33.8 km/h">33.8 km/h</Option>
                        <Option value="37 km/h">37 km/h</Option>
                        <Option value="40.2 km/h">40.2 km/h</Option>
                    </Select>
                </PageHeader>
            </Form>
            
            <Progress
                type="circle"
                width="200px"
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                percent={100}
            />
            </StyledTtopHeader>

        </>
    );
};

export default Momentem;