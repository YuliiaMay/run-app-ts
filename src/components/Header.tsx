// import { useState } from "react";
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
// import Logo from "../assets/logo.png"

// type Props = {}

const Header = () => {
    const flexBetween = "flex items-center justify-between";

    return (
        <header>
            <nav>
                <div
                    className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
                >
                    <div className={`${flexBetween} mx-auto w-5/6`}>
                        <div className={`${flexBetween} w-full gap-16`}>
                            <span className="font-orbitron text-5xl text-primary-500" 
                            >
                                RunTeam
                            </span>
                        </div>
                    </div>
                    NavBar
                </div>
            </nav>
        </header>

    );
}

export default Header;