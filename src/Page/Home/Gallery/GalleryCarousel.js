
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

export default function GalleryCarousel() {
    return (
        <section className="">
            <Swiper
                effect={"coverflow"}
                autoplay={{
                    delay: 1000,
                }}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <a href="instagram">
                        <img className="w-full h-96" src="https://i.ibb.co/HPLLBTw/Group-89.png" alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="instagram">
                        <img className="w-full h-96" src="https://i.ibb.co/HPLLBTw/Group-89.png" alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="instagram">
                        <img className="w-full h-96" src="https://i.ibb.co/HPLLBTw/Group-89.png" alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="instagram">
                        <img className="w-full h-96" src="https://i.ibb.co/HPLLBTw/Group-89.png" alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="instagram">
                        <img className="w-full h-96" src="https://i.ibb.co/HPLLBTw/Group-89.png" alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="instagram">
                        <img className="w-full h-96" src="https://i.ibb.co/HPLLBTw/Group-89.png" alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="instagram">
                        <img className="w-full h-96" src="https://i.ibb.co/HPLLBTw/Group-89.png" alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="instagram">
                        <img className="w-full h-96" src="https://i.ibb.co/HPLLBTw/Group-89.png" alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/">
                        <img className="w-full h-96" src="https://i.ibb.co/HPLLBTw/Group-89.png" alt="" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
