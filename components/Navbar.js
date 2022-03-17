import { useRouter } from "next/router";

export default function Navbar({blog}) {
    const router = useRouter();
    const links = [{name: "Our Team", action: () => router.push('/team'), href: ""}, 
                   {name: "Blog", action: () => router.push('/media')},
                   {name: "Youtube", action: () => router.push('https://www.youtube.com/channel/UCkdT8uGo1mLHV1BIChtrgOw')}, 
                   {name: "Github", action: () => router.push("https://github.com/tech-at-ep")}, 
                   {name: "Contact Us", action: () => router.push("/contact")}]

    return <div style={blog ? {color:"#FF5A5F", backgroundColor:"#252222"} : {color:"#FF5A5F"}} className="p-4 bg-transparent flex justify-between  absolute top-0 w-full z-50">
        <a onClick={()=>router.push('/')} style={{cursor: "pointer"}} className="font-bold text-xl font-display">
            Tech @ EP
        </a>
        <nav style={{marginBottom:"5px"}} className="flex justify-between space-x-4">
            {links.map(link => <a key={link.name} className="font-semibold" style={{cursor: "pointer"}} 
                                onClick={link.action}>
                {link.name}
            </a>)}
        </nav>
    </div>
}