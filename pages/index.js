import Head from 'next/head'
import PageHeader from "../components/home/PageHeader";
import CourseHighlightCard from "../components/home/CourseHighlightCard";
import Card from "../components/home/Card";
import Navbar from "../components/Navbar";
import Zoom from 'react-reveal/Zoom';

export default function Home() {

    return (
        <div>
            <Navbar/>
            
            <PageHeader heading="Tech @ EP"
                        buttonLabel="Our Work" buttonLink="/"/>

            <div style={{padding:"large"}} className="xlg:-mt-12 mb-50 md:space-y-12">
                {/*Course Highlights*/}
                <Zoom>
                <Card heading="What we're working on">
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

                {/*Our Projects*/}
                <Zoom>
                <Card heading="Our team">
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
    )
}
