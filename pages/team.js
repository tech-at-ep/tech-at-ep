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

    console.log(teammates)


    // cleanly generate all the people in the relevant places
    const People = ({ people }) => {
        let rows = [];
        if (people === undefined) {
            return <div></div>
        }
        console.log(people)

        for (var i = 0; i < people.length; i += 3) {
            rows.push(
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0" >
              {
                people.slice(i, i + 3)
                  .map(p => (
                    <TeamCard name={p.name} bio={p.bio} hobby={p.hobby} image={p.image} 
                              linkedin={p.linkedin} cursor={p.cursor} email={p.email} widthB={widthB} />
                  ))
              }
              </div>
            );
        }
        return (
            <div>
                {rows}
            </div>
        );
    }

    return <div>
        <Navbar />
        <Zoom duration={500}>
            <People people={teammates} />
        </Zoom>
    </div>
}