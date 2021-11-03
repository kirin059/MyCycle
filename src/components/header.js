import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { ReactComponent as LoginIcon } from "../img/login-btn.svg";
import { MenuOutlined } from "@ant-design/icons";

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

    @media only screen and (max-width: 768px) {
        width: 80vw;
    }

    @media only screen and (max-width: 480px) {
        //width: ${props => (props.span ? (props.span / 12) * 100 : "8.33")}%;
        width: 90vw;
    }
`;

const StyledTitle = styled.h1`
    margin: auto 0;
    color: #A5D6A7;
    font-size: 60px;
    cursor: pointer;
    
    @media only screen and (max-width: 768px) {
        font-size: 50px;
    }

    @media only screen and (max-width: 480px) {
        font-size: 40px;
    }
`;

const StyledMenu = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    line-height: 40px;
    > li {
        font-size: 20px;
        margin: 10px 0 0 0;
        margin-right: 35px;
        cursor: pointer;
        transition: transform 300ms ease;
        @media only screen and (max-width: 768px) {
            margin: 10px 0;
        }
        @media only screen and (max-width: 480px) {
            margin: 5px 0;
        }
    }
    > li:hover {
        background-color: #A5D6A7;
        width: 110px;
        height: 40px;
        border-radius: 8px;
        transform: scale(1.05);
        cursor: pointer;
        @media only screen and (max-width: 768px) {
            margin: 10px 0;
        }
        @media only screen and (max-width: 480px) {
            margin: 5px 0;
        }
    }
    @media only screen and (max-width: 768px) {
        position: absolute;
        top: 100px;
        left: 0;
        flex-direction: column;
        border: none;
        border-radius: 8px;
        background-color: #A5D6A7;
        color: #ffffff;
        width: 100%;
        z-index: 99;
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

const StyledMenuIcon = styled(MenuOutlined)`
    font-size: 30px;
    color: #A5D6A7;
`;


const Header = () => {
    const history = useHistory();
    const [isShow, setIsShow] = useState(false)

    const handleMenu = () => {
        setIsShow(!isShow);
    }

    return (
        <>
            <StyledContainer>
                <StyledHeader>
                    <StyledTitle onClick={() => { history.push("/") }}>MyCycle</StyledTitle>
                    <div style={{display: "flex", alignItems :"center"}}>
                        {
                            isShow
                            ? (
                                <StyledMenu>
                                    <li onClick={ () => {history.push("/myride")}}>My Ride</li>
                                    <li onClick={ () => {history.push("/myrecord")}}>My Record</li>
                                    <li onClick={ () => {history.push("/community")}}>Community</li>
                                </StyledMenu>
                            )
                            : null
                        }
                        <StyledMenuIcon className="menu" onClick={handleMenu}/>
                        <div style={{ margin:"8px 0 0 30px" }}
                            onClick={ () => {history.push("/login")}}
                        ><StyledLoginIcon /></div>
                    </div>
                </StyledHeader>
            </StyledContainer>   
        </>
    );
};

export default Header;