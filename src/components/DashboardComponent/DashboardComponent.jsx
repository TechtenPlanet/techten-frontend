import React, {useState} from 'react'
import SideBar from '../SideBar/SideBar'
import style from './DashboardComponent.module.css'
import DashboardContent from '../DashboardContent/DashboardContent'

const DashboardComponent = () => {
  const [state, setState] = useState("main")

  const handleState = (txt) => {
    setState(txt)
  }
  return (
    <div className={style.dashboardComponent}>
        <SideBar handleState={handleState} />
        <DashboardContent state={state} />
    </div>
  )
}

export default DashboardComponent