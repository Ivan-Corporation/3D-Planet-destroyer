import React from 'react';





import { BrowserRouter,  Switch } from "react-router-dom";





import './index.css'
import App from './App';
import AppMars from './components/mars/AppMars';
import "react-tiger-transition/styles/main.min.css";
import { Navigation, Route, Screen, Link, fade, room } from "react-tiger-transition";



export default function Main() {


  return (
    <div style={{height:'101vh'}}>
      <BrowserRouter>


      <Navigation>
      
                <Route  
                exact path="/"
                screen >
                  <Screen >
                <App/>
          </Screen>
        </Route>
        <Route  
                exact path="/mars"
                screen 
        ><AppMars/>
        </Route>
      </Navigation>
      </BrowserRouter>
    </div>
  );
}

