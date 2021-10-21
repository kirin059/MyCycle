import React from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';
import Place from '../pages/Community/Place'
import Grouping from '../pages/Community/Grouping'
import Challenge from '../pages/Community/Challenge';

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
const Community = () => {
    return (
        <>
            <StyledTapContainer defaultActiveKey="1" centered>
                <TabPane tab="Hot Place" key="1"  size="large">
                    <Place />
                </TabPane>
                <TabPane tab="Grouping" key="2"  size="large">
                    <Grouping />
                </TabPane>
                <TabPane tab="My Challenge" key="3"  size="large">
                    <Challenge />
                </TabPane>
            </StyledTapContainer>

            
        </>
    );
};

export default Community;