/*global kakao */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Modal } from 'antd';
import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'

const StyledInputContainer = styled.div`
  margin: 1.5%  0;
  display: flex;
  align-items: center;
  form {
    display: flex;
    justify-content: space-between;
    margin: 0;
    width: 100%;
    .InputContainer {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      input {              
        padding: 2px 11px;
        margin-right: 10px;
        width: 380px;
        height: 30px;
        border: none;
        border-radius: 5px;
        box-shadow: 3px 3px 3px 3px #E1E2E1;
        @media only screen and (max-width: 768px) {
          margin: 0 20px;
          width: 100%;
        }
      }
      #search {
        border-radius: 5px;
        box-shadow: 2px 2px 2px 2px #E1E2E1;
      }
      @media only screen and (max-width: 768px) {
          width: 100%;
        }
    }
    .InputContainer input:focus {
      outline:none;
    }
    .mapOptionBtn {
      padding: 7px;
      background-color: coral;
      border-radius: 8px;
      color: #fff;
      font-size: 15px;
      transition: transform 300ms ease;
      cursor: pointer;
      :hover {
        transform: scale(1.03);
      }
    }
    .mapContainer {
      width: 40px !important;
      height: 40px;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 300ms ease;
      :hover {
        transform: scale(1.1);
      }
      @media only screen and (max-width: 768px) {
        margin: 0 auto;
        width: 95vw;
      }
    }

    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px auto;
      width: 100vw;
    }
  }



  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
  }
`;

const StyledMoreOption = styled(EnvironmentOutlined)`
  padding: 0 0 0 5px;
  font-size: 20px;
  color: #fff;
  background-color: coral;
  cursor: pointer;
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
  }
  #trafficBtn, #loadBtn, #bicycleBtn {
    margin-right: 3%;
    color: coral;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px #E1E2E1;
    transition: transform 300ms ease;
    :hover {
      transform: scale(1.1);
    }
  }
`;

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

const { kakao } = window;
const MyRide = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");
  const [placeId, setPlaceId] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isTrafficBtn, setIsTrafficBtn] = useState(false);
  const [isloadBtn, setIsLoadBtn] = useState(false);
  const [isBicycleBtn, setIsBicycleBtn] = useState(false);

  const searchInputOnChange = (e) => {
    setInputText(e.target.value);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
  };

  
 useEffect(() => {
  let infowindow = new kakao.maps.InfoWindow({zIndex:1});
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);
  const ps = new kakao.maps.services.Places(); 
    ps.keywordSearch(place, placesSearchCB); 

  function placesSearchCB(data, status) {
    console.log('data : ', data )
      if (status === kakao.maps.services.Status.OK) {
          let bounds = new kakao.maps.LatLngBounds();
          for (let i=0; i<data.length; i++) {
              displayMarker(data[i]);    
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }       
        map.setBounds(bounds);
        setPlaceId(data[0].id)
      } 
  }
  console.log('placeId', placeId)
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
   
   isTrafficBtn ? map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC) : map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
   isloadBtn ? map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW) : map.removeOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);    
   isBicycleBtn ? map.addOverlayMapTypeId(kakao.maps.MapTypeId.BICYCLE) : map.removeOverlayMapTypeId(kakao.maps.MapTypeId.BICYCLE);
   
}, [place, isTrafficBtn, isloadBtn, isBicycleBtn]);

  
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleTrafficOption = () => {
    const trafficBtn = document.getElementById('trafficBtn').style;
    setIsTrafficBtn(!isTrafficBtn);
    if (isTrafficBtn) {
      trafficBtn.backgroundColor = 'white'
      trafficBtn.color = 'coral'
    }
    else {
      trafficBtn.backgroundColor = 'coral'
      trafficBtn.color = 'white'
    }
  };

  const handleLoadOption = () => {
    const loadBtn = document.getElementById('loadBtn').style;
    setIsLoadBtn(!isloadBtn);
    if (!isloadBtn) {
      loadBtn.backgroundColor = 'coral'
      loadBtn.color = 'white'
    }
    else {
      loadBtn.backgroundColor = 'white'
      loadBtn.color = 'coral'
    }
  }

  const handleBicycleOption = () => {
    const bicycleBtn = document.getElementById('bicycleBtn').style;
    setIsBicycleBtn(!isBicycleBtn);
    if (!isBicycleBtn) {
      bicycleBtn.backgroundColor = 'coral'
      bicycleBtn.color = 'white'
    }
   else {
      bicycleBtn.backgroundColor = 'white'
      bicycleBtn.color = 'coral'
    }
  }

  return (
    <div class="MyRide">

      {/* search */}
      <StyledInputContainer>
        <form onSubmit={handleSubmit}>
            <div class="InputContainer">
              <input value={inputText} onClick={ () => {setInputText("");}} onChange={searchInputOnChange} id="keyword"  type="text" placeholder="위치 검색하기" />
              <Button id="search" htmlType="submit" icon={<SearchOutlined />}> Search </Button>
            </div>
            <div style={{ display:"flex", alignItems:"center" }}>
              <div className="mapOptionBtn" onClick={showModal} >지도옵션보기<StyledMoreOption/></div>
              <img className="mapContainer" src={require("../../img/kakao_navi.png").default}
                onClick={() => {
                    handleOk();
                    window.open(`https://map.kakao.com/link/to/${placeId}`);
                    }}
                style={{ width: "40px", marginLeft:"15px", 'borderRadius': '8px' }}
              />
            </div>
          </form>
      </StyledInputContainer>
 
      <StyledModal visible={isModalVisible} onCancel={handleOk} footer={null} closable={true} title="지도 타입 변경">
        <Button id="trafficBtn" onClick={handleTrafficOption}>교통정보</Button>
        <Button id="loadBtn" onClick={handleLoadOption}>로드뷰</Button>
        <Button id="bicycleBtn" onClick={handleBicycleOption}>자전거</Button>
      </StyledModal> 
      
      <StyledMapContainer>
        <StyledMap id='map'/>
      </StyledMapContainer> 
    </div>
  );
};

export default MyRide;