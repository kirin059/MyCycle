import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 60vw;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    //width: ${props => (props.span ? (props.span / 12) * 100 : "8.33")}%;
    width: 80vw;
  }

  @media only screen and (max-width: 480px) {
    //width: ${props => (props.span ? (props.span / 12) * 100 : "8.33")}%;
    width: 95vw;
  }
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
  
  @media only screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
  }

  @media only screen and (max-width: 480px) {
    width: 300px;
    height: 300px;
  }
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
    
    const arr = [1,2,3,4,5,6,7]

    return (
        <>
            <StyledContainer>
                <StyledSliderContainer ref={slideRef} >
                    {
                        arr.map((a, i) => {
                            return (
                                <StyledImg key={i} src={require("../../img/" + a + ".png").default} alt="bycycle" />
                            )
                        })
                    }
                </StyledSliderContainer>
            </StyledContainer>
            

        </>
    );
};

export default MainDefault;