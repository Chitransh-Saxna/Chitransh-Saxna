import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader"; // <- path correct hona chahiye
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Marquee from "./components/marquee/Marquee";
import Work from "./components/work/Work";
import MarqueeIcon from "./components/marquee/MarqueeIcon";
import Contect from "./components/contect/Contect";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="font-light min-h-screen w-screen text-white antialiased selection:bg-lime-300 selection:text-black overflow-x-hidden py-10">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <MarqueeIcon />
          <Work />
          <Marquee start="-100%" end="0" />
          <Marquee start="0" end="-100%" />
          <Contect />
        </>
      )}
    </main>
  );
};

export default App;
