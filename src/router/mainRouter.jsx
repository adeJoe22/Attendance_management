import {createBrowserRouter} from 'react-router-dom'
import {Dashboard} from '../layout/Dashboard'
import Home from '../pages/Home'
import Attendance from '../pages/Attendance'
import Students from '../pages/Students'
import Batch from '../pages/Batch'

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,   
    children: [
      {
        index: true,
        element: <Home/>
       
      },
      {
        path: "/attendance",
        element: <Attendance/>
      },
      {
        path: "/students",
        element: <Students/>
      },
      {
        path: "/batch",
        element: <Batch/>
      }
    ]
  }
])

export default mainRouter