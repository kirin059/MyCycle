import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import MainDefault from './components/main/mainDefault';
import MyRide from './components/main/MyRide';
import MyRecord from './components/main/MyRecord';
import Community from './components/main/Community';
import Footer from './components/footer';
import styled from 'styled-components';
import './App.css';
import Login from './components/main/Login';
import Signup from './components/main/Signup';

const StyledMainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1020px;
  height: 100vh;
  background-color: #F4F9F5; 
`;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <StyledMainContainer>
          <Switch>  
              <Route exact path="/" component={MainDefault} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />  
              <Route path="/myride" component={MyRide} />         
              <Route path="/myrecord" component={MyRecord} />           
              <Route path="/community" component={Community} />
          </Switch>
        </StyledMainContainer>
        <Footer /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
