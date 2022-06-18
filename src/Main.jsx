import React from 'react';





import { BrowserRouter,  Switch } from "react-router-dom";





import './index.css'
import App from './components/earth/App';
import AppMars from './components/mars/AppMars';
import "react-tiger-transition/styles/main.min.css";
import { Navigation, Route, Screen, Link, fade, room } from "react-tiger-transition";
import AppVenus from './components/venus/AppVenus';
import AppMercury from './components/mercury/AppMercury';
import AppJupiter from './components/jupiter/AppJupiter';
import AppSaturn from './components/saturn/AppSaturn';
import AppUranus from './components/uranus/AppUranus';
import AppNeptune from './components/neptune/AppNeptune';
import AppPluton from './components/pluton/AppPluton';
import AppSun from './components/sun/AppSun';



export default function Main() {


  return (
    <div style={{
      height:'101vh'
      }}>
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
        <Route  
                exact path="/saturn"
                screen 
        ><AppSaturn/>
        </Route>
        <Route  
                exact path="/uranus"
                screen 
        ><AppUranus/>
        </Route>
        <Route  
                exact path="/neptune"
                screen 
        ><AppNeptune/>
        </Route>
        <Route  
                exact path="/pluton"
                screen 
        ><AppPluton/>
        </Route>
        <Route  
                exact path="/sun"
                screen 
        ><AppSun/>
        </Route>
      </Navigation>
      </BrowserRouter>
    </div>
  );
}

