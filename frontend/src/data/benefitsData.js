// Import images used in the Benefit component
import image2 from '../assets/images/Girl-learning-coding-at-Techten-Ghana.jpeg';
import image3 from '../assets/images/techten-ghana-robotics-classes.jpeg';
import image4 from '../assets/images/scratchcoding-at-techtenplanet.jpeg';

const benefitsData = {
  header: "Your Benefits",
  cards: [
    {
      id: "growth",
      title: "Learning and Growth",
      text: "From coding in languages like React Native, JavaScript, TypeScript, and Python to mastering GitHub for collaborative development, diving into DevOps tools such as Jenkins and Fastlane, and exploring the vast world of cloud services with Flask.",
      image: image4,
      alt: "Learning coding" 
    },
    {
      id: "embedded",
      title: "Exploring Embedded Engineering",
      text: "Delve into the world of electronics and electrical engineering, gaining valuable experience with NodeMCU, Fritzing, kiCad, and Raspberry Pi, Arduino and SBC's. Understanding the intricacies of HTTP, MQTT, NATS and TCP/IP will add layers to your engineering knowledge. These protocols are the backbone of modern communication, and you will be fascinated to work with them hands-on. We provide you with a thrilling blend of software and hardware that pushed you to new heights.",
      image: image2,
      alt: "Embedded engineering learning"
    },
    {
      id: "projects",
      title: "Projects that Make a Difference",
      text: "From crafting a home automation app to enhancing Raspberry Pi's, Pi-Top Robot with object detection capabilities and remote video feed control via a React Native app – every project is a testament to learning collaboration, teamwork and innovation.",
      image: image3,
      alt: "Robotics project"
    }
  ]
};

export default benefitsData;
