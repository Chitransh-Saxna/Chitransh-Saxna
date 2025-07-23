import { motion } from "framer-motion"
import { CONTACT, SOCIAL_MEDIA_LINKS } from "../../constants"

const Contect = () => {
    return (
        <section id="contact">
            <div className="mx-auto max-w-6xl">
                <p className="my-10 text-center text-3xl lg:text-8xl">
                    Interested In Working Together?
                </p>
                <p className="p-4 text-center text-xl">{CONTACT.text}</p>
                <p className="my-4 text-center text-2xl font-medium text-lime-300 lg:pb-6 lg:text-5xl">{CONTACT.address}</p>
                <p className="my-4 text-center text-2xl font-medium text-lime-300 lg:pt-6 lg:text-5xl">{CONTACT.email}</p>
                <p className="my-4 text-center text-2xl font-medium text-lime-300 lg:pb-6 lg:text-5xl">{CONTACT.phone}</p>
            </div>
            <motion.div
                className="mt-8 flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`text-white-700 hover:text-${link.color}-700 transition-all`}
                    >
                        {link.icon}
                    </motion.a>
                ))}
            </motion.div>
            <p className="my-8 text-center text-gray-400">&copy; compileTab. All rights reseved.</p>
        </section>
    )
}

export default Contect