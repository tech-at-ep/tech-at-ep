import Head from 'next/head'
import PageHeader from "../components/home/PageHeader";
import CourseHighlightCard from "../components/home/CourseHighlightCard";
import Card from "../components/home/Card";
import Navbar from "../components/Navbar";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import React, { useState, useRef } from 'react';
import EP from '../assets/eplogo.png'

export default function Home() {

// I need a...
// - favicon logo

    const workRef = useRef();

    function handleScroll() {
        workRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <Navbar/>
            <Fade duration={1500}>
                <PageHeader heading="Tech @ EP"
                            buttonLabel="Our Work" 
                            buttonAction={handleScroll}/>
            </Fade>

            <div style={{zIndex:"-1", padding:"large"}} ref={workRef} className="xlg:-mt-12 mb-50 md:space-y-12">
                <div className="diagonal-box-1">
                {/*Our Projects*/}
                    <div style={{marginTop:"-100px"}} className="inner-diag">
                    <Zoom>
                    <Card  style={{marginTop:"-20px"}} heading="Our Projects">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <CourseHighlightCard title="Bruno Ventures"
                                                description=""/>
                            <CourseHighlightCard title="Venture at Brown"
                                                description=""/>
                            <CourseHighlightCard title="Startups on the Hill"
                                                description=""/>
                        </div>
                    </Card>
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
