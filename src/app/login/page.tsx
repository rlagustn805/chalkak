"use client";

import Image from "next/image";
import Logo from "../../../public/svgs/logo.svg";

function kakaoLogin() {
  window.Kakao.Auth.authorize({
    redirectUri: "http://localhost:3000/kakao",
  });
}

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh]">
      <div className="flex flex-col gap-5 items-center p-8 border border-gray-400 rounded-2xl">
        <strong className="text-2xl">로그인</strong>
        <Logo />
        <button onClick={kakaoLogin} type="button">
          <Image
            src="/images/kakao_login.png"
            alt="Login with Kakao"
            width={200}
            height={10}
            priority
          />
        </button>
      </div>
    </div>
  );
}
