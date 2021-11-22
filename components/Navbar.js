export default function Navbar() {
    const links = [{name: "Learn", href: "/"}, {name: "Github", href: "/"}]
    return <div className="p-4 bg-transparent text-white flex justify-between items-center absolute top-0 w-full z-50">
        <h1 className="font-bold text-xl font-display">
            Tech @ EP
        </h1>
        <nav className="flex justify-between space-x-4">
            {links.map(link => <a key={link.name} className="font-semibold" href={link.href}>
                {link.name}
            </a>)}
        </nav>
    </div>
}