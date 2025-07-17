import Link from "next/link"

export default function NavLinks() {
    const links = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Vehicles',
            link: '/vehicles'
        },
        {
            name: 'About Us',
            link: '/about'
        }
    ]

    return (
        <section className="flex text-lg gap-10">
            {links.map((link) => (
                <Link 
                    key={link.name}
                    href={link.link}
                    
                > 
                    {link.name.toUpperCase()}
                </Link>
            ))}
        </section>
    )
}