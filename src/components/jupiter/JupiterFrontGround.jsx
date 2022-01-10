import React, {useState} from "react";
import styled from "styled-components";
import { keyframes} from "styled-components"

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  
  background-color: rgb(255, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99;
  
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
export function TopSection() {



 
  return (
    <TopSectionContainer>
      <Logo>Jupiter</Logo>
      <Slogan>D♁ (Earth size) - 10,97<br/><u>scale 1 to 4</u><br/>
      Km from the sun - 778 330 257
      </Slogan>
      
     


      <MadeBy>
        <Rotate><a target='_blank' rel="noreferrer" href='https://github.com/Ivan-Corporation/3D-Planet-destroyer' 
        style={{textDecoration:'none', color:'white'}}><img style={{width:'50px', height:'50px'}}
         src='https://www.pnguniverse.com/wp-content/uploads/2020/10/GitHub-logo.png'/></a></Rotate>
      </MadeBy>
      
      
    </TopSectionContainer>
  );
}
