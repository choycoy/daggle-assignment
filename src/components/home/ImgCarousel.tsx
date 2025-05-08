import { CAROUSEL_DATA } from "@/constant";
import useImgCarousel from "@/hooks/home/useImgCarousel";

export default function ImgCarousel() {
  const { sliderRef, totalImages } = useImgCarousel();

  return (
    <div className="relative h-[391px] w-full overflow-hidden">
      <div ref={sliderRef} className="flex w-max">
        {totalImages.map((src, index) => {
          const { title, description, subtitle } = CAROUSEL_DATA[index % CAROUSEL_DATA.length];
          return (
            <div key={index} className="relative mr-5 h-[391px] w-[319px] shrink-0 cursor-pointer">
              <img src={src} alt={title} className="h-full w-full rounded-[20px]" fetchPriority="high" />
              <p className="absolute top-6 left-6 w-[calc(100%-48px)] text-2xl leading-[1.6] font-bold tracking-[-0.072px] break-keep text-white">
                {title}
              </p>
              <div className="absolute bottom-6 left-6 w-[calc(100%-48px)] leading-[24px] tracking-[-0.048px] text-white">
                <hr className="text-line mb-4" />
                <p className="mb-2 line-clamp-2">{description}</p>
                <p className="font-bold">{subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
