import { useEffect, useRef } from "react";
import img1 from "../../../public/imgs/carousel1.png";
import img2 from "../../../public/imgs/carousel2.png";
import img3 from "../../../public/imgs/carousel3.png";
import img4 from "../../../public/imgs/carousel4.png";

export default function useImgCarousel() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  const images = [img1, img2, img3, img4];
  const totalImages = [...images, ...images];

  useEffect(() => {
    const slider = sliderRef.current;

    const animate = () => {
      if (slider) {
        xRef.current -= 1;
        if (Math.abs(xRef.current) >= (319 + 20) * images.length) {
          xRef.current = 0;
        }
        slider.style.transform = `translateX(${xRef.current}px)`;
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    if (slider) animate();

    const handleMouseEnter = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };

    const handleMouseLeave = () => {
      if (!animationFrameRef.current) animate();
    };

    if (slider) {
      slider.addEventListener("mouseenter", handleMouseEnter);
      slider.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (slider) {
        slider.removeEventListener("mouseenter", handleMouseEnter);
        slider.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [images.length]);

  return { sliderRef, totalImages };
}
