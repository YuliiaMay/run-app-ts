import { SelectedPage } from "@/shared/types";
import NavBarLink from "./NavBarLink";


type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}


export const NavBarList = ({selectedPage, setSelectedPage}: Props) => {
    return ( 
        <>
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
        </>
    );
}

export default NavBarList;