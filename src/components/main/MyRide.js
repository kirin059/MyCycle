/*global kakao */
import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledMapContainer = styled.div`
padding: 10px;
width:600px;
height:500px;
border: 1px solid #0d0d0d;
`;

const StyledMap = styled.div`
width:100%;
height:100%;
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

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

 
  return (
    <div class="MyRide">
      <StyledMapContainer>
        <StyledMap id="map" />
      </StyledMapContainer>
    </div>
  );
};

export default MyRide;