import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import logo from "../../assets/123.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Img, ImgCont, SwiperCont } from "./slider.styles";

const SliderComponent = () => {
  return (
    <SwiperCont
      spaceBetween={10}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <ImgCont style={{ backgroundImage: `url(${logo})`}}>
                    <span>ssfdgfdxz</span>
        </ImgCont>
        <ImgCont style={{ backgroundImage: `url(${logo})`}}>
                    <span>se</span>
        </ImgCont>
      </SwiperSlide>

    
    </SwiperCont>
  );
};

export default SliderComponent;
