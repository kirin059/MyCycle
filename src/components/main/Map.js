import React, { useEffect } from 'react';
import styled from 'styled-components';

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

const Map = ( {myRide} ) => {
    useEffect(() => {
        let infowindow = new kakao.maps.InfoWindow({zIndex:1});
        const container = document.getElementById('map');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3,
		};
        const map = new kakao.maps.Map(container, options);
    	const ps = new kakao.maps.services.Places(); 
        ps.keywordSearch(myRide, placesSearchCB); 

        function placesSearchCB (data, status, pagination) {
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
                map,
                position: new kakao.maps.LatLng(place.y, place.x) 
            });
            
            kakao.maps.event.addListener(marker, 'click', function() {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
            });
        }
    }, [myRide]);

    return (
        <>
            <StyledMapContainer>
                <StyledMap id='map'/>
            </StyledMapContainer> 
        </>
    )
}

export default Map