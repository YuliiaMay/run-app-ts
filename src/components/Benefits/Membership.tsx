import { motion } from "framer-motion";
import MembershipGraphic from "@/assets/images/BenefitsPageGraphic.png"
import Title from "@/shared/Title";
import {
    CheckIcon,
} from "@heroicons/react/24/solid";


export const Membership = () => {
    return ( 
        <motion.div
            className="flex gap-16 justify-around my-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}            
        >
            <div>
                <img className="max-w-sm" src={MembershipGraphic} alt="membership-graphic" />
            </div>
            <div>
                <Title>Included in Your Membership</Title>
                <ul className="mt-10 text-lg">
                    <li className="flex gap-2 mb-2">
                        <CheckIcon className="text-primary-500 w-6"/>
                        Four EAC training sessions per month
                    </li>
                    <li className="flex gap-2 mb-2">
                        <CheckIcon className="text-primary-500 w-6"/>
                        One cross-training studio session per month
                    </li>
                    <li className="flex gap-2 mb-2">
                        <CheckIcon className="text-primary-500 w-6"/>
                        A nation-wide community of training partners and friends
                    </li>
                    <li className="flex gap-2 mb-2">
                        <CheckIcon className="text-primary-500 w-6"/>
                        Post-run “No Shower Happy Hour”</li>
                    <li className="flex gap-2 mb-2">25% off all EAC Gear
                    </li>
                    <li className="flex gap-2">
                        <CheckIcon className="text-primary-500 w-6"/>
                        Custom workout playlists each week
                    </li>
                </ul>
            </div>

        </motion.div>
    );
}

export default Membership;