import {
  collection,
  getDocs,
  query,
  where,
  setDoc,
  doc,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import fireStore from "../../firebase/firestore";
import "react-toastify/dist/ReactToastify.css";

export default function SignupForm({ userId }: { userId: string }) {
  const router = useRouter();
  const [nickname, setNickname] = useState<string>("");
  const [role, setRole] = useState<string>("user");
  const [nicknameAvailable, setNicknameAvailable] = useState<boolean | null>(
    null
  );

  const checkNicknameExists = async () => {
    const q = query(
      collection(fireStore, "users"),
      where("nickname", "==", nickname)
    );
    const querySnapshot = await getDocs(q);
    setNicknameAvailable(querySnapshot.empty);
  };

  const handleSignup = async () => {
    if (!nicknameAvailable) {
      toast.warning("닉네임 중복을 확인해주세요.");
      return;
    }

    if (!nicknameAvailable) {
      toast.error("사용 가능한 닉네임을 변경해주세요.");
      return;
    }

    try {
      await setDoc(doc(fireStore, "users", userId), {
        id: userId,
        nickname,
        role,
      });
      toast.success(
        <div>
          회원가입이 완료되었습니다.
          <br />
          메인으로 이동합니다.
        </div>
      );
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      toast.error("회원가입 중 오류가 발생했습니다.");
    }
  };
  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000} />
      <div>
        <p className="">회원가입</p>
        <p>닉네임</p>
        <input
          type="text"
          value={nickname}
          className="border"
          onChange={(e) => setNickname(e.target.value)}
        />
        <button onClick={checkNicknameExists} type="button">
          중복확인
        </button>
        {nicknameAvailable !== null && (
          <p className={nicknameAvailable ? "text-green-500" : "text-red-500"}>
            {nicknameAvailable
              ? "사용 가능한 닉네임입니다."
              : "이미 사용 중인 닉네임입니다."}
          </p>
        )}
        <p>유형</p>
        <div className="flex gap-3">
          <div
            role="button"
            tabIndex={0}
            className={`p-2 border cursor-pointer ${role === "user" ? "bg-gray-600 text-white" : "bg-white text-black"}`}
            onClick={() => setRole("user")}
            onKeyDown={(e) => {
              if (e.key === "Enter") setRole("user");
            }}>
            이용자
          </div>
          <div
            role="button"
            tabIndex={0}
            className={`p-2 border cursor-pointer ${role === "photographer" ? "bg-gray-600 text-white" : "bg-white text-black"}`}
            onClick={() => setRole("photographer")}
            onKeyDown={(e) => {
              if (e.key === "Enter") setRole("photographer");
            }}>
            작가
          </div>
        </div>
        <button type="button" onClick={handleSignup}>
          가입하기
        </button>
      </div>
    </div>
  );
}
