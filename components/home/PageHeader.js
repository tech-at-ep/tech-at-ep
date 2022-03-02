import Typed from "react-typed";
import {isMobile} from 'react-device-detect';

/**
 * Represents the page header for the home page
 * @param heading - Large, primary text
 * @param subheading - Smaller, supplementary text
 * @param buttonLabel - the text label of the CTA button
 * @param buttonLink - the link for the CTA
 */
export default function PageHeader({heading, subheading, buttonLabel, buttonLink}) {
// <PageHeader heading="Helping Brown entrepreneurs deliver successful digital solutions."
//  subheading="We develop tools and resources that empower the Brown University 
// entrepreneurship community to do more with technology."

    const typed = [
        `Empowering Brown entrepreneurs.`,
        `Developing tools for ventures.`,
        `Providing resources across campus.`,
        'Providing resources across the country.',
        'Providing resources around the world.',
        `Creating innovative solutions.`,
        `Encouraging alumni interaction.`
      ];

    return <div style={{justifyContent:"center", display:"flex"}} className="min-h-screen min-w-screen">
        <div>
        <h1 style={{color:"#252222", marginTop:"30%", fontSize: isMobile ? "4rem" : "7rem"}}
            className="text-center font-display font-bold">
                {heading}
            </h1>
            <p style={{color: "#252222", marginBottom:"70px", fontSize: isMobile ? "1.3rem" : "1.7rem"}} className="font-semibold text-center font-light">
                <Typed strings={typed} typeSpeed={50} backSpeed={50} backDelay={2200} loop smartBackspace/>
            </p>
            <a href={buttonLink}
                style={{width:"200px", justifyContent:"center", fontSize: isMobile ? "1.3rem" : "1.7rem", padding:"20px", display:"flex", 
                        margin:"auto", backgroundColor:"#FF5A5F", color:"black"}}
                className="hover:opacity-75 p-4 font-semibold rounded-xl">
                {buttonLabel}
            </a>

        </div>
        <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div>
}