import { AiOutlinePlayCircle } from "react-icons/ai";

export const VideoArea = () => {
    return (
        <section className="video_area mt-24 ">
            <section class="showcase">
                <img src="https://i.ibb.co/92bS2FQ/jason-leung-po-I7-Del-Fi-VA-unsplash-1.png" alt="s" />
                <div class="overlay bg-red-400">
                    <h2 className="text-8xl text-black font-bold pb-5">Eyes On </h2>
                    <div class="wrapper">
                        <div class="video-main">
                            <div class="promo-video">
                                <div class="waves-block">
                                    <div class="waves wave-1"></div>
                                    <div class="waves wave-2"></div>
                                    <div class="waves wave-3"></div>
                                </div>
                            </div>
                            <a href="https://www.youtube.com/watch?v=BqI0Q7e4kbk" class="video video-popup mfp-iframe" data-lity>
                                <AiOutlinePlayCircle className="text-5xl p-2"></AiOutlinePlayCircle>
                            </a>
                        </div>
                    </div>
                    <p className="text-5xl text-black font-bold pt-5">
                        Our Youtube Chanel
                    </p>
                </div>
            </section>
        </section >
    );
};


