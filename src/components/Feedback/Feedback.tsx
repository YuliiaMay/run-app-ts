import Title from "@/shared/Title";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsImg from "@/assets/images/ContactUs.jpg"


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}


export const Feedback = ({setSelectedPage}: Props) => {
    return (
        <section id="contactus" className="mx-auto min-h-full w-5/6 py-8">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}                    
                >
                    <Title>join now</Title>
                    <p className="my-8">Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.</p>
                </motion.div>


                <div>
                    <img src={ContactUsImg} alt="" />
                </div>
            </motion.div>
        </section>

    );
}

export default Feedback;