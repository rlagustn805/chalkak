import Banner from "@/compnents/main/banner";
import Region from "@/compnents/main/region";

export default function Home() {
  return (
    <div className="mt-4">
      <Banner />
      <div className="mt-4 text-center">
        <b className="text-[1.3rem]">사진 한 장이 전하는 수천 가지 이야기.</b>
        <br />
        찰칵은 여행 중에도 인생샷을 남길 수 있도록 도와주는
        <br /> 사진 촬영 매칭 서비스입니다.
        <br />
        혼자 여행할 때도, 특별한 날에도, 찰칵과 함께하세요!
      </div>
      <Region />
    </div>
  );
}
