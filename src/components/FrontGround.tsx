import styled from "styled-components";
import { keyframes } from "styled-components"
import { motion } from 'framer-motion/dist/framer-motion'

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


export function FrontGround({ planet_name, planet_info  }: FrontGroundProps) {


    return (
        <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
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


            
        </TopSectionContainer>
        </motion.div>
    );
}
