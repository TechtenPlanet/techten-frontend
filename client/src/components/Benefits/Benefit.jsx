import React from 'react'
import style from './Benefit.module.css'
import image from './../../assets/images/img.jpg'
import image2 from './../../assets/images/Girl-learning-coding-at-Techten-Ghana.jpeg'
import image3 from './../../assets/images/techten-ghana-robotics-classes.jpeg'
import image4 from './../../assets/images/scratchcoding-at-techtenplanet.jpeg'

const Benefit = () => {
  return (
    <div className={style.miniTile}>
         <h2 className={style.header}>Your Benefits</h2>
        <div className={style.miniWrapper}>
            <div className={style.card}>
                <h4 className={style.cardHeading}>Learning and Growth</h4>
                <p className={style.cardBrief}>From coding in languages like React Native, 
                JavaScript, TypeScript, and Python to mastering GitHub for collaborative development, 
                diving into DevOps tools such as Jenkins and Fastlane, and exploring the vast world 
                of cloud services with Flask.</p>
                <img className={style.cardImg}
                    alt="Card image cap"
                    bottom
                    src={image4}
                >
                </img>
            </div>

            <div className={style.card}>
                <h4 className={style.cardHeading}>Exploring Embedded Engineering</h4>
                <p className={style.cardBrief}>Delve into the world of electronics and electrical engineering, 
                gaining valuable experience with NodeMCU, Fritzing, kiCad, and Raspberry Pi, Arduino and SBC's.
                Understanding the intricacies of HTTP, MQTT, NATS and TCP/IP will add layers to your engineering knowledge. 
                These protocols are the backbone of modern communication, and you will be fascinated to work with them hands-on.
                We provide you with a thrilling blend of software and hardware that pushed you to new heights.
                </p>
                <img className={style.cardImg}
                    alt="Card image cap"
                    bottom
                    src={image2}
                >
                </img>
            </div>
            
            <div className={style.card}>
                <h4 className={style.cardHeading}> Projects that Make a Difference</h4>
                <p className={style.cardBrief}>From crafting a home automation app to enhancing Raspberry Pi's, 
                Pi-Top Robot with object detection capabilities and remote video feed control via a React Native app 
                – every project is a testament to learning collaboration, teamwork and innovation.</p>

                <img className={style.cardImg}
                    alt="Card image cap"
                    bottom
                    src={image3}
                >   
                </img>
            </div>
        </div>
    </div>
    

    
  )
}



export default Benefit