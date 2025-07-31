import { PiStudentThin } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import { LiaDonateSolid } from "react-icons/lia";

const homeHeroData = {
  heading: "We're giving young people in Ghana an opportunity to get tangible employable skills in technology and engineering.",
  items: [
    {
      id: "student",
      icon: PiStudentThin, // Pass the component reference
      text: "I'm a Student",
      scrollTarget: "ContactUsContent" // Target ID for react-scroll
    },
    {
      id: "school",
      icon: IoSchoolOutline,
      text: "I'm a School",
      scrollTarget: "ContactUsContent" 
    },
    {
      id: "donor",
      icon: LiaDonateSolid,
      text: "I'm a Donor",
      scrollTarget: "ContactUsContent" 
    }
  ]
};

export default homeHeroData;
