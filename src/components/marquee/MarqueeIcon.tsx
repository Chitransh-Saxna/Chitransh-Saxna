
import { motion } from "framer-motion"
import { MARQUEE_ICON } from "../../constants"

const MarqueeIcon = () => {
    return (
        <div className=" w-full bg-transparent lg:py-6 mt-10">
            <div className="flex bg-transparent overflow-hidden whitespace-nowrap">
                {[...Array(1)].map((_, i) => (
                    <motion.h1
                        initial={{ x: "0" }}
                        animate={{ x: "-100%" }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 7 }}
                        key={i}
                        className="py-2 text-3xl font-bold leading-none tracking-tighter lg:text-7xl flex gap-10"
                    >
                        {MARQUEE_ICON}
                    </motion.h1>
                ))}
            </div>
        </div>
    )
}

export default MarqueeIcon