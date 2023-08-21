// import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
// import Logo from "../assets/logo.png"

import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import NavBarLink from "./NavBarLink";

type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}

const Header = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

    return (
        <header className={`${navbarBackground} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} gap-16 mx-auto w-5/6`}>
                <span className="font-logo text-3xl text-primary-500">
                    RunTeam
                </span>  
                {
                    isAboveMediumScreen
                        ? (
                            <nav>
                                <NavBarLink
                                    page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}                                    
                                />
                                <NavBarLink
                                    page="Benefits"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}                                    
                                />
                                <NavBarLink
                                    page="Our Classes"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}                                    
                                />      
                                <NavBarLink
                                    page="Contact Us"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}                                    
                                />                                
                            </nav>
                        ) : (
                            <button>
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )
                }               
            </div>

        </header>

    );
}

export default Header;