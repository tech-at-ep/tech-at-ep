import { useRouter } from 'next/router';
import { useState } from 'react';
import Jello from 'react-reveal/Jello';

export default function TeamCard({name, bio, linkedin, cursor, image, hobby, email, widthB}) {
    const [toggle, setToggle] = useState(false);
    const router = useRouter();

    // assumes name has components name, bio, linkedin, email
    return (
        (toggle ?
            <Jello className="grow" duration={900}>
                <div className="grow" onClick={() => setToggle(!toggle)} 
                    style={{width: widthB, height: widthB, cursor:cursor, 
                           backgroundSize:"cover", 
                           backgroundImage:`linear-gradient(rgba(0,0,0,0.67),rgba(0,0,0,0.67)), url('`+hobby+`')`,
                           }}>
                        <div style={{filter:"none",fontSize:"35px", color:"white", marginTop:"30%", textAlign:"center"}}><b>{name}</b></div>
                        <div style={{filter:"brightness(200%)", fontSize:"20px", color:"white", padding:"15px", textAlign:"center"}}>{bio}</div>
                        <div style={{fontSize:"20px", color:"white", padding:"10px", textAlign:"center"}}>{linkedin}</div>
                        <div style={{fontSize:"20px", color:"white", padding:"10px", textAlign:"center"}}>{email}</div>

                        {/* <div onClick={() => router.push('/contact')}>
                            <button style={{margin:"auto"}}>
                                <MdEmail />
                            </button>
                        </div> */}
                </div>
            </Jello>
            : 
            <div className="grow" onClick={() => setToggle(!toggle)} 
                style={{color:"black", width: widthB, height: widthB, cursor:cursor, backgroundSize:"cover", backgroundImage:`url('`+image+`')`}}>
            </div>
        )

    )


}