import React, {useState} from 'react'
import logo from './../../assets/images/logo.png'
import style from './SideBar.module.css'

const SideBar = ({handleState}) => {
    const [event, setEvent] = useState(false)
    const [blog, setBlog] = useState(false)
    const [gallery, setGallery] = useState(false)
    const [volunteer, setVolunteer] = useState(false)
    const [team, setTeam] = useState(false)
    const [partner, setPartner] = useState(false)
    
    const handleEvent = () => {
        setBlog(false)
        setVolunteer(false)
        setGallery(false)
        setTeam(false)
        setPartner(false)
        setEvent(true)
    }

    const handleBlog = () => {
        setVolunteer(false)
        setGallery(false)
        setTeam(false)
        setPartner(false)
        setEvent(false)
        setBlog(true)
    }

    const handleGallery = () => {
        setBlog(false)
        setVolunteer(false)
        setGallery(true)
        setTeam(false)
        setPartner(false)
        setEvent(false)
    }

    const handleVolunteer = () => {
        setBlog(false)
        setVolunteer(true)
        setGallery(false)
        setTeam(false)
        setPartner(false)
        setEvent(false)
    }

    const handleTeam = () => {
        setBlog(false)
        setVolunteer(false)
        setGallery(false)
        setTeam(true)
        setPartner(false)
        setEvent(false)
    }

    const handlePartner = () => {
        setBlog(false)
        setVolunteer(false)
        setGallery(false)
        setTeam(false)
        setPartner(true)
        setEvent(false)
    }
  return (
    <div className={style.sideBar}>
        <div className={style.sideBarWrapper}>
            <div className={style.logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={style.sideBarItems}>
                <button onClick={handleEvent} className={!event ?style.sidebarBtn : style.noEvent}>Events</button>
                {
                    event && <div className={style.eventItems}>
                        <button onClick={() => {handleState("all events")}} className={style.sidebarBtn}>All Events</button>
                        <button  onClick={() => {handleState("add event")}} className={style.sidebarBtn}>Add Event</button>
                    </div>
                }

                <button onClick={handleBlog} className={!blog ?style.sidebarBtn : style.noEvent}>Blogs</button>
                {
                    blog && <div className={style.eventItems}>
                        <button className={style.sidebarBtn} onClick={() => {handleState("all blogs")}} >All Blogs</button>
                        <button className={style.sidebarBtn} onClick={() => {handleState("add blog")}}>Add Blog</button>
                    </div>
                }
                <button onClick={handleGallery} className={!gallery ?style.sidebarBtn : style.noEvent}>Gallery</button>
                {
                    gallery && <div className={style.eventItems}>
                        <button className={style.sidebarBtn} onClick={() => {handleState("all galleries")}}>All Gallery</button>
                        <button className={style.sidebarBtn} onClick={() => {handleState("add gallery")}}>Add Gallery</button>
                    </div>
                }
                <button onClick={handleVolunteer} className={!volunteer ?style.sidebarBtn : style.noEvent}>Volunteers</button>
                {
                    volunteer && <div className={style.eventItems}>
                        <button className={style.sidebarBtn} onClick={() => {handleState("all volunteers")}} >All Volunteers</button>
                        <button className={style.sidebarBtn} onClick={() => {handleState("add volunteer")}}>Add Volunteer</button>
                    </div>
                }
                <button onClick={handleTeam} className={!team ?style.sidebarBtn : style.noEvent}>Teams</button>
                {
                    team && <div className={style.eventItems}>
                        <button className={style.sidebarBtn} onClick={() => {handleState("all teams")}}>All Teams</button>
                        <button className={style.sidebarBtn} onClick={() => {handleState("add team")}}>Add a Team</button>
                    </div>
                }
                <button onClick={handlePartner} className={!partner ?style.sidebarBtn : style.noEvent}>Partners</button>
                {
                    partner && <div className={style.eventItems}>
                        <button className={style.sidebarBtn} onClick={() => {handleState("all partners")}}>All Partners</button>
                        <button className={style.sidebarBtn} onClick={() => {handleState("add partner")}}>Add a Partner</button>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar