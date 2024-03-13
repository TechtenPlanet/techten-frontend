import React from 'react'
import SideBar from '../SideBar/SideBar'
import style from './DashboardComponent.module.css'

const DashboardComponent = () => {
  return (
    <div className={style.dashboardComponent}>
        <SideBar />
    </div>
  )
}

export default DashboardComponent