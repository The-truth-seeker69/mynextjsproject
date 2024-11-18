"use client"
import Link from 'next/link'
import NavLinks from './nav-links'
import Logo from '../logo'
export default function sideNav() {


    return (
        <div id="container" className="flex h-screen flex-col w-1/5 p-4 bg-gray-100 ">
            <div className='p-4 ' >
                <Link href='/'>
                    <Logo />
                </Link>
            </div>
            <div >
                <NavLinks />
            </div>
        </div>

    )
}