"use client"
import { merriweather } from '../font'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeModernIcon, UsersIcon, DocumentDuplicateIcon } from '@heroicons/react/24/solid'; // Solid version
import clsx from 'clsx'
const links = [
    { name: 'Home', href: '/dashboard', icon: HomeModernIcon },
    { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
    { name: 'Customers', href: '/dashboard/customers', icon: UsersIcon }
]

export default function NavLinks() {
    // this will hook the current path as a variable
    const pathName = usePathname();

    return (<>
        {

            links.map(link => {
                const LinkIcon = link.icon;
                return (
                    <Link key={link.name} href={link.href} className={clsx(`${merriweather.className} flex h-[48px] grow items-center justify-center gap-4 rounded-md bg-gray-50 p-4 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 mb-5 `, { 'bg-sky-100 text-blue-600': pathName === link.href })}>

                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>

                    </Link>



                )
            }
            )
        }</>

    )
}