// Name.tsx
import { useEffect, useState } from "react";
import { NAME_IMAGES as ORIGIN_IMAGES } from "../../constants";

const Name = () => {
  const [images, setImages] = useState(ORIGIN_IMAGES);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

  
      const updatedImages = ORIGIN_IMAGES.map((img, index) => {
        const threshold = 25 * (index + 1); 
        return {
          ...img,
          isActive: currentScroll >= threshold,
        };
      });

      setImages(updatedImages);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <h1
        style={{ fontSize: "12vw" }}
        className="relative max-w-screen-xl overflow-hidden select-none font-semibold uppercase leading-none"
      >
        Chitransh <br /> Saxena
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (img, index) =>
              img.isActive && (
                <img
                  src={img.url}
                  key={index}
                  className="absolute w-56 rounded-lg"
                  style={{
                    top: img.top,
                    left: img.left,
                    transform: `translate(-50%, -50%)`,
                  }}
                  alt={`scroll-img-${index}`}
                />
              )
          )}
        </div>
      </h1>
    </div>
  );
};

export default Name;
