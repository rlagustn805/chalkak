import { regionData } from "@/array";
import Logo from "../../public/svgs/logo.svg";

export default function Footer() {
  return (
    <footer className=" bg-gray-200 p-2 flex flex-col gap-5 mx-5 md:mx-20 lg:mx-40">
      <Logo />
      <div className="font-semibold">
        위 서비스는 포트폴리오용으로 이용이 되며,
        <br /> 실제 운영하는 서비스가 아닙니다. <br />
      </div>
      <div className="grid grid-cols-4">
        {regionData.map((r) => (
          <span key={r.id}>{r.content}</span>
        ))}
      </div>
    </footer>
  );
}
