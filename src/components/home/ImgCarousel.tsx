import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "@/assets/imgs/carousel1.png";
import img2 from "@/assets/imgs/carousel2.png";
import img3 from "@/assets/imgs/carousel3.png";
import img4 from "@/assets/imgs/carousel4.png";
import dummyData from "@/mocks/dummyData";

export default function ImgCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    swipe: true,
    draggable: true,
    centerPadding: "28px",
  };
  const images = [img1, img2, img3, img4];

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {images.map((src, index) => {
          const { title, description, subtitle, id } = dummyData[index];
          return (
            <div key={id} className="relative h-full w-full focus:outline-none">
              <img
                src={src}
                alt={`슬라이드 ${index + 1}: ${title}`}
                className="h-[391px] w-[319px] rounded-[20px]"
                loading="lazy"
              />
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
      </Slider>
    </div>
  );
}
