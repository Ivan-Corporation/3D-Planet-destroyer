import React, { useState } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./Earth.jsx";
import { FrontGround } from "../../components/FrontGround";
import { DestroyedEarth } from "./DestroyedEarth";
import "react-tiger-transition/styles/main.min.css";
import { Navigation, Route, Screen, Link, fade, glide } from "react-tiger-transition";
import { keyframes } from "styled-components"
import arrowup from '../../assets/img/arrowup.png'
import arrowbottom from '../../assets/img/arrowbottom.png'
import Loader from '../../Loader'
import '../../assets/styles/camerabutton.css'


// inject glide styles

glide({
    name: 'glide-top',
    direction: 'top',

});
glide({
    name: 'glide-bottom',
    direction: 'bottom',

});



const CanvasContainer = styled.div`
 
  height: 200vh;
`;
const CanvasContainerSmall = styled.div`
 
  height: 100vh;
`;

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 200vh;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 153, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99;
`;

const DestroyButton = styled.button`
position: absolute;

  outline: none;
  border: none;
  background-color: #d60606;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  top: 65%;
  left: 44,5%;
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

const ArrowBottom = styled.div`
  position: absolute;
  font-weight: 700;
  cursor: pointer;
  bottom:0px;
  position:absolute;
  width: 5,2%;
  transition: all 350ms ease-in-out;
  z-index: 199;
  &:hover {
    background-color: transparent;
  }
  @media (max-width: 668px) {
    margin-bottom: 5%;
  }
`;
const ArrowUp = styled.div`
  position: absolute;
  font-weight: 700;
  cursor: pointer;
  transition: all 350ms ease-in-out;
  z-index: 199;
  margin-top: 1em;

  &:hover {
    background-color: transparent;
  }
`;
// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(-2deg);
  }

  to {
    transform: rotate(2deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 5s linear infinite alternate;

 
`;
const HideTopContainer = styled.h3`
  color: #fff;
  position: fixed;
  top: 5px;
  left: 20px;
  z-index: 300;
`;


function AppEarth() {

    const [destroy, setDestroy] = useState(false)

    const handleDestroy = () => {
        setDestroy(true);
    };

    const [containerVisibility, sethideTopContainer] = useState(false)

    const hideTopContainer = () => {
        sethideTopContainer(true);
    };
    const showTopContainer = () => {
        sethideTopContainer(false);
    };


    return (
        <>
            <HideTopContainer>
                {!containerVisibility ?

                    <div onClick={hideTopContainer} className="button" id="button-7">
                        <div id="dub-arrow"><img src="https://pbs.twimg.com/media/FIvlADfXEAAcqk8?format=png&name=small" alt="" /></div>
                        <p>Look at planet</p>
                    </div>

                    :

                    <div onClick={showTopContainer} className="button" id="button-7">
                        <div id="dub-arrow"><img src="https://pbs.twimg.com/media/FIv7mtRXwAIJJCT?format=png&name=large" alt="" /></div>
                        <p>Back</p>
                    </div>
                }
            </HideTopContainer>
            {!containerVisibility ? <TopSectionContainer>

                <FrontGround planet_name={'Earth'} planet_info={`D♁ (Earth size) - 1 \n Km from the sun - 149 599 951`} />



                <p style={{ textAlign: 'center', color: 'white', fontSize: '32px', fontWeight: '700', paddingTop: '70px' }}>Mars ♂</p>
                <ArrowUp>
                    <Link to='/mars' transition='glide-bottom' >
                        <Rotate>
                            <img src={arrowbottom} style={{ width: '100px' }} />
                        </Rotate></Link></ArrowUp>

                {!destroy ? <DestroyButton onClick={handleDestroy}>Destroy</DestroyButton> : ''}

                <p style={{ textAlign: 'center', color: 'white', fontSize: '32px', fontWeight: '700', bottom: '60px', position: 'absolute' }}>Venus ♀</p>
                <ArrowBottom>
                    <Link to='/venus' transition='glide-top' >
                        <Rotate>
                            <img src={arrowup} style={{ width: '100px', }} />
                        </Rotate></Link></ArrowBottom>
            </TopSectionContainer> : ''}

            {!containerVisibility ? <CanvasContainer>
                <Canvas>
                    <Suspense fallback={<Loader />}>

                        {!destroy ? <Earth /> : <DestroyedEarth />}



                    </Suspense>
                </Canvas>
            </CanvasContainer> :
                <CanvasContainerSmall>
                    <Canvas>
                        <Suspense fallback={<Loader />}>
                            {!destroy ? <Earth /> : <DestroyedEarth />}



                        </Suspense>
                    </Canvas>
                </CanvasContainerSmall>
            }

        </>
    );
}

export default AppEarth;