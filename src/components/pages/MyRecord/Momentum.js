import React, {useState} from 'react';
import { Progress, PageHeader, Tag, Input, Form, Button, Calendar, Modal, Typography } from "antd";
import styled from 'styled-components';
import { ExclamationCircleFilled } from '@ant-design/icons';

const StyledTopContainer = styled.div`
    background-color: #fff;
    border-radius: 8px;
    padding: 10px 20px 20px 20px;
`;

const StyledBottomLeftContainer = styled.div`
    margin-top: 15px;
    width: 80%;
    background-color: transparent;
    border-radius: 8px;
    .ant-picker-calendar-mini {
        border-radius: 8px;
        width: 280px;
    }
    .ant-picker-calendar-header {
        background-color: transparent;
    }
    .ant-picker-calendar-mode-switch {
        display: none;
    }
    .ant-picker-calendar-year-select {
        display: none;
    }
`;

const StyledRecordTitle = styled.div`
    padding: 12px 0;
    border-bottom : 1px solid #e1e2e1;
`;

const StyledBottomRightContainer = styled.div`
     margin-top: 15px;
     width: 100%;
     background-color: #fff;
     border-radius: 8px;
     ul {
        list-style: none;
        padding: 0;
     }
     span {
         padding: 0 10px;
     }
`;

const StyledTooltip = styled.div`
    display: flex;
    margin: 8px 0;
    color: grey;
    font-size: 12px;
    .anticon-exclamation-circle {
        margin: auto 0;
        margin-right: 5px;
    }
`;

const Momentem = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectDay, setSelectDay] = useState([]);

    const [saveBtn, setSaveBtn] = useState(false);

    const [ridingTime, setRidingTime] = useState('')

    const [inputsValue, setInputsValue] = useState({})
    const { cal, weight } = inputsValue;

    const onChangeValue = (e) => {
        const { value, name } = e.target;
        console.log("name :", name, " [name] :", [name], "value :", value);
        setInputsValue({
            ...inputsValue,
            [name]: value
        });
    }

    const handleOnSelect = (date) => {
        //setSaveBtn(false)
        setIsModalVisible(true)
        setSelectDay(date.format("YYYY-MM-DD"))
    }
  
    const handleOk = () => {
        setIsModalVisible(false);
        setSaveBtn(true)
        if (setSaveBtn) {
            return (
                <li>{selectDay} {ridingTime} cal</li> 
            )
        }
        
        // 칼로리 기록표 안에 계산된value값 + 날짜 넣기 (0.113 -> 22km/h)
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    const onRidingTimeChange = (e) => {
        setRidingTime(e.target.value)
    }

    return (
        <>
            <StyledTopContainer>
                <Form
                    name="calendar"
                    autoComplete="off"
                >
                    <PageHeader
                        title="My Cycle 운동량"
                        tags={<Tag color="coral">Cycling</Tag>}
                        extra={[
                            <Button htmltype="submit" type="primary"> 저장 </Button>
                        ]}
                    >
                        <Input
                            name="cal"
                            value={cal}
                            onChange={onChangeValue}
                            placeholder="목표 칼로리(cal)"
                            style={{ width: 300, marginRight: "15px" }} />
                        <Input
                            name="weight"
                            value={weight}
                            onChange={onChangeValue}
                            placeholder="현재 몸무게(kg)"
                            style={{ width: 300 }} />
                        <StyledTooltip><ExclamationCircleFilled /> 평균 라이딩 속도 22km/h를 기준으로 칼로리 변환을 측정하였습니다.</StyledTooltip>
                    </PageHeader>
                </Form>
                
                <Progress
                    type="circle"
                    width="200px"
                    strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }}
                    percent={80}
                />
            </StyledTopContainer>

            <div style={{display:"flex"}}>
            <StyledBottomLeftContainer >
                    <Calendar
                        fullscreen={false}
                        onSelect={handleOnSelect}
                        headerRender={() => {
                            return (
                            <div style={{ padding: 8 }}>
                                <Typography.Title level={4}>일일 라이딩시간(h) 기록표</Typography.Title>
                            
                            </div>
                            );
                        }}
                    />
                    <Modal
                        title={selectDay}
                        visible={isModalVisible}
                        onCancel={handleCancel}
                        onOk={handleOk}
                        style={{ width: 80 }}
                    >
                        <Input placeholder="총 라이딩 시간" value={ridingTime} onChange={onRidingTimeChange} />
                        <StyledTooltip><ExclamationCircleFilled /> 시간 단위로 숫자를 입력해 주세요 (ex. 1시간 : 1)</StyledTooltip>
                    </Modal>
            </StyledBottomLeftContainer>

                <StyledBottomRightContainer>
                    <StyledRecordTitle>칼로리 기록표</StyledRecordTitle>
                    <ul>
                        {
                            saveBtn && (
                                
                                <li><span>{selectDay}</span> <span>{ridingTime} cal</span></li> 
                            )
                        }
                    </ul>
            </StyledBottomRightContainer>
            </div>
        </>
    );
};

export default Momentem;