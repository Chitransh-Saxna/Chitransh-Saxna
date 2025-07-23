import { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { LINKS } from "../../constants"
import { AnimatePresence, motion } from "framer-motion"
import "./Navbar.css"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden"
        else document.body.style.overflow = "auto"
    }, [isOpen])

    const containerVariants = {
        hidden: { opacity: 0, y: "-100%" },
        visible: {
            opacity: 1, y: 0, transition: {
                staggerChildren: 0.1
            }
        }
    }
    
    const linkVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <>
            <nav className="fixed right-0 top-0 z-30 p-4">
                <motion.button
                    onClick={toggleMenu}
                    className="rounded-md p-2"
                    whileHover={{
                        scale: 1.1,
                        rotate: 180,
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                        }
                    }}
                    whileTap={{
                        scale: 0.9,
                        rotate: 90,
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 15
                        }
                    }}
                    animate={{
                        rotate: isOpen ? 180 : 0,
                        transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                        }
                    }}
                >
                    {isOpen ? (
                        <FaTimes className="h-6 w-6" />
                    ) : (<FaBars className="h-6 w-6" />)}
                </motion.button>
            </nav>
            <AnimatePresence>
                {isOpen && <>
                    <motion.div initial="hidden" animate="visible" exit="hidden" variants={containerVariants} className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-black text-white">
                        <ul className="space-y-6 text-3xl">
                            {LINKS.map((link) => (
                                <motion.li variants={linkVariants} key={link.id}>
                                    <a href={`#${link.id}`} onClick={toggleMenu} className="link text-5xl font-semibold uppercase tracking-wide hover:text-lime-300 lg:text-8xl">{link.name}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </>}
            </AnimatePresence>
        </>
    )
}

export default Navbar