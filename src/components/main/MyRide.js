/*global kakao */
import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledMapContainer = styled.div`
    width:800px;
    height:700px;
    border: 1px solid #A5D6A7;
    border-radius: 8px;
`;

const StyledMap = styled.div`
  width:100%;
  height:100%;
`;

const StyledInputContainer = styled.div`
  margin:3% auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    margin-right:5px;
  }
  div >p {
    margin-right: 10px;
  }
  div >input {
      padding: 2px 11px;
      width: 300px;
     height: 30px;
     border: none;
     border-radius: 8px;
     box-shadow: 3px 3px 3px 3px #E1E2E1;
   }
   div >input:focus {
    outline:none;
   }
   div >span {
     margin-right:5px;
   }
`;

const MyRide = () => {
  useEffect(() => {
    createMap();
  }, [])

  const createMap = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
      level: 7,
    };

    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
      37.62197524055062,
      127.16017523675508
    );

    // 마커 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

 
  return (
    <div class="MyRide">
      <StyledInputContainer>
        <div>
        <p>출발지</p> <input type="text" />
        </div>
        <div>
        <p>도착지</p> <input type="text" />
        </div>
      </StyledInputContainer>
      <StyledMapContainer>
        <StyledMap id="map" />
      </StyledMapContainer>
    </div>
  );
};

export default MyRide;