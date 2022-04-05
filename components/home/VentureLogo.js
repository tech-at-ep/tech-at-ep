import { useRouter } from "next/router";

export default function VentureLogo({image, name, timer, interval, link}) {
    const router = useRouter()
    
    // add more functionality like hover over descriptions
    return <div style={{padding:"30px"}}>
        <img onClick={() => router.push(link)} style={{cursor:"pointer", margin:"auto"}}src={image}></img>
        {/* <div className="mt-4" style={{fontSize:"24px",color:"black", fontWeight:"bold"}}>{name}</div> */}
    </div> 

}