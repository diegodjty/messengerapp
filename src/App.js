import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css'
import styled from '@emotion/styled'

import Sidebar from './components/Sidebar';
import Chat from './components/Chat'


const AppContainer = styled.div`
  background-color: #dadbd3;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .app__body{
    display: flex;
    background-color: #ededed;
    margin-top: -50px;
    height: 90vh;
    width: 90vw;
    max-width: 1240px;
    box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.7)
  }

`;


function App() {
  return (
    <AppContainer>
      <div className="app__body">
        <Router>
          <Sidebar />
          <Switch >
            <Route path="/rooms/:roomId" >
                <Chat />
            </Route>
            <Route path="/">
              <h1>hello</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </AppContainer>
  
  );
}

export default App;
