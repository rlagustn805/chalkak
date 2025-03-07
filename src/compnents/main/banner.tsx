"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { bannerData } from "../../array";

export default function Banner() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);
  return (
    <div className="rounded-2xl overflow-hidden">
      <Swiper
        loop // 슬라이드 루프
        spaceBetween={0} // 슬라이스 사이 간격
        slidesPerView={1} // 보여질 슬라이스 수
        navigation // prev, next button
        autoplay={{
          delay: 3500,
          disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
        }}
        pagination={{ clickable: true }}>
        {bannerData.map((b) => (
          <SwiperSlide key={b.id}>
            <div className="h-[500px] brightness-75">
              <Image
                src={b.src}
                alt="배너이미지"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <span
              className="text-white text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                 text-center whitespace-pre-line w-full px-4">
              {b.content}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
