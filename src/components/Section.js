import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

export default function Section(props) {
  const [open, setOpen] = useState(false);
  return (

    
    
    <Wrap bgImg = {props.backgroundImg}>
      

      <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "0px 0px 100px 100px" }}>
                  
        <ItemText>
          <h1>{props.title}</h1>
          <a href='#'>{props.description}</a>
        </ItemText>
      </motion.div>

    
      <Buttons>

      <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "30px 0px 30px 100px" }}>
          <ButtonGroup>
            <LeftButton>
            {props.lbuttonText}
            </LeftButton>

            {props.rbuttonText && 
              <RightButton>
                {props.rbuttonText}
              </RightButton>}
          </ButtonGroup>
        </motion.div>
      
        <DownArrow src = '../../images/down-arrow.svg' />

      </Buttons>
      
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/images/${props.bgImg}")`};
  

  scroll-snap-align: start;

  a{
    font-size: 15px;
  }

  h1{
    font-size: 43px;
    font-weight: medium;
  }
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`


const ButtonGroup=styled.div`
  display:flex;
  margin-bottom: 30px;
  @media (max-width:768px) {
    flex-direction: column;
  }
`

const LeftButton= styled.div`
  background-color: rgba(23,26,32,0.8);
  height:40px;
  width:256px;
  color:white;
  display:flex;
  justify-content: center;
  align-items:center;
  border-radius:100px;
  opacity:0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  cursor: pointer;
  `

const Buttons = styled.div`

`