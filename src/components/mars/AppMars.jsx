import React, {useState} from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Mars } from "./Mars";
import { TopSection } from "./MarsFrontGround";
import { DestroyedMars} from "./DestroyedMars";
import "react-tiger-transition/styles/main.min.css";
import { Navigation, Route, Screen, Link, fade, room } from "react-tiger-transition";



// inject glide styles


room({
  name: 'cube-left',
  direction: 'left'
});
room({
  name: 'cube-right',
  direction: 'right'
});



const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #1756dd32;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99;
`;
const DonateButton = styled.button`
  outline: none;
  border: none;
  background-color: #d60606;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 43em;
  width: 250px;
  height: 50px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;
  z-index: 199;

  &:hover {
    background-color: transparent;
    border: 2px solid #d60606;
  }
`;


const ArrowUp = styled.button`
  outline: none;
  border: none;
  background-color: #d60606;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 1em;
  width: 250px;
  height: 50px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;
  z-index: 199;

  &:hover {
    background-color: transparent;
    border: 2px solid #d60606;
  }
`;

function AppMars() {

  const [destroy, setDestroy] = useState(false)

  const handleDestroy = () => {
    setDestroy(true);
  };



  return (
    <CanvasContainer>
      <TopSectionContainer>
      <TopSection />
      <ArrowUp><Link to='/earth' transition='cube-right'>MARS</Link></ArrowUp>
      <DonateButton onClick={handleDestroy}>Destroy</DonateButton>
      </TopSectionContainer>
      <Canvas>
        <Suspense fallback={null}>
          {!destroy ? <Mars /> : <DestroyedMars/>}
          

          
        </Suspense>
      </Canvas>
    </CanvasContainer>


  );
}

export default AppMars;
