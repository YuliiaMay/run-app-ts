import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import HomePageImg from "@/assets/images/home-img.png"
import Sponsors from "./Sponsors";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}


export const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1280px)")
    return (
        <section id="home" className="bg-gray-20 pt-30 md:h-full md:pb-0">
            <motion.div
                className="mx-auto w-5/6 items-center justify-center mt-36 md:flex md:h-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >   
                <div className="z-10  md:basis-3/5">
                    <motion.div
                        className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}                    
                    >
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                                <div className="mb-16">
                                    <h1 className="uppercase font-orbitron text-6xl text-secondary-500 mb-4">evorun...</h1>
                                    <h2 className="font-orbitron text-2xl mb-16" >as a lifestyle</h2>
                                    <div className="text-lg">
                                        <p>Weekly runs, Full Circles, local races, long runs, running events.</p>
                                        <p>Keep up with all things EVORUN as we continue to grow our community ​and honor our commitment to wellness and recovery.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        className="mt-8 flex items-center gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                        }}                    
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className="text-lg font-bold hover:text-primary-500"
                            onClick={() => setSelectedPage(SelectedPage.OurClasses)}
                            href={`#${SelectedPage.OurClasses}`}                        
                        >
                            Learn More
                        </AnchorLink>
                    </motion.div>
                </div>
                
                <div>
                    <img src={HomePageImg} alt="home-page-img" />
                </div>
            </motion.div>

            {isAboveMediumScreens && <Sponsors/>}
        </section>
    );
}

export default Home;