import React from 'react'
import style from './TeamSection.module.css'
import oscarImg from './../../assets/images/Team/Techten team/Yaw_Oscar.JPG'
import lawrenceImg from './../../assets/images/Team/Techten team/Lawrence_Manu.jpg'
import bernardImg from './../../assets/images/Team/Techten team/Bernard_Boaten.jpg'
import derrickImg from './../../assets/images/Team/Techten team/Derrick Edem Sosoo2.jpg'
import billyImg from './../../assets/images/Team/Techten team/Gabriel_Agoh.jpg'



const TeamSection = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Oscar Yaw Asamoah',
            role: 'CEO & Founder',
            quote: '"Creating a future where Ghanaian youth lead through innovation."',
            image: oscarImg
        },
        {
            id: 2,
            name: 'Lawrence K. Manu',
            role: 'Operations Manager & BM',
            quote: '"Every student deserves the opportunity to build and apply knowledge."',
            image: lawrenceImg
        },
        {
            id: 3,
            name: 'Bernard Boateng',
            role: 'Board Member & CTO',
            quote: '"Education is the seed of sustainable development."',
            image: bernardImg
        },

        {
            id: 4,
            name: 'Derrick Edem Sosoo',
            role: 'General Manager',
            quote: '"Teaching hands-on skills that transform societies in the long term."',
            image: derrickImg
        },
        {
            id: 5,
            name: 'Gabriel Agoh',
            role: 'CRO & PR',
            quote: '"No one person can do it all, it calls for partnerships with all stakeholders"',
            image: billyImg
        }
       
    ];

    return (
        <div className={style.teamSection}>
            <h2 className={style.sectionTitle}>Meet the Team</h2>
            <div className={style.teamGrid}>
                {teamMembers.map(member => (
                    <div key={member.id} className={style.teamCard}>
                        <div className={style.imageContainer}>
                            <img src={member.image} alt={member.name} />
                        </div>
                        <div className={style.cardContent}>
                            <h3 className={style.memberName}>{member.name}</h3>
                            <p className={style.memberRole}>{member.role}</p>
                            <p className={style.memberQuote}>{member.quote}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeamSection
