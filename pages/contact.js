import ContactUs from "../components/ContactUs.js"
import Navbar from "../components/Navbar";
import Fade from 'react-reveal/Fade';

export default function Contact() {
        return(
            <div>
                <Navbar />
                <Fade duration={1500}>
                <ContactUs />
                </Fade>
            </div>
        )
}
