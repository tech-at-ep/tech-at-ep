import { useState, useEffect } from 'react';
import TeamCard from "../components/TeamCard.js";
import Navbar from "../components/Navbar";
import Zoom from 'react-reveal/Zoom';

import {teamList} from '../components/TeamList.js'

export default function Team() {
    const [widthB, setWidth] = useState("300px")

    // future: change cursor to icons-per-person?
    const teammates = teamList

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWidth(window.innerWidth/3 + "px")
          }
    }, [])

    // cleanly generate all the people in the relevant places
    const People = ({ people }) => {
        let rows = [];
        if (people === undefined) {
            return <div></div>
        }

        for (var i = 0; i < people.length; i += 3) {
            // if there would be one on the button row
            if (i - people.length == -1){
                rows.push(
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0" >
                    {
                        <div
                        key="k"
                        style={{color:" #252222", width: widthB, height: widthB, backgroundColor:`#252222`}}>
                        </div>
                    }
                    {
                        people.slice(i, i + 3)
                        .map((p, ind) => (
                            <TeamCard key={i + ind} name={p.name} bio={p.bio} hobby={p.hobby} image={p.image} 
                                    linkedin={p.linkedin} cursor={p.cursor} email={p.email} widthB={widthB} />
                       ))
                    }
                    {
                        <div
                        key="j"
                        style={{color:" #252222", width: widthB, height: widthB, backgroundColor:`#252222`}}>
                        </div>
                    }
                    </div>
                )
            } else if (i - people.length == -2) {
                rows.push(
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0" >
                    {
                        people.slice(i, i + 3)
                        .map((p, ind) => (
                            <TeamCard key={i + ind} name={p.name} bio={p.bio} hobby={p.hobby} image={p.image} 
                                    linkedin={p.linkedin} cursor={p.cursor} email={p.email} widthB={widthB} />
                        ))
                    }
                    {
                        <div
                        style={{color:" #252222", width: widthB, height: widthB, backgroundColor:`#252222`}}>
                        </div>
                    }
                    </div>
                )
            } else {
            rows.push(
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0" >
                {
                    people.slice(i, i + 3)
                    .map((p, ind) => (
                        <TeamCard key={i + ind} name={p.name} bio={p.bio} hobby={p.hobby} image={p.image} 
                                linkedin={p.linkedin} cursor={p.cursor} email={p.email} widthB={widthB} />
                    ))
                }
                </div>
                );
            }
            
        }
        return (
            <div>
                {rows}
            </div>
        );
    }

    return <div>
        <Navbar />
        <div style={{paddingTop:"75px"}}>
            <Zoom duration={500}>
                <People people={teammates} />
            </Zoom>
        </div>
    </div>
}