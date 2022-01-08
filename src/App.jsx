import React, {useState} from "react";
import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";
import { TopSection } from "./components/topSection";

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

function App() {

  const [destroy, setDestroy] = useState(false)

  const handleDestroy = () => {
    setDestroy(true);
  };



  return (
    <CanvasContainer>
      <TopSectionContainer>
      <TopSection />
      <DonateButton onClick={handleDestroy}>Destroy</DonateButton>
      </TopSectionContainer>
      <Canvas>
        <Suspense fallback={null}>
          {!destroy ? <Earth /> : ''}
          

          
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
