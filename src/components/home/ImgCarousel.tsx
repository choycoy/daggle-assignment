import img1 from "@/assets/imgs/carousel1.png";
import img2 from "@/assets/imgs/carousel2.png";
import img3 from "@/assets/imgs/carousel3.png";
import img4 from "@/assets/imgs/carousel4.png";
import dummyData from "@/mocks/dummyData";

export default function ImgCarousel() {
  const images = [img1, img2, img3, img4];

  return (
    <div className="relative h-[391px] w-full overflow-hidden">
      <div className="animate-slide flex w-max">
        {[...images, ...images].map((src, index) => {
          const { title, description, subtitle, id } = dummyData[index % dummyData.length];
          return (
            <div key={id} className="relative mr-5 h-[391px] w-[319px] shrink-0 cursor-pointer">
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
