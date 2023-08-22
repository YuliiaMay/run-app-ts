import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}


const NavBarLink = ({page, selectedPage, setSelectedPage}: Props) => {
    const nextPage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage;
    console.log(nextPage);
    
    return (
        <AnchorLink
            className={`${selectedPage === nextPage
                ? "text-primary-500"
                : ""}
                transiti duration-500 hover:text-primary-300 `}
            href={`#${nextPage}`}
            onClick={() => setSelectedPage(nextPage)}
        >
            {page}
        </AnchorLink>
    );
}
 
export default NavBarLink;