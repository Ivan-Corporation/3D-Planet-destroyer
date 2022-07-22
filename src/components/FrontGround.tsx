import styled from "styled-components";
import { keyframes } from "styled-components"
import { motion } from 'framer-motion/dist/framer-motion'
import { StepperNav } from "./VerticalStepper/StepperNav";
import { NavLink } from "react-router-dom";
import '../assets/styles/stepper.css'
import React from "react";


const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99;
  white-space: pre;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 900;
  font-size: 80px;
  padding-top: 23%;
  @media (max-width: 568px) {
    padding-top: 53%;
    font-size: 38px;
  }
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  margin-top: 10px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;

  }
`;



const MadeBy = styled.h3`
  color: #fff;
  position: fixed;
  top: 5px;
  right: 10px;
  transform: translateX(-50%);
`;
const StepperStyle = styled.div`
  
  color: #fff;
  position: fixed;
  margin-top: 11%;
  margin-right: 93.5%;
  z-index:0;
  @media (max-width: 1640px) {
    margin-right: 92%;

  }
  @media (max-width: 1200px) {
    margin-right: 90%;

  }
  @media (max-width: 868px) {
    display:none
  }
`;
// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(-5deg);
  }

  to {
    transform: rotate(5deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 4s linear infinite alternate;

  font-size: 1.2rem;
`;


interface FrontGroundProps {
    planet_name: string,
    planet_info: string,
}



const PlanetsLinks = [
    {
        id: 1,
        planet_link: '/',
        link_name: 'Earth',
        circle_size: '16',
        step_color: "darkblue"
    },
    {
        id: 2,
        planet_link: '/venus',
        link_name: 'Venus',
        circle_size: '16',
        step_color: "darkblue"

    },
    {
        id: 3,
        planet_link: '/mars',
        link_name: 'Mars',
        circle_size: '26',
        step_color: "darkred"

    },
]

export function FrontGround({ planet_name, planet_info }: FrontGroundProps) {



    function clickOnSter() {
        return <a href="/"/>
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 0.5,
            }}
        >
            <TopSectionContainer >

                <Logo>{planet_name}</Logo>
                <Slogan>{planet_info}
                </Slogan>




                <MadeBy>
                    <Rotate><a target='_blank' rel="noreferrer" href='https://github.com/Ivan-Corporation/3D-Planet-destroyer' style={{ textDecoration: 'none', color: 'white' }}><img style={{ width: '50px', height: '50px' }} src='https://www.pnguniverse.com/wp-content/uploads/2020/10/GitHub-logo.png' alt="Github icon" /></a></Rotate>
                </MadeBy>

                <StepperStyle>

                    <StepperNav
                        steps={[
                            {
                                stepContent: () => <div className="stepper_text">Pluton ♇</div>,
                                stepStatusCircleSize: 12,
                                stepStateColor: "black",
                                LinkTo: "/pluton"
                                
                            },
                            {
                                stepContent: () => <div className="stepper_text">Neptune ♆</div>,
                                stepStatusCircleSize: 12,
                                stepStateColor: "darkblue",
                                LinkTo: "/neptune"
                            },
                            {
                                stepContent: () => <div className="stepper_text">Uranus ♅</div>,
                                stepStatusCircleSize: 12,
                                stepStateColor: "lightblue",
                                LinkTo: "/uranus"
                            },
                            {
                                stepContent: () => <div className="stepper_text">Saturn ♄</div>,
                                stepStatusCircleSize: 12,
                                stepStateColor: "#ceb8b8",
                                LinkTo: "/saturn"
                            },
                            {
                                stepContent: () => <div className="stepper_text">Jupiter ♃</div>,
                                stepStatusCircleSize: 12,
                                stepStateColor: "darkorange",
                                LinkTo: "/jupiter"
                            },
                            {
                                stepContent: () => <div className="stepper_text">Mars ♂</div>,
                                stepStatusCircleSize: 12,
                                stepStateColor: "red",
                                LinkTo: "/mars"
                            },
                            {
                                stepContent: () => <div className="stepper_text">Earth ♁</div>,
                                stepStatusCircleSize: 12,
                                stepStateColor: "blue",
                                LinkTo: "/"
                            },
                            {
                                stepContent: () => <div className="stepper_text">Venus ♀</div>,
                                stepStatusCircleSize: 12,
                                stepStateColor: "#d1763d",
                                LinkTo: "/venus"
                            },
                            {
                                stepContent: () => <div className="stepper_text">Mercury ☿</div>,
                                stepStatusCircleSize: 12,
                                stepStateColor: "white",
                                LinkTo: "/mercury"
                            },
                            {
                                stepContent: () => <div className="stepper_text">Sun ☉</div>,
                                stepStatusCircleSize: 12,
                                stepStateColor: "gold",
                                LinkTo: "/sun"
                            }
                        ]}
                    />

                </StepperStyle>

            </TopSectionContainer>
        </motion.div>
    );
}
