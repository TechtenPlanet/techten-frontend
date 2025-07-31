// Import partner logos
import partnerLogo from '../assets/images/logo.png'; // Assuming this is a placeholder partner
import raspberryLogo from '../assets/images/DIGITAL APPROVED RESELLER LOGO_COLOUR.png';
import yabsLogo from '../assets/images/yabs_logo_new_web.png';
import arduinoLogo from '../assets/images/Arduino_logo.jpg';
import suayeLogo from '../assets/images/Suaye_Electronics.png';

const partnersData = {
  intro: "Meet Our Partners",
  partners: [
    { id: "rpi", name: "Raspberry Pi", image: raspberryLogo },
    { id: "arduino", name: "Arduino", image: arduinoLogo },
    { id: "yabs", name: "Yabs Network", image: yabsLogo },
    { id: "suaye", name: "Suaye Electronics", image: suayeLogo },
    { id: "placeholder", name: "Placeholder Partner", image: partnerLogo } 
    // Add more partners as needed
  ]
};

export default partnersData;
