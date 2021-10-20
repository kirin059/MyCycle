import React from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';
import Mileage from '../pages/MyRecord/Mileage'
import Momentum from '../pages/MyRecord/Momentum'

const StyledTapContainer = styled(Tabs)`
    margin: 20px auto;
    .ant-tabs-ink-bar {
        height: 5px;
        background: transparent;
    }

    .ant-tabs-ink-bar::after {
        content: " ";
        position: absolute;
        left: 50%;
        right: 0;
        bottom: 0;
        height: 5px;
        background: coral;
        width: 25px;
        transform: translateX(-50%);
    }
`;

const { TabPane } = Tabs;
const MyRecord = () => {
    return (
        <>
            <StyledTapContainer defaultActiveKey="1" centered>
                <TabPane tab="주행 기록" key="1" size="large" >
                    <Mileage />
                </TabPane>
                <TabPane tab="운동량" key="2" size="large">
                    <Momentum />
                </TabPane>
            </StyledTapContainer>
        </>
    );
};

export default MyRecord;