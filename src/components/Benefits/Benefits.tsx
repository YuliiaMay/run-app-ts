import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import Title from "@/shared/Title";
import { SelectedPage, BenefitType } from "@/shared/types";
import { motion } from "framer-motion";
import BenefitItem from "./BenefitItem";
import Membership from "./Membership";


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description:
        "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
        "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description:
        "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
];


const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}


export const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20" >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}                
                >
                    <Title>more then just running club.</Title>
                    <p className="mt-8 text-lg">When you become a Evorun member, you become part of a global running community that through the power of running is creating a world where everyone benefits from the inspiration, motivation, and confidence that comes from putting one foot in front of the other.</p>
                </motion.div>

                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}                     
                >
                    {benefits.map((benefit: BenefitType) => (
                        <BenefitItem
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}                            
                        />
                    ))}
                </motion.div>

                <Membership/>

            </motion.div>
        </section>
    );
}

export default Benefits;


