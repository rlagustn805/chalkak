"use client";

import { useEffect } from "react";

export default function Kakao() {
  const getResponse = async (code: string) => {
    try {
      const params = {
        grant_type: "authorization_code",
        client_id: process.env.NEXT_PUBLIC_KAKAO_JS_KEY || "",
        REDIRECT_URI: "http://localhost:3000/kakao",
        code: code,
      };

      const queryString = new URLSearchParams(params).toString();

      const response = await fetch(
        `https://kauth.kakao.com/oauth/token?${queryString}`,
        { method: "POST" }
      );
      const { access_token } = await response.json();

      return access_token;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (!code) return;

    getResponse(code);
  }, []);

  return <p>redirect...</p>;
}
