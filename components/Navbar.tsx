"use client"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen(isOpen => !isOpen)
    }
  return (
    <>
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            <Image src="/triplink-logo.svg" alt="logo" width={144} height={30} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
                <Link 
                    key={link.key} 
                    href={link.href}
                    className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                >
                    {link.label}
                </Link>
            ))}
        </ul>

        <div className="hidden lg:flexCenter">
            <Button
               type="button"
               title="Login"
               icon="/user.svg"
               variant="btn_dark_green"
            />
        </div>

        {!isOpen ? 
            (<Image 
                src="/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
                onClick={handleOpenMenu}
            />) : (
                <Image 
                    src="/close.svg"
                    alt="close"
                    width={32}
                    height={32}
                    className="inline-block cursor-pointer font-extrabold lg:hidden"
                    onClick={handleOpenMenu}
                />
            )
        }
    </nav>

    {isOpen && 
        <div className="relative flex justify-end lg:hidden">
            <div className="absolute bg-green-900 mr-7 -mt-3.5 z-30 h-45 w-55 rounded-2xl">
                <ul className="inline-block mt-0.35 lg:hidden">
                    {NAV_LINKS.map((link) => (
                        <Link 
                            key={link.key} 
                            href={link.href}
                            className="regular-16 text-gray-200 cursor-pointer border-b flexStart pt-1.25 pb-1.25 ml-5 transition-all hover:font-bold"
                        >
                            <i className={`${link.icon} mr-1.5`}></i> {link.label}
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    }
    </>
  )
}

export default Navbar
