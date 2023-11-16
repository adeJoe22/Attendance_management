import React from "react";

import {SplitScreen} from "../components/SplitScreen"
import DeskTopSideNav from "../components/navigations/DeskTopSideNav";
import { Outlet } from "react-router-dom";


export const Dashboard = () =>{

  return (
    <SplitScreen leftWidth={1} rightWidth={1}>
     
         <DeskTopSideNav/>
   
  <div>
    
    <Outlet/>
  </div>
   
   </SplitScreen>
  )
}





