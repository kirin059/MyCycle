/*global kakao */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
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

const MyRide = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const searchInputOnChange = (e) => {
    setInputText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  }; 

  return (
    <div class="MyRide">

      {/* search */}
      <StyledInputContainer>
        <form onSubmit={handleSubmit}>
            <div class="InputContainer">
              <input value={ inputText } onChange={searchInputOnChange} id="keyword"  type="text" placeholder="위치 검색하기" />
              <Button id="search" htmlType="submit"  icon={<SearchOutlined />}> Search </Button>  
            </div>
            
          </form>
      </StyledInputContainer>
            
      <Map myRide={place, optionBtnToggle} />
     

    </div>
  );
};

export default MyRide;