import React from 'react';
import { useHistory } from 'react-router';
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
    cursor: pointer;
`;

const StyledMenu = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    line-height: 40px;
    > li {
        font-size: 20px;
        margin-right: 35px;
        cursor: pointer;
        transition: transform 300ms ease;
    }
    > li:hover {
        background-color: #A5D6A7;
        width: 110px;
        height: 40px;
        border-radius: 8px;
        transform: scale(1.1);
        cursor: pointer;
    }
`;

const StyledLoginIcon = styled(LoginIcon)`
    cursor: pointer;
    transition: transform 300ms ease;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`;

const Header = () => {
    const history = useHistory();
    return (
        <>
            <StyledContainer>
                <StyledHeader>
                    <StyledTitle onClick={ () => {history.push("/")}}>MyCycle</StyledTitle>
                    <StyledMenu>
                        <li onClick={ () => {history.push("/myride")}}>My Ride</li>
                        <li onClick={ () => {history.push("/myrecord")}}>My Record</li>
                        <li onClick={ () => {history.push("/community")}}>Community</li>
                        <div style={{paddingTop: '12px'}}><StyledLoginIcon /></div>
                    </StyledMenu>

                </StyledHeader>
            </StyledContainer>
            
        </>
    );
};

export default Header;