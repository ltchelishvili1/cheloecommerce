import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import logo from "../../assets/123.png";
import sBack from "../../assets/sback.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Img, ImgCont, SwiperCont, Tittle } from "./slider.styles";

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
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <ImgCont style={{ backgroundImage: `url(${sBack})`, }}>
                    <Tittle>Welcome to LSTORE(ad text goes here)</Tittle>
        </ImgCont>
      </SwiperSlide>
      <SwiperSlide>
      <ImgCont style={{ backgroundImage: `url(${logo})`}}>
                    <Tittle>Feel Free To contact me</Tittle>
        </ImgCont>
      </SwiperSlide>

    
    </SwiperCont>
  );
};

export default SliderComponent;
