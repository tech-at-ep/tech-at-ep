import PageHeader from "../components/home/PageHeader";

import Navbar from "../components/Navbar";
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from "next/router";

import {isMobile} from 'react-device-detect';
import Swing from 'react-reveal/Swing';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Typed from "react-typed";

import YT from '../assets/utube.png';
import GH from '../assets/github.png';
import BL from '../assets/blog.png';
import grid2 from '../assets/grid.png';
import Whitelogo from "../assets/ctwhite.png"

import EP from '../assets/eplogo.png'
import VentureLogo from '../components/home/VentureLogo';
import BV from '../assets/brunoventures.png';
import SB from '../assets/startup@brown.png';
import SH from '../assets/startupsonhill.png';
import VB from '../assets/ventures@brown.png';

import teamImg from '../assets/arun.png';
import { Router } from 'next/router';

export default function Home() {

    const typed = [
        `Engineering Manager: Aaron Wang`,
        `Sr. Fullstack Engineer: Jacob Frausto`,
        `Sr. Fullstack Engineer: Luke Primis`,
        'Sr. Fullstack Engineer: Nathan Luu',
        'Fullstack Engineer: Arun Kavishwar',
        `Frontend Engineer: Michael Xu`,
        `Frontend Engineer: John Rytel`
      ];

    const router = useRouter();
    const workRef = useRef();

    // This is clunky but works
    const [timer1, setTimer1] = useState(0);
    const [timer2, setTimer2] = useState(0);
    const [timer3, setTimer3] = useState(0);
    const [timer4, setTimer4] = useState(0);

    useEffect(() => {
        let interval
        let i = 0
        interval = setInterval(() => {
            let val = timer1 + 1
            let val2 = timer2 + 1
            let val3 = timer3 + 1
            let val4 = timer4 + 1
            // why aren't timers changing multiple times
            if (i == 0) {
                setTimer1(val)
                i += 1
            } else if (i == 1) {
                setTimer2(val2)
                i += 1
            } else if (i == 2) {
                setTimer3(val3)
                i += 1
            } else if (i == 3) {
                setTimer4(val4)
                i += 1
            } else {
                setTimer1(100)
                setTimer2(100)
                setTimer3(100)
                setTimer4(100)
                i = 0
            }

        }, 4000);
        return () => clearInterval(interval);
      }, []);



    function handleScroll() {
        workRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <Navbar blog={false}/>
            <Fade duration={1500}>
                <PageHeader heading="Tech @ EP"
                            buttonLabel="Our Work" 
                            buttonAction={handleScroll}
                            backImg={grid2.src}/>
            </Fade>

            <div style={{zIndex:"-1", backgroundRepeat:"repeat", backgroundImage:`url('`+grid2.src+`')`, padding:"large"}} ref={workRef} className="xlg:-mt-12 mb-50 md:space-y-12">
            <div style={{overflow:"hidden", backgroundRepeat:"", backgroundImage:`url('`+grid2.src+`')`, zIndex:"1", height:"50px", width:"100%"}}>
             <div className="accent-5"></div>
              </div>

                <div className="diagonal-box-1">
                <div className="accent-7" ></div>
                <div className="accent-8"></div>
                {/*Our Projects*/}
                    <div style={{marginTop:"-100px"}} className="white-fun inner-diag">
                    <Zoom>
                        <div style={{color:"#252222", marginBottom:"50px", fontWeight:"bold", marginTop:"-200px", textAlign:"center", fontSize: isMobile ? "2rem" : "4rem"}}>Our Projects</div>
                    <div className="myGallery">
                        <Swing spy={timer1}>
                        <VentureLogo image={SB.src}  interval={0} name="Startups @ Brown" link="https://startupatbrown.com/" style={{marginTop:"-20px"}}/>
                        </Swing>
                        <Swing spy={timer2}>
                        <VentureLogo image={BV.src}  interval={1} name="Bruno Ventures" link="https://brown.edu" style={{minHeight:"100%", marginTop:"-20px"}}/>    
                        </Swing>
                        <Swing spy={timer3}>
                        <VentureLogo image={VB.src}  interval={2} name="Ventures @ Brown" link="https://ventureatbrown.com/" style={{marginTop:"-20px"}}/>                             
                        </Swing>
                        <Swing spy={timer4}>
                        <VentureLogo image={SH.src}  interval={3} name="Startups on the Hill" link="https://startupsonthehill.com/" style={{marginTop:"-20px"}}/>    
                        </Swing>
                    </div>
                    </Zoom>
                    </div>
                </div>

                <div style={{padding:"160px", marginTop:"-120px"}} className="diagonal-box-4">
                {/*Our Team*/}
                    <div style={{marginTop:"150px" , marginLeft:"20%"}} className="inner-diag">
                        <Zoom>
                    <div className="flex justify-between">
                        <div style={{minWidth:"500px", marginLeft:"-190px"}}>
                            <div style={{color:"#f3f4f6", marginBottom:"10px", fontWeight:"bold", marginTop:"-120px", textAlign:"left", fontSize:"50px"}}>Meet the Team</div>
                            <div style={{color:"#f3f4f6", fontSize: "25px"}}>Our program is composed of the sharpest CS students Brown has to offer. Let's make dreams real.</div>
                            <br/>
                            <div style={{paddingRight:"20px", height:"140px", color:"#f3f4f6", fontWeight:"bold", fontSize: "25px"}}>
                                <Typed strings={typed} typeSpeed={40} backSpeed={50} backDelay={2200} loop smartBackspace/>
                            </div>
                            <div style={{padding:"20px", backgroundColor:"#f3f4f6", color:"#252222", 
                                        fontWeight:"bold", fontSize:"24px", textAlign:"center", width:"300px", 
                                        left:0, marginTop:"10px",
                                        borderRadius:"5px", cursor:"pointer"}} onClick={() => router.push('/team')} className="mt-16">Check us Out</div> 

                        </div>

                        <div style={{width:"500px", height:"0px", backgroundColor:"red"}}></div>

                        <img className="team-image" src={teamImg.src} style={{
                            marginTop:"-100px"}} width="420px" height="380px"></img>
   
                        </div>

                        </Zoom>
                    </div>
                </div>

                <div className="diagonal-box-3">
                    {/*Our Media*/}
                    <div className="accent"></div>
                    <div className="accent-2"></div>
                    <div className="accent-3"></div>
                    <div className="accent-4"></div>
                <div style={{marginTop:"-100px"}} className="inner-diag">
                    <Zoom>
                        <h1 style={{zIndex:"3", color:"#252222", marginTop:"-150px", marginBottom:"100px", fontSize: isMobile ? "2rem" : "4rem"}}
                        className="text-center font-display font-bold">
                            Explore our Media
                        </h1>
 
                        <div style={{gap:"125px"}} className="flex">
                        <Pulse spy={timer1}>
                            <div style={{cursor:"pointer"}} onClick={() => router.push('/media')}>
                                <img src={BL.src} width="400px" height="400px"></img>
                            </div>
                        </Pulse>
                        <Pulse spy={timer2}>
                            <div style={{cursor:"pointer"}} onClick={() => router.push('https://www.youtube.com/channel/UCkdT8uGo1mLHV1BIChtrgOw')}>
                                <img src={YT.src} width="400px" height="100px"></img>
                            </div>
                            </Pulse>
                        <Pulse spy={timer3}>
                            <div style={{cursor:"pointer"}} onClick={() => router.push("https://github.com/tech-at-ep")}>
                                <img src={GH.src} width="400px" height="400px"></img>
                            </div>
                            </Pulse>

                        </div>
                    </Zoom>
                    </div>
                </div>

                {/*Contact us*/}
                <div className="diagonal-box-2" style={{marginTop:"-20px", marginBottom:"50px"}}>
                    <div className="inner-diag">
                    <Zoom>
                        <h1 style={{zIndex:"3", color:"#f3f4f6", marginTop:"-25px", marginBottom:"20px", fontSize: isMobile ? "2rem" : "4rem"}}
                        className="text-center font-display font-bold">
                            Contact Us
                        </h1>
                        <h1 style={{zIndex:"3", color:"#f3f4f6", marginBottom:"85px", fontSize: isMobile ? "20px" : "25px"}}
                        className="text-center">
                            Have a suggestion? Looking to talk to a team member? Click below to let us know!
                        </h1>
                        <div style={{marginBottom:"0px", cursor:"pointer"}} onClick={() => router.push('/contact')}>
                                <img src={Whitelogo.src} style={{margin:"auto"}} className="spinny" width="250px" height="250px"></img>
                            </div>
                        </Zoom>
                    </div>

                </div>

                {/*Credits*/}
                <div style={{backgroundColor: "#252222", marginTop:"-250px", padding:"10px"}}>
                    <div style={{fontWeight: "bold", display:"grid", gridAutoFlow: "column", gap:"0.2rem"}}>
                        <div >
                            <div style={{ color:"white", marginLeft:"200px", marginBot:"20px", marginTop:"275px"}}>
                            </div>
                            </div>
                        <div>
                            <a href="https://www.brownentrepreneurship.com/">
                                <img style={{margin:"auto", marginRight: "200px", marginTop:"170px", marginBot:"30px", zIndex:"2"}} src={EP.src} width="150px" height="300px"></img>
                            </a>
                        </div>
                    </div>
                </div>

            </div> 
            


        </div>
    )
}
