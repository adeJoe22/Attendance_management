import React from 'react'
import { styled } from 'styled-components'
import NavElement from './NavElement'

export default function DeskTopSideNav() {
  return (
  <Container>
    <Logo></Logo>
    <NavWrapper>
          <NavElement address={"/"} title={"Dashboard"}/>
    <NavElement address={"/attendance"} title={"Attendance"}/>
    <NavElement address={"/batch"} title={"Batch"}/>
    <NavElement address={"/students"} title={"Students"}/>
    </NavWrapper>

  </Container>
  )
}

const Container = styled.div`
  background-color: rgb(30,30,30);
  padding-left: 25px;
  height: 100%;
  width: 220px;
  display: flex;
  flex-direction: column;
`

const Logo = styled.div`
  width: 100%;
  height: 60px;
  background-color: crimson;
`
const NavWrapper = styled.div`
display: flex;
flex-direction: column;
`