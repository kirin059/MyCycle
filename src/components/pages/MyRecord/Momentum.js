import React, {useState} from 'react';
import { Progress, PageHeader, Tag, Input, Form, Button, Calendar, Modal, Typography, Alert } from "antd";
import styled from 'styled-components';
import moment from 'moment';
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
    .ant-picker-calendar-mode-switch, .ant-picker-calendar-year-select {
        display: none;
    }
    .ant-typography {
        margin: 5px 0;
    }
`;

const StyledRecordTitle = styled.div`
    padding: 12px 0;
    border-bottom : 1px solid #e1e2e1;
    font-weight: 800;
    font-size: 20px;
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
     li {
         padding: 10px 0;
     }
     span {
         padding: 0 20px;
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

const StyledCalInput = styled(Input)`
    width: 320px;
    margin-right: 15px;
    background-color: coral;
    color: #fff;
    border-radius: 3px;
    border: none;
    padding: 5px 8px;
`;

const Momentem = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectDay, setSelectDay] = useState([]);

    const [isSaveBtn, setIsSaveBtn] = useState(false);

    const [inputs, setInputs] = useState({
        cal: '',
        weight: '',
        times: ''
    })

    const { cal, weight, times } = inputs;
    const sum = Math.floor(weight * 0.113 * times * 0.01);

    const month = moment()._d.getMonth() +1
    console.log(month)

    const handleOnSelect = (date) => {
        setIsSaveBtn(false)
        setIsModalVisible(true)
        setSelectDay(date.format("YYYY-MM-DD"))
    }
  
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
        setIsSaveBtn(true)
    };
  
  
    const onChangeValue = (e) => {
           
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const sumCal = Math.round(weight * 0.113 * times)

    return (
        <>
            <StyledTopContainer>
                <Form
                    name="calendar"
                    autoComplete="off"
                >
                    <PageHeader
                        title="My Cycle ?????????"
                        tags={<Tag color="coral">Cycling</Tag>}
                        extra={[
                            <Button htmltype="submit" type="primary"> ?????? </Button>
                        ]}
                    >
                        <StyledCalInput
                            name="cal"
                            value={cal}
                            onChange={onChangeValue}
                            prefix={<strong>{month}??? ?????? ?????? ?????????</strong> }
                            suffix={ <span>cal</span> }
                        />
                        <Input
                            name="weight"
                            value={weight}
                            onChange={onChangeValue}
                            placeholder="?????? ?????????(kg)"
                            style={{ width: 270 }}
                            suffix={<span>kg</span>}
                        />
                        <StyledTooltip><ExclamationCircleFilled /> ?????? ????????? ?????? 22km/h??? ???????????? ????????? ????????? ?????????????????????.</StyledTooltip>
                    </PageHeader>
                </Form>
                
                <Progress
                    type="circle"
                    width="200px"
                    strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }}
                    percent={sum}
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
                                <Typography.Title level={4}>?????? ???????????????(h) ?????????</Typography.Title>
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
                        <Input placeholder="??? ????????? ??????" name="times" value={times} onChange={onChangeValue} />
                        <StyledTooltip><ExclamationCircleFilled /> ??? ????????? ????????? ????????? ????????? (ex. 1??????: 60)</StyledTooltip>
                    </Modal>
                </StyledBottomLeftContainer>

                <StyledBottomRightContainer>
                    <StyledRecordTitle>????????? ?????????</StyledRecordTitle>
                    <ul>
                        {
                            isSaveBtn && (
                                <li>                                    
                                    {
                                        weight && times
                                        ?
                                        <>
                                            <span>{selectDay}</span>
                                            <span><strong>{ sumCal }</strong> cal</span>
                                        </>
                                        :
                                        <Alert
                                            message="???????????? ?????????????????? ?????? ??????????????????"
                                            type="warning"
                                            closable
                                        />
                                    }
                                </li>
                            )
                        }
                    </ul>
                </StyledBottomRightContainer>
            </div>
        </>
    );
};

export default Momentem;