import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Hero.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import PrimaryButton from "./PrimaryButton";

export default function Hero() {
    const data = [
        {
            id: 1,
            normal_title: "Chase the new Flavour",
            _title: "The key To ",
            _title2: "Fine dining",
            detail: "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus",
            img: "https://i.ibb.co/tsCK5zT/Hero-img-1.png"
        },
        {
            id: 2,
            normal_title: "Chase the new Flavour",
            _title: "The key To ",
            _title2: "Fine dining",
            detail: "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus",
            img: "https://i.ibb.co/tsCK5zT/Hero-img-1.png"
        },
        {
            id: 3,
            normal_title: "Chase the new Flavour",
            _title: "The key To ",
            _title2: "Fine dining",
            detail: "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus",
            img: "https://i.ibb.co/tsCK5zT/Hero-img-1.png"
        },
        {
            id: 4,
            normal_title: "Chase the new Flavour",
            _title: "The key To ",
            _title2: "Fine dining",
            detail: "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus",
            img: "https://i.ibb.co/tsCK5zT/Hero-img-1.png"
        },
    ]
    return (
        <section className="max-w-7xl mx-auto">
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                autoplay={{
                    delay: 2000,
                }}
                loop={true}
                speed={2000}
                centeredSlides={true}
                roundLengths={true}
                mousewheel={true}
                grabCursor={true}
                navigation={false}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 2,

                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 1,

                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 1,

                    },
                    768: {
                        slidesPerView: 1,

                    },
                    1024: {
                        slidesPerView: 1,

                    },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            > {data.map((value) => <SwiperSlide key={value.id}>
                <section className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 pt-16">
                    <div className="p-5 ">
                        <div className="">
                            <p className="text-white text-2xl font-serif hero-first">{value.normal_title}</p>
                            <img src="https://i.ibb.co/M9whFk7/Frame-17.png" alt="" className="flex flex-row justify-start w-10 pb-2 animate-pulse" />
                        </div>
                        <div className="">
                            <h1 className="lg:text-8xl sm:text-4xl pt-5 pb-5 " style={{ color: "var(--primary-color)" }}>
                                {value._title} <br />
                                {value._title2}
                            </h1>
                            <p className="lg:w-2/3 text-justify pt-5 sm:w-3/3">
                                {value.detail}
                            </p>
                        </div>
                        <button className="bn632-hover bn21">Explore Menu</button>

                    </div>
                    <div className="lg:flex-col sm:flex-col-reverse">
                        <div className="flex flex-row justify-end">
                            <img src={value.img} alt="" className=" w-3/4" />
                        </div>
                    </div>
                </section>
            </SwiperSlide>)}
            </Swiper>
        </section >
    );
}
