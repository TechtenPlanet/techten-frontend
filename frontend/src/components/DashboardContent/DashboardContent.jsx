import React from 'react'
import style from './DashboardContent.module.css'
import AllEvents from '../AllEvents/AllEvents'
import AddEvent from '../AddEvent/AddEvent'
import AllBlogs from '../AllBlogs/AllBlogs'
import AddBlog from '../AddBlog/AddBlog'
import AllGallery from './../AllGallery/AllGallery'
import AddGallery from './../AddGallery/AddGallery'
import AllVolunteers from '../AllVolunteers/AllVolunteers'
import AddVolunteer from '../AddVolunteer/AddVolunteer'
import AllTeams from '../AllTeams/AllTeams'
import AddTeam from '../AddTeam/AddTeam'
import AllPartners from '../AllPartners/AllPartners'
import AddPartner from '../AddPartner/AddPartner'
import DashboardMain from '../DashboardMain/DashboardMain'

const DashboardContent = ({state}) => {
    const content = () => {
        switch (state) {
            case "all events":
                return <AllEvents />;
            case "add event":
                return <AddEvent />
            case "all blogs":
                return <AllBlogs />
            case "add blog":
                return <AddBlog />
            case "all galleries":
                return <AllGallery />
            case "add gallery":
                return <AddGallery />
            case "all volunteers":
                return <AllVolunteers />
            case "add volunteer":
                return <AddVolunteer />
            case "all teams":
                return <AllTeams />
            case "add team":
                return <AddTeam />
            case "all partners":
                return <AllPartners />
            case "add partner":
                return <AddPartner />
            default:
                return <DashboardMain />
                break;
        }
    }
  return (
    <div className={style.dashboardContent}>
        <div className={style.dashboardContentWrapper}>
            {content()}
        </div>
    </div>
  )
}



export default DashboardContent