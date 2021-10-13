import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LoginIcon } from "../img/login-btn.svg";

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px;
    background-color: #ffffff;
    border-bottom: 1px solid #E1E2E1;
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1020px;
    margin: 0 auto;
`;

const StyledTitle = styled.h1`
margin: auto 0;
color: #A5D6A7;
    font-size: 60px;
`;

const StyledMenu = styled.ul`
display: flex;
    list-style: none;
    line-height: 40px;
    > li {
        font-size: 20px;
        margin-left: 35px;
    }
`;

const header = () => {
    return (
        <>
            <StyledContainer>
                <StyledHeader>
                    <StyledTitle>MyCycle</StyledTitle>
                    <StyledMenu>
                        <li>My Ride</li>
                        <li>My Record</li>
                        <li>Community</li>
                        <li><LoginIcon /></li>
                    </StyledMenu>

                </StyledHeader>
            </StyledContainer>
            
        </>
    );
};

export default header;