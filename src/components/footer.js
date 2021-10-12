import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 84px;
    background-color: #E1E2E1;
`;

const footer = () => {
    return (
        <>
            <StyledFooter>
                <p>본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다. <br/>
                © 2021 Lee, Sae-Bom. All Rights Reserved.</p>
           </StyledFooter>
        </>
    );
};

export default footer;



