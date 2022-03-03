import { useState, useEffect } from 'react';
import Teammate from "../components/Teammate.js";
import Navbar from "../components/Navbar";
import Zoom from 'react-reveal/Zoom';

export default function Team() {
    const [width, setWidth] = useState("300px")

    const teammates = [
        {
            name: 'Arun',
            bio: 'Loves Mock Trial',
            linkedin: 'https://www.linkedin.com/in/akav/',
            cursor: 'pointer'
         },
         {
            name: 'Raffa',
            bio: 'Loves Mock Trial',
            linkedin: 'https://www.linkedin.com/in/aka/',
            cursor: 'pointer'
         },
         {
            name: 'Michael',
            bio: 'Loves Mock Trial',
            linkedin: 'https://www.linkedin.com/in/kav/',
            cursor: 'pointer'
         },
         {
            name: 'Fiona',
            bio: 'Loves Mock Trial',
            linkedin: 'https://www.linkedin.com/in/av/',
            cursor: 'pointer'
         }
    ]

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWidth(window.innerWidth/3 + "px")
          }
    }, [])


    // cleanly generate all the people in the relevant places
    const People = ({ people }) => {
        let rows = [];

        for (var i = 0; i < people.length; i += 3) {
            rows.push(
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0" >
              {
                people.slice(i, i + 3)
                  .map(p => (
                    <Teammate name={p.name} bio={p.bio} linkedin={p.linkedin} cursor={p.cursor} width={width} />
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