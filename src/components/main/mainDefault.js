import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
import { ReactComponent as MainBike } from '../../img/main-bike.svg'
import { ReactComponent as YellowBike } from '../../img/yellow-bike.svg'
import { ReactComponent as BlueBike } from '../../img/blue-bike.svg'
import { ReactComponent as RedBike } from '../../img/red-bike.svg'
import { ReactComponent as PurpleBike } from '../../img/purple-bike.svg'


const mainDefault = () => {
    const contentStyle = {
        width: '30%',
        height: '30%',
        color: 'red',
        background: 'black'
    };
    
    return (
        <>
            <Carousel autoplay>

                    <MainBike/>
   
                <div>
                    <div style={contentStyle}><YellowBike/></div>
                </div>
                <div style={contentStyle}><BlueBike/></div>
                <div style={contentStyle}><RedBike /></div>
                <div style={contentStyle}><PurpleBike/></div>
            </Carousel>,
        </>
    );
};

export default mainDefault;