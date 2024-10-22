// import Image from 'next/image'
// import { ModeToggle } from './modetoggle'
// import Link from 'next/link'
// import { SheetDemo } from './sheetDemo'

import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <header>
                <nav className="fixed overflow-hidden z-20 w-full bg-white/80 dark:bg-gray-950/0 dark:shadow-md rounded-b-lg dark:shadow-gray-950/10  border-x dark:border-[--ui-dark-border-color] backdrop-blur-2xl">
                    
                    <div className="px-6 m-auto max-w-6xl 2xl:px-0">
                        <div className="flex flex-wrap items-center justify-between py-2 sm:py-4">
                            <div className="w-full items-center flex justify-between lg:w-auto gap-3">
                                <a href="/" aria-label="kshamlogo">
                                    <img src="/code_collab.webp" alt="" className="w-30 h-10"  />
                                </a>
                                <p className="font-bold text-lg tracking-tighter">CodeCollab.io</p>

                            </div>
                            <div className="w-full h-0 lg:w-fit flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:flex lg:h-fit md:flex-nowrap">
                                <div className="mt-6 text-gray-600 dark:text-gray-300 md:-ml-4 lg:pr-4 lg:mt-0">
                                    <ul className="space-y-6 tracking-wide text-base lg:text-sm lg:flex lg:space-y-0">
                                        <li>
                                            <Link to="/" className="block md:px-4 transition hover:text-primary-600 ">
                                                <span>Home</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/aboutus" className="block md:px-4 transition hover:text-primary-600 ">
                                                <span>About us</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/docs" className="block md:px-4 transition hover:text-primary-600 ">
                                                <span>Docs</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact" className="block md:px-4 transition hover:text-primary-600 ">
                                                <span>Contact us</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header