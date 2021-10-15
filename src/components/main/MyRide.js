/*global kakao */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Modal } from 'antd';
import { SearchOutlined, DownCircleFilled } from '@ant-design/icons';
import 'antd/dist/antd.css'
import Map from './Map';

const StyledInputContainer = styled.div`
  margin: 1.5%  0;
  display: flex;
  align-items: center;
  form {
    display: flex;
    justify-content: space-between;
    margin: 0;
    width: 100%;
  }
  .InputContainer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .InputContainer input {              
    padding: 2px 11px;
    margin-right: 10px;
    width: 380px;
    height: 30px;
    border: none;
    border-radius: 5px;
    box-shadow: 3px 3px 3px 3px #E1E2E1;
  }
  .InputContainer input:focus {
    outline:none;
  }
  #search {
     border-radius: 5px;
     box-shadow: 2px 2px 2px 2px #E1E2E1;
  }
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

const MyRide = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const searchInputOnChange = (e) => {
    setInputText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleOk1 = () => {
    setIsModalVisible(false);
   // map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
  };

  const handleOk2 = () => {
    setIsModalVisible(false);
    //map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);
  };

  const handleOk3 = () => {
    setIsModalVisible(false);
    //map.addOverlayMapTypeId(kakao.maps.MapTypeId.BICYCLE);
  };

  return (
    <div class="MyRide">

      {/* search */}
      <StyledInputContainer>
        <form onSubmit={handleSubmit}>
            <div class="InputContainer">
                <input value={ inputText } onChange={searchInputOnChange} id="keyword"  type="text" placeholder="위치 검색하기" />
            <Button id="search" htmlType="submit"  icon={<SearchOutlined />}> Search </Button>  
            {/* <button type="submit">검색</button> */}
            </div>
            <StyledMoreOption onClick={showModal} />  
          </form>
      </StyledInputContainer>
      
      {/* modal */}
      <StyledModal visible={isModalVisible} onCancel={handleOk} footer={null} closable={true} >
        <Button id="trafficBtn" type="primary" onClick={handleOk1}>교통정보</Button>
        <Button id="loadBtn" type="primary" onClick={handleOk2}>로드뷰</Button>
        <Button id="bicycleBtn" type="primary" onClick={handleOk3}>자전거</Button>
        <img src={require("../../img/kakao_navi.png").default}
          onClick={() => {
            handleOk();
            window.open('https://map.kakao.com/link/to/18577297');
            }}
          style={{ width: "30px" }}
        />
      </StyledModal> 
            
      <Map myRide={place} />
     

    </div>
  );
};

export default MyRide;