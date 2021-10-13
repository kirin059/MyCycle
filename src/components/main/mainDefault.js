import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 60vw;
  overflow: hidden; 
`;

const StyledSliderContainer = styled.div`
margin-top: 30%;
  width: 100%;
  display: flex; 
`;

const StyledImg = styled.img`
    width: 500px;
    height: 480px;
    margin: 0 20px;
`;

const TOTAL_SLIDES = 5;

const MainDefault = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null); 

    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) {
            setCurrentSlide(0);
        }
        else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide * 510}px)`;  
        const interval = setInterval(() => {
            return nextSlide()
        }, 2000);
        return () => { clearInterval(interval)}
    }, [currentSlide]);
    

    return (
        <>
            <StyledContainer>
                <StyledSliderContainer ref={slideRef}>
                    <StyledImg src={require("../../img/blue-nobg.png").default} alt="blue bycycle" />
                    <StyledImg src={require("../../img/yellow-nobg.png").default} alt="yellow bycycle" />
                    <StyledImg src={require("../../img/red-nobg.png").default} alt="red bycycle" />
                    <StyledImg src={require("../../img/lightgreen-nobg.png").default} alt="lightgreen bycycle" />
                    <StyledImg src={require("../../img/purple-nobg.png").default} alt="purple bycycle" />
                    <StyledImg src={require("../../img/green-nobg.png").default} alt="green bycycle" />
                    <StyledImg src={require("../../img/grey-nobg.png").default} alt="grey bycycle" />       
                </StyledSliderContainer>
            </StyledContainer>
            

        </>
    );
};

export default MainDefault;