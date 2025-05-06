import useLoginLogic from "@/hooks/auth/useLoginLogic";

export default function Login() {
  const { id, pwd, setInput, setError, idMsg, pwdMsg, handleKeyDown, handleLogin } = useLoginLogic();

  return (
    <div className="tab:flex tab:items-center tab:justify-center tab:px-0 tab:pt-0 tab: h-[calc(100vh-86px)] w-full px-4 pt-6">
      <section className="login-tab tab:w-[454px] shadow-login w-full bg-white">
        <h1 className="leading-1.6 text-[32px] font-bold tracking-[-0.48px]">
          안녕하세요
          <br />
          <span className="text-primary">한다글다글</span>입니다.
        </h1>
        <p className="text-gray-06 mb-4 leading-[24px] font-semibold tracking-[-0.048px]">
          로그인을 통해 더 많은 기능을 이용하세요
        </p>
        <div>
          <label htmlFor="id" className="sr-only">
            아이디
          </label>
          <input
            id="id"
            type="text"
            className={`input ${idMsg ? "border-error mb-2 border-2" : "mb-3"}`}
            onChange={(e) => {
              setInput((prev) => ({ ...prev, id: e.target.value }));
              if (idMsg) setError((prev) => ({ ...prev, idMsg: "" }));
            }}
            value={id}
            placeholder="아이디를 입력해주세요."
            onKeyDown={handleKeyDown}
          />
          {idMsg && <p className="error-msg mb-3">{idMsg}</p>}
        </div>
        <div>
          <label htmlFor="pwd" className="sr-only">
            비밀번호
          </label>
          <input
            id="pwd"
            type="password"
            className={`input ${pwdMsg ? "border-error mb-2 border-2" : "mb-3"}`}
            onChange={(e) => {
              setInput((prev) => ({ ...prev, pwd: e.target.value }));
              if (pwdMsg) setError((prev) => ({ ...prev, pwdMsg: "" }));
            }}
            value={pwd}
            placeholder="비밀번호를 입력해주세요."
            onKeyDown={handleKeyDown}
          />
          {pwdMsg && <p className="error-msg">{pwdMsg}</p>}
        </div>

        <button onClick={handleLogin} className={`black-btn mt-6 h-[59px] w-full cursor-pointer rounded-xl`}>
          로그인
        </button>
      </section>
    </div>
  );
}
