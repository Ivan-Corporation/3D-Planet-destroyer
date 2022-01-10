import React from 'react';





import { BrowserRouter,  Switch } from "react-router-dom";





import './index.css'
import App from './App';
import AppMars from './components/mars/AppMars';
import "react-tiger-transition/styles/main.min.css";
import { Navigation, Route, Screen, Link, fade, room } from "react-tiger-transition";
import AppVenus from './components/venus/AppVenus';
import AppMercury from './components/mercury/AppMercury';
import AppJupiter from './components/jupiter/AppJupiter';



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
        <Route  
                exact path="/venus"
                screen 
        ><AppVenus/>
        </Route>
        <Route  
                exact path="/mercury"
                screen 
        ><AppMercury/>
        </Route>
        <Route  
                exact path="/jupiter"
                screen 
        ><AppJupiter/>
        </Route>
      </Navigation>
      </BrowserRouter>
    </div>
  );
}

