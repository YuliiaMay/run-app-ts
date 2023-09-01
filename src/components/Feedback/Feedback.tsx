import Title from "@/shared/Title";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsImg from "@/assets/images/ContactUsPageImg.webp"
import Form from "./Form";


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}


export const Feedback = ({ setSelectedPage }: Props) => {


    return (
        <section id="contactus" className="mx-auto min-h-full">
            <motion.div
                className="mx-auto w-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                <Title>join now</Title>

                <div className="md:flex gap-12">
                    <motion.div
                        className="md:w-1/2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5}}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}                    
                    >
                        
                        <p className="my-8 text-lg">
                            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                        </p>

                        <Form/>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5}}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: +400 },
                            visible: { opacity: 1, x: 0 },
                        }}                                        
                    >
                        <img src={ContactUsImg} alt="contact-us-img" />
                    </motion.div>                    

                </div>

            </motion.div>
        </section>

    );
}

export default Feedback;