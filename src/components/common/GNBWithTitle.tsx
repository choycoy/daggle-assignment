import chevronLeft from "@/assets/icons/chevron-left-gray09.svg";
import { useNavigate } from "react-router-dom";

export default function GNBWithTitle({
  title,
  handleClick,
  btnText,
  extraCondition,
}: {
  title: string;
  handleClick: () => void;
  btnText: string;
  extraCondition: boolean | undefined;
}) {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 z-50 flex h-14 w-full items-center justify-between bg-white p-4">
      <div className="flex items-center gap-x-1">
        <button onClick={() => navigate(-1)} aria-label="뒤로가기">
          <img src={chevronLeft} alt="뒤로가기 아이콘" className="h-6 w-6" />
        </button>
        <h1 className="leading-[24px] font-bold tracking-[-0.048px]">{title}</h1>
      </div>
      <button className="tracking-[-0.048px leading-[24px] font-bold" onClick={handleClick} disabled={extraCondition}>
        {btnText}
      </button>
    </header>
  );
}
