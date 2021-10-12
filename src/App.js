import Header from './components/header';
import MainDefault from './components/main/mainDefault';
import MyRide from './components/main/MyRide';
import MyRecord from './components/main/MyRecord';
import Footer from './components/footer';
import styled from 'styled-components';
import './App.css';

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
    <div className="App">
     
      <Header />
      <StyledMainContainer>
        <MainDefault />
        {/* <MyRide path="myride"/>
        <MyRecord path="myrecord" /> */}
      </StyledMainContainer>
      <Footer />
     
    </div>
  );
}

export default App;
