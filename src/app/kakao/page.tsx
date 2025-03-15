"use client";

import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import fireStore from "../../../firebase/firestore";
import SignupForm from "@/compnents/sign-up-form";

export default function Kakao() {
  const router = useRouter();
  const [newUser, setNewUser] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");

  const getKakaoToken = async (code: string) => {
    try {
      const params = {
        grant_type: "authorization_code",
        client_id: process.env.NEXT_PUBLIC_KAKAO_JS_KEY || "",
        redirect_uri: "http://localhost:3000/kakao",
        code,
      };

      const queryString = new URLSearchParams(params).toString();

      const res = await fetch(
        `https://kauth.kakao.com/oauth/token?${queryString}`,
        { method: "POST" }
      );
      const data = await res.json();
      return data.access_token;
    } catch (e) {
      return null;
    }
  };

  const getKakaoUserId = async (accessToken: string) => {
    try {
      const res = await fetch("https://kapi.kakao.com/v2/user/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      return data.id;
    } catch (e) {
      return null;
    }
  };

  const checkUserExists = async (userId: string) => {
    const userRef = doc(fireStore, "users", userId);
    const userSnap = await getDoc(userRef);

    return userSnap.exists();
  };

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    if (!code) return;

    (async () => {
      const accessToken = await getKakaoToken(code);
      if (!accessToken) return;

      const userId = await getKakaoUserId(accessToken);
      if (!userId) return;

      setUserId(userId.toString());

      const exists = await checkUserExists(userId.toString());

      if (exists) {
        router.push("/");
      } else {
        setNewUser(true);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!newUser) {
    return <p>로그인 중...</p>;
  }

  return <SignupForm userId={userId} />;
}
