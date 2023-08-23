import SponsorSaucony from "@/assets/images/sponsors/Saucony-Logo.wine.svg";
import SponsorAsics from "@/assets/images/sponsors/Asics-Logo.wine.svg";
import SponsorNewBalance from "@/assets/images/sponsors/New_Balance-Logo.wine.svg";
import SponsorUnderArmour from "@/assets/images/sponsors/Under_Armour-Logo.wine.svg";
import SponsorBrooks from "@/assets/images/sponsors/Brooks_Sports-Logo.wine.svg";
import SponsorEverlast from "@/assets/images/sponsors/Everlast_(brand)-Logo.wine.svg";
import SponsorWilson from "@/assets/images/sponsors/Wilson_Sporting_Goods-Logo.wine.svg";


export const Sponsors = () => {
    return (
        <div className="h-[180px] w-full bg-primary-100 py-8">
            <div className="mx-auto w-1000">
                <div className="flex w-3/5 items-center justify-between gap-8 ">
                    <img className="h-32 hover:scale-110 ease-in duration-300" alt="saucony-sponsor" src={SponsorSaucony} />
                    <img className="h-32 hover:scale-110 ease-in duration-300" alt="asics-sponsor" src={SponsorAsics} />
                    <img className="h-32 hover:scale-110 ease-in duration-300" alt="new-balance-sponsor" src={SponsorNewBalance} />
                    <img className="h-32 hover:scale-110 ease-in duration-300" alt="under-armour-sponsor" src={SponsorUnderArmour} />
                    <img className="h-32 hover:scale-110 ease-in duration-300" alt="everlast-sponsor" src={SponsorEverlast} />
                    <img className="h-32 hover:scale-110 ease-in duration-300" alt="wilson-sponsor" src={SponsorWilson} />
                    <img className="h-32 hover:scale-110 ease-in duration-300" alt="brooks-sponsor" src={SponsorBrooks} />
                </div>
            </div>
        </div>        
    );
}

export default Sponsors;