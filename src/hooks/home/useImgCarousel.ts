import { useEffect, useRef } from "react";
import img1 from "@/assets/imgs/carousel1.png";
import img2 from "@/assets/imgs/carousel2.png";
import img3 from "@/assets/imgs/carousel3.png";
import img4 from "@/assets/imgs/carousel4.png";

export default function useImgCarousel() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const images = [img1, img2, img3, img4];
  const totalImages = [...images, ...images];

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame: number;
    let x = 0;

    const animate = () => {
      if (slider) {
        x -= 1;
        if (Math.abs(x) >= (319 + 20) * images.length) {
          x = 0;
        }
        slider.style.transform = `translateX(${x}px)`;
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [images.length]);
  return { sliderRef, totalImages };
}
