import React from "react";
import Redes from "../components/Redes";
import WebIMG from "../assets/img/webDevelopment.png";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
} from "swiper/core";
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);
import ImgSlide from "../assets/img/slide.png";
import Nav from '../components/Nav';

const Aboutme = () => (
    <section>
        <Helmet>
            <title>Jesus Rodrigo | About me</title>
        </Helmet>
        <Nav/>

        <div className="aboutme wh-max d-flex item-center j-around">
            <div className="aboutme-container aboutme-slider">
                {/* <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    className="mySwiper">
                    <SwiperSlide>
                        <img src={ImgSlide} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ImgSlide} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ImgSlide} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ImgSlide} alt="" />
                    </SwiperSlide>
                </Swiper> */}
                <img src={ImgSlide} alt="" />
            </div>
            <div className="aboutme-container aboutme-info">
                <h2>About me</h2>
                <p>
                    I consider myself a self-taught and responsible person,{" "}
                    <br /> from the age of 16 I began to learn to program in js,
                    from <br /> there I increased my skills learning
                    non-relational database <br /> management, REST API
                    creation. In addition to learning topics <br /> and the
                    management of design software such as Photoshop, <br />{" "}
                    Ilustraitor, Affter Effects etc ... <br /> <br /> I also
                    know how to work as a team, learning from others and <br />{" "}
                    never settle for what I already know.
                </p>
            </div>
        </div>
        <Redes />
    </section>
);

export default Aboutme;
