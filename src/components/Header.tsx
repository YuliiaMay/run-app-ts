// import { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid';
// import Logo from "../assets/logo.png"

import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import NavBarLink from "./NavBarLink";
import useToggle from '@/hooks/useToggle';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import NavBarList from './NavBarList';


type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}

const Header = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
    const isAboveMediumScreen = useMediaQuery("(min-width: 1280px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    

    return (
        <header className={`${navbarBackground} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} gap-16 mx-auto w-5/6`}>
                <span className="font-logo text-3xl text-primary-500">
                    RunTeam
                </span>  

                {/* DESCKTOP NAV */}
                { isAboveMediumScreen
                    ? (
                        <nav className="flex gap-24 font-orbitron text-lg">
                            <NavBarList
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage} />                              
                        </nav>
                    ) : (
                        <button
                            className='rounded-full bg-secondary-500 p-2'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="h-6 w-6 text-white" />
                        </button>
                    )
                }

                {/* TABLET + MOBILE NAV */}
                {!isAboveMediumScreen && isMenuToggled
                    &&
                        <MobileMenu
                            onClose={() => setIsMenuToggled(!isMenuToggled)}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />                        
                }
            </div>

        </header>

    );
}

export default Header;