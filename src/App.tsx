import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.css'
import styled from 'styled-components';
import SearchProvider from './contexts/MyProvider';

const App = () => (
  <SearchProvider>
    <BrowserRouter>
      <AppContainer>
        <Routes />
      </AppContainer>
    </BrowserRouter>
  </SearchProvider>
);

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8em;
`;