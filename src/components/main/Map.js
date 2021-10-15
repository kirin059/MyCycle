import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DownCircleFilled } from '@ant-design/icons';
import { Button, Modal } from 'antd';

const StyledMapContainer = styled.div`
    width: 1000px;
    height: 80%;
    border: 1px solid #A5D6A7;
    border-radius: 8px;
`;

const StyledMap = styled.div`
  width:100%;
  height:100%;
`;

const StyledMoreOption = styled(DownCircleFilled)`
  font-size: 35px;
  color: coral;
  transition: transform 300ms ease;
  :hover {
    transform: scale(1.1);
  }
`;

const StyledModal = styled(Modal)`
  max-width: 400px;
  .ant-modal-body {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    height: 150px;
    margin: auto;
    padding-top: 50px;
  }
  img {
    width: 45px !important;
    height: 45px;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 300ms ease;
    :hover {
      transform: scale(1.1);
    }
  }
  #trafficBtn, #loadBtn, #bicycleBtn {
    margin-right: 3%;
    background-color: coral;
    color: #fff;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px #E1E2E1;
    transition: transform 300ms ease;
    :hover {
      transform: scale(1.1);
    }
  }
`;

const { kakao } = window;

const Map = ({ myRide }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [optionBtnToggle, setOptionBtnToggle] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        setOptionBtnToggle(!optionBtnToggle)
      };
    
      const handleOk1 = () => {
        setIsModalVisible(false);
       // map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
      };
    
      const handleOk2 = () => {
        setIsModalVisible(false);
        //map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);
      };
      useEffect(() => {
        let infowindow = new kakao.maps.InfoWindow({zIndex:1});
        const container = document.getElementById('map');
		const options = {
			center: new kakao.maps.LatLng(35.157588, 129.058822),
			level: 2,
		};
        const map = new kakao.maps.Map(container, options);
    	const ps = new kakao.maps.services.Places(); 
        ps.keywordSearch(myRide, placesSearchCB); 

        function placesSearchCB (data, status) {
            if (status === kakao.maps.services.Status.OK) {
                let bounds = new kakao.maps.LatLngBounds();
                for (let i=0; i<data.length; i++) {
                    displayMarker(data[i]);    
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }       
                map.setBounds(bounds);
            } 
        }
        function displayMarker(place) {
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x) 
            })
            
            kakao.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
            });
        }  

    
    //props.optionBtnToggle ? map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC) : map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    }, [myRide]);

    return (
        <>
            <StyledMoreOption onClick={showModal} /> 
 
            <StyledModal visible={isModalVisible} onCancel={handleOk} footer={null} closable={true} >
                <Button id="trafficBtn" type="primary" onClick={handleOk1}>교통정보</Button>
                <Button id="loadBtn" type="primary" onClick={handleOk2}>로드뷰</Button>
                <Button id="bicycleBtn" type="primary" onClick={() => {
                handleOk();
                // map.addOverlayMapTypeId(kakao.maps.MapTypeId.BICYCLE);
                }}>자전거</Button>
                <img src={require("../../img/kakao_navi.png").default}
                onClick={() => {
                    handleOk();
                    window.open('https://map.kakao.com/link/to/18577297');
                    }}
                style={{ width: "30px" }}
                />
            </StyledModal> 
                        
            <StyledMapContainer>
                <StyledMap id='map'/>
            </StyledMapContainer> 
                

        </>
    )
}

export default Map;