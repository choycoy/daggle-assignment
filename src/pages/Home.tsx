import ImgCarousel from "@/components/home/ImgCarousel";

export default function Home() {
  return (
    <div className="bg-gray-01 h-full w-full px-[120px] pt-[186px] pb-[100px]">
      <section className="mb-10">
        <h1 className="text-label pb-3 text-center text-lg leading-[1.5] font-bold">다글제작소</h1>
        <h2 className="mb-10 text-center text-[32px] leading-[1.6] font-bold">
          다글제작소의 과제전형에
          <br /> 오신 것을 환영합니다.
        </h2>
        <ImgCarousel />
      </section>
    </div>
  );
}
