import GNBWithTitle from "@/components/common/GNBWithTitle";
import usePostForm from "@/hooks/postForm/usePostForm";

export default function PostForm() {
  const { isMobile, handleSubmit, title, content, setInputs, titleMsg, contentMsg, setError, isEdit, isBtnDisabled } =
    usePostForm();

  return (
    <>
      {isMobile && (
        <GNBWithTitle
          title={isEdit ? "게시글 수정" : "게시글 작성"}
          handleClick={handleSubmit}
          btnText={isEdit ? "수정" : "등록"}
          extraCondition={isBtnDisabled}
        />
      )}
      <div className="tab:pb-20 tab:px-0 tab:gap-y-12 flex flex-col items-center px-4">
        <section className="tab:mt-6 tab:mb-20 tab:p-6 tab:rounded-xl tab:border tab:border-gray-03 tab:text-xl w-full bg-white">
          <h1 className="tab:text-xl tab:leading-[32px] tab:block mb-6 hidden font-bold tracking-[-0.06px]">
            {isEdit ? "게시글 수정" : "게시글 작성"}
          </h1>
          <div className="tab:mb-0 flex flex-col">
            <div className="tab:mb-4 mb-3 w-full">
              <label htmlFor="title" className="sr-only">
                제목
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => {
                  setInputs((prev) => ({ ...prev, title: e.target.value }));
                  if (titleMsg) setError((prev) => ({ ...prev, titleMsg: "" }));
                }}
                placeholder="제목을 입력해주세요."
                className={`placeholder:text-assistive w-full rounded-lg px-4 py-3 leading-[24px] tracking-[-0.048px] ${titleMsg ? "border-error border-2" : "border-gray-03 border"}`}
              />
              {titleMsg && <p className="error-msg mt-2 ml-2">{titleMsg}</p>}
            </div>
            <div className="tab:h-[386px] relative h-[322px]">
              <label htmlFor="content" className="sr-only">
                내용
              </label>
              <textarea
                id="content"
                maxLength={300}
                value={content}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (newValue.length <= 300) {
                    setInputs((prev) => ({ ...prev, content: newValue }));
                  }
                  if (contentMsg) setError((prev) => ({ ...prev, contentMsg: "" }));
                }}
                placeholder="내용을 입력해주세요."
                className={`placeholder:text-assistive h-full w-full rounded-lg px-4 pt-4 leading-[24px] tracking-[-0.048px] ${contentMsg ? "border-error border-2" : "border-gray-03 border"}`}
              />
              <p className="text-gray-07 tab:bottom-10 absolute right-0 bottom-4 pr-4 text-right text-xs leading-[16.8px] tracking-[-0.036px]">
                {content.length}/300
              </p>
            </div>
            {contentMsg && <p className="error-msg mt-2 ml-2">{contentMsg}</p>}
          </div>
        </section>
        <button
          className={`black-btn tab:block hidden h-[59px] w-[200px] rounded-xl py-4 text-lg leading-[27px] font-semibold ${isBtnDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
          onClick={handleSubmit}
          disabled={isBtnDisabled}
        >
          {isEdit ? "수정하기" : "등록하기"}
        </button>
      </div>
    </>
  );
}
