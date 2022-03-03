import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    const links = [{name: "Our Team", action: () => router.push('/team'), href: ""}, 
                   {name: "Media", action: () => router.push('/media')}, 
                   {name: "Github", action: () => router.push("https://github.com/tech-at-ep")}, 
                   {name: "Contact Us", action: () => router.push("/")}]

    return <div style={{color:"#FF5A5F", paddingBottom:"20px"}} className="p-4 bg-transparent flex justify-between items-center absolute top-0 w-full z-50">
        <a onClick={()=>router.push('/')} style={{cursor: "pointer"}} className="font-bold text-xl font-display">
            Tech @ EP
        </a>
        <nav className="flex justify-between space-x-4">
            {links.map(link => <a key={link.name} className="font-semibold" style={{cursor: "pointer"}} 
                                onClick={link.action}>
                {link.name}
            </a>)}
        </nav>
    </div>
}