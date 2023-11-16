import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import {AiOutlineDashboard} from "react-icons/ai"

export default function NavElement({icon, title, address}) {
 
  const activeNav = ({isActive})=> {
  return { 
    textDecoration: isActive ? "none" : "none",
    color: isActive ? "#ffffff": "rgb(125,125,125)",
    borderRight: isActive ? `${6}px solid red` : "none"
  }
  }
 
  return (
   
      <NavLink to={address} style={activeNav}>
        <Wrapper>
            <Icon><AiOutlineDashboard/></Icon>
        <Title>{title}</Title>
        </Wrapper>
      
      </NavLink>
 
  )
}

const Icon = styled.div`
  font-size: 28px;
`
const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(40,40,40);
  align-items: center;
  padding: 10px 0;
`
const Title = styled.div`
  margin-left: 10px;
  text-transform: uppercase;
`