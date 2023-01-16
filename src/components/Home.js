import React from 'react'
import styled from "styled-components"
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section 
        title= "Model Y"
        description="Schedule a Demo Drive"
        backgroundImg = 'model-y.jpg'
        lbuttonText = "Buy Now"
        rbuttonText = "Custom Order"/>

      <Section 
        title= "Model 3"
        description="Schedule a Demo Drive"
        backgroundImg = 'model-3.jpg'
        lbuttonText = "Buy Now"
        rbuttonText = "Custom Order"/>

      <Section 
        title= "Model S"
        description="Schedule a Demo Drive"
        backgroundImg = 'model-s.jpg'
        lbuttonText = "Buy Now"
        rbuttonText = "Custom Order"/>
      
      <Section 
        title= "Model X"
        description="Schedule a Demo Drive"
        backgroundImg = 'model-x.jpg'
        lbuttonText = "Buy Now"
        rbuttonText = "Custom Order"/>
      
      <Section 
        title= "Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg = 'solar-panel.jpg'
        lbuttonText = "Order Now"
        rbuttonText = "Learn More"/>
      <Section 
        title= "Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg = 'solar-roof.jpg'
        lbuttonText = "Order Now"
        rbuttonText = "Learn More"/>
      <Section 
        title= "Accessories"
        backgroundImg = 'accessories.jpg'
        lbuttonText = "Shop Now"/>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    overflow-x: hidden;
    
`