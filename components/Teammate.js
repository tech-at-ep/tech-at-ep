import { useRouter } from 'next/router';
import { MdEmail } from 'react-icons/md';
import { useState, useEffect } from 'react';
import Jello from 'react-reveal/Jello';
import RubberBand from 'react-reveal/RubberBand';

export default function TeamCard({name, bio, linkedin, cursor, email, width}) {
    const [toggle, setToggle] = useState(false);
    const router = useRouter();

    // assumes name has components name, bio, linkedin, email
    return (
        (toggle ?
            <Jello className="grow" duration={750}>
                <div className="grow" onClick={() => setToggle(!toggle)} 
                    style={{width: width, height: width, cursor:cursor, backgroundColor:"yellow"}}>
                        <div style={{marginTop:"30%", textAlign:"center"}}><b>{name}</b></div>
                        <div style={{padding:"15px", textAlign:"center"}}>{bio}</div>
                        <div style={{padding:"10px", textAlign:"center"}}>{linkedin}</div>
                        <button style={{margin:"auto"}}>
                            <MdEmail />
                        </button>
                </div>
            </Jello>
            : 
            <div className="grow" onClick={() => setToggle(!toggle)} 
                style={{color:"black", width: width, height: width, cursor:cursor, backgroundColor:"blue"}}>
                </div>
        )

    )


}