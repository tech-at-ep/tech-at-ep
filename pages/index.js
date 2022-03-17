import Head from 'next/head'
import PageHeader from "../components/home/PageHeader";
import CourseHighlightCard from "../components/home/CourseHighlightCard";
import Card from "../components/home/Card";
import Navbar from "../components/Navbar";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import React, { useState, useRef } from 'react';
import EP from '../assets/eplogo.png'
import Typed from "react-typed";
import { useRouter } from "next/router";

import VentureLogo from '../components/home/VentureLogo'
import BV from '../assets/brunoventures.png'
import SB from '../assets/startup@brown.png'
import SH from '../assets/startupsonhill.png'
import VB from '../assets/ventures@brown.png'

import teamImg from '../assets/arun.png'
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

      const router = useRouter()
// I need a...
// - favicon logo
    const workRef = useRef();

    function handleScroll() {
        workRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <Navbar blog={false}/>
            <Fade duration={1500}>
                <PageHeader heading="Tech @ EP"
                            buttonLabel="Our Work" 
                            buttonAction={handleScroll}/>
            </Fade>

            <div style={{zIndex:"-1", padding:"large"}} ref={workRef} className="xlg:-mt-12 mb-50 md:space-y-12">
                <div className="diagonal-box-1">
                <div className="accent-7" ></div>
                <div className="accent-8"></div>
                {/*Our Projects*/}
                    <div style={{marginTop:"-100px"}} className="inner-diag">
                    <Zoom>
                        <div style={{color:"#FF5A5F", marginBottom:"10px", fontWeight:"bold", marginTop:"-200px", textAlign:"center", fontSize:"50px"}}>Our Projects</div>
                    <div className="myGallery">
                        <VentureLogo image={SB.src} name="Startups @ Brown" link="https://startupatbrown.com/" style={{marginTop:"-20px"}}/>    
                        <VentureLogo image={BV.src} name="Bruno Ventures" link="https://brown.edu" style={{minHeight:"100%", marginTop:"-20px"}}/>    
                        <VentureLogo image={VB.src} name="Ventures @ Brown" link="https://ventureatbrown.com/" style={{marginTop:"-20px"}}/>                             
                        <VentureLogo image={SH.src} name="Startups on the Hill" link="https://startupsonthehill.com/" style={{marginTop:"-20px"}}/>    
                    </div>
                    </Zoom>
                    </div>
                </div>

                <div style={{padding:"180px", marginTop:"-120px"}} className="diagonal-box-4">
                {/*Our ?*/}
                    <div style={{marginTop:"500px" , marginLeft:"20%"}} className="inner-diag">
                        <Zoom>
                    <div className="flex justify-between">
                        <div style={{marginLeft:"-190px"}}>
                            <div style={{color:"#f3f4f6", marginBottom:"10px", fontWeight:"bold", marginTop:"-120px", textAlign:"left", fontSize:"50px"}}>Meet the Team</div>
                            <div style={{color:"#f3f4f6", fontSize: "25px"}}>Our program is composed of the sharpest CS students Brown has to offer. Let's make dreams real.</div>
                            <br/>
                            <div style={{paddingRight:"20px", height:"140px", color:"#f3f4f6", fontWeight:"bold", fontSize: "25px"}}>
                                <Typed strings={typed} typeSpeed={40} backSpeed={50} backDelay={2200} loop smartBackspace/>
                            </div>
                            <div style={{padding:"20px", backgroundColor:"#f3f4f6", color:"#252222", 
                                        fontWeight:"bold", fontSize:"24px", textAlign:"center", width:"300px", 
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
                    <div className="accent"></div>
                    <div className="accent-2"></div>
                    <div className="accent-3"></div>
                    <div className="accent-4"></div>
                {/*Our Team*/}
                    <div style={{marginTop:"-100px"}} className="inner-diag">
                    <Zoom>
                    <Card  style={{marginTop:"-20px"}} heading="Our Team">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <CourseHighlightCard title="Teammate1 Ventures"
                                                description=""/>
                            <CourseHighlightCard title="Teamm2 at Brown"
                                                description=""/>
                            <CourseHighlightCard title="Teamm3 on the Hill"
                                                description=""/>
                        </div>
                    </Card>
                    </Zoom>
                    </div>
                </div>

                {/*Our Media*/}
                <div className="diagonal-box-2" style={{marginTop:"-20px", marginBottom:"50px"}}>
                    <div className="inner-diag">
                    <Zoom>
                        <Card heading="Our Team">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <CourseHighlightCard title="Build a custom web application"
                                                    description="Create a modern, secure, and scalable web app using React and Firebase."/>
                                <CourseHighlightCard title="Build a cross-platform mobile app"
                                                    description="Develop a mobile app that works on Android and iOS using React Native."/>
                                <CourseHighlightCard title="Build a web presence without code"
                                                    description="Create a stunning web presence with business-essential functionality."/>
                            </div>

                            <div className="flex justify-center space-x-2 text-center text-lg items-center text-gray-500 mt-10">
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <p>Not sure what you need?</p>
                                <a className="font-semibold text-blue-600">Take our survey.</a>
                            </div>
                        </Card>
                        </Zoom>
                    </div>

                </div>

                {/*Credits*/}
                <div style={{backgroundColor: "#252222", marginTop:"-250px", padding:"80px"}}>
                    <div style={{fontWeight: "bold", display:"grid", gridAutoFlow: "column", gap:"0.2rem"}}>
                        <div >
                            <div style={{ color:"white", marginTop:"280px"}}>
                            Thank you to the Nelson Center for Entrepreneurship for supporting Brown EP.
                            </div>
                            <div style={{ color:"white"}} className="mt-10">Tech @ EP Website Creation: Arun Kavishwar '23</div>
                            <div style={{ color:"white"}} className="mt-10">Tech @ EP Logo Design: Sumin Chung '23 and Rachael Kim '24</div>
                        </div>
                        <div>
                            <a href="https://www.brownentrepreneurship.com/">
                                <img style={{margin:"auto", marginRight: "70px", marginTop:"250px", zIndex:"2"}} src={EP.src} width="250px" height="500px"></img>
                            </a>
                        </div>
                    </div>
                </div>

            </div> 
            


        </div>
    )
}
