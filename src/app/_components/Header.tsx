import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

function Header() {
    const menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },

        {
            id: 2,
            name: 'Explore',
            path: '/explore'
        },

        {
            id: 2,
            name: 'Contact Us',
            path: '/contact'
        },
    ]
    return (<div>
        <div className="flex items-center gap-10 justify-between shadow-sm p-4">
            <Image src='/logo.svg' alt="Logo" width={180} height={80} />
            <ul className="md:flex gap-8 hidden">
                {menu.map((item, index) => (
                    <Link href={item.path}>
                        <li className="hover:text-blue-500 cursor-pointer hover:scale-105 transition-all ease-in-out">
                            {item.name}
                        </li>
                    </Link>
                )
                )}
            </ul>
            <Button>Get Started</Button>
        </div>
    </div>)
}

export default Header