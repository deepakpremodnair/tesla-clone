import React, { useState } from 'react'
import styled from 'styled-components'
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {

	const [MenuStatus, setMenuStatus] = useState(false); 
	const cars = useSelector(selectCars)

  return (
    <Container>
	
      <a href='/'>
		<img src = '/images/logo.svg' alt='' />
	  </a>
	  <Menu>

		{cars && cars.map((car, index) =>(

			<a key = {index} href="#" >{car}</a>
		)
		)}
		<a href='#'>Solar Roof</a>
		<a href='#'>Solar Panel</a>
		
	  </Menu>
	  <RMenu>
		<a href='#'>Shop</a>
		<a href='#'>Account</a>
		<CustomMenu onClick={()=> setMenuStatus(true)}>Menu</CustomMenu>
	  </RMenu>

	  <MenuNav show = {MenuStatus}>

		<CancelWrapper>
		<CancelButton src = '/images/cancel.svg' onClick={()=> setMenuStatus(false)}/>
		</CancelWrapper>
		
		<li><a href='#'>Existing Inventory</a></li>
		<li><a href='#'>Used Inventory</a></li>
		<li><a href='#'>Trade-In</a></li>
		<li><a href='#'>Demo Drive</a></li>
		<li><a href='#'>Cybertruck</a></li>
		<li><a href='#'>Roadster</a></li>
		<li><a href='#'>Semi</a></li>
		<li><a href='#'>Charging</a></li>
		<li><a href='#'>Powerwall</a></li>
		<li><a href='#'>Commercial Energy</a></li>
		<li><a href='#'>Utilities</a></li>
		<li><a href='#'>Find Us</a></li>
		<li><a href='#'>Support</a></li>
	  </MenuNav>
    </Container>
  )
}

export default Header


const Container = styled.div`
	min-height: 60px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	top: 0;
	left: 0;
    right: 0;
	z-index:1;
`
const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
    flex: 1;

	a{
		font-size: 16px;
		font-weight: bold;
		padding: 0 20px;
		flex-wrap: nowrap;
		&:hover {background-color: rgba(177, 168, 167, 0.8);
				border-radius: 7px}
		
	}
	@media (max-width: 1020px) {
		display: none;
	}
`

const RMenu = styled.div`
	display: flex;
	align-items: center;
	a{
		font-size: 16px;
		font-weight: bold;
		margin-right: 10px;
		padding: 0 10px;

		&:hover {background-color: rgba(177, 168, 167, 0.8);
				border-radius: 7px}
			
	}
`
const CustomMenu = styled.div`
	display: flex;
	flex-direction: row;
	cursor: pointer;
	font-size: 16px;
	font-weight: bold;
	padding: 0 10px;
	&:hover {background-color: rgba(177, 168, 167, 0.8);
			border-radius: 7px}

`


const MenuNav = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	background: white;
	z-index: 100;
	list-style: none;
	padding: 50px;
	display: flex;
	flex-direction: column;
	text-align: start;
	transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
	transition: transform 0.5s ease-in-out;

	li{
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, .2);
	}

	a{
		font-size: 16px;
		font-weight: bold;
	}
`

const CancelButton = styled.img`
    height: 17px;
	cursor: pointer;
`
const CancelWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`