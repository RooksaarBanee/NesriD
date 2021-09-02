import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';

import '../../assets/css/home/home.css'

import 'swiper/swiper-bundle.css';

import logo from '../../assets/img/Logo.PNG'
import logo2 from '../../assets/img/Image_created_with_a_mobile_phone.png'
import logo3 from '../../assets/img/istockphoto-830728226-170667a.jpg'

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

function HomeContainer() {

  return (
    <div>      
        <div className="home-slider-1 home-section-slide">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}

                centeredSlides={true}

                navigation
                pagination={{ clickable: true }}
              
                grabCursor={true}

                effect="coverflow"
                coverflowEffect={{
                    rotate: 10,
                    stretch: 1,
                    depth: 1,
                    modifier: 5,
                    slideShadows: false,
                }}
            >
                <SwiperSlide  key="slide-1"><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide  key="slide-2"><img src={logo2} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide  key="slide-3"><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide  key="slide-4"><img src={logo3} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide  key="slide-5"><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
            </Swiper>
        </div>
        <div className="home-slider-2 home-section-slide">
            <p>Produits vedette</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}

                centeredSlides={true}

                navigation
              
                grabCursor={true}

                initialSlide={1}

            >
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo2} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo3} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
            </Swiper>
        </div>

        <div className="home-slider-2 home-section-slide">
            <p>Gros Électro Ménager</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}

                centeredSlides={true}

                navigation
              
                grabCursor={true}

                initialSlide={1}

            >
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo2} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo3} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
            </Swiper>
        </div>

        <div className="home-slider-2 home-section-slide">
            <p>Petit Électro Ménager</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}

                centeredSlides={true}

                navigation
              
                grabCursor={true}

                initialSlide={1}

            >
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo2} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo3} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
            </Swiper>
        </div>

        <div className="home-slider-2 home-section-slide">
            <p>Multimédia & Communication</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}

                centeredSlides={true}

                navigation
              
                grabCursor={true}

                initialSlide={1}

            >
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo2} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo3} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
            </Swiper>
        </div>

        <div className="home-slider-2 home-section-slide">
            <p>Image & Son</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}

                centeredSlides={true}

                navigation
              
                grabCursor={true}

                initialSlide={1}                
            >
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo2} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo3} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
            </Swiper>
        </div>

        <div className="home-slider-2 home-section-slide">
            <p>Bricolage & Jardin</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}

                centeredSlides={true}

                navigation
              
                grabCursor={true}

                initialSlide={1}

            >
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo2} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo3} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
            </Swiper>
        </div>

        <div className="home-slider-2 home-section-slide">
            <p>Collectivé & Hotel - CHR</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}

                centeredSlides={true}

                navigation
              
                grabCursor={true}

                initialSlide={1}

            >
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo2} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo3} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
            </Swiper>
        </div>

        <div className="home-slider-2 home-section-slide">
            <p>Camping & Loisirs</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}

                centeredSlides={true}

                navigation
              
                grabCursor={true}

                initialSlide={1}
                
            >
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo2} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo3} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
            </Swiper>
        </div>

        <div className="home-slider-2 home-section-slide">
            <p>Meubles</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}

                centeredSlides={true}

                navigation
              
                grabCursor={true}

                initialSlide={1}

            >
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo2} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo3} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
            </Swiper>
        </div>

        <div className="home-slider-2 home-section-slide">
            <p>Produits neufs Déclassés</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}

                centeredSlides={true}

                navigation
              
                grabCursor={true}

                initialSlide={1}

                
            >
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo2} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo3} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
                <SwiperSlide ><img src={logo} alt="logo-nesri" width="80%" height="80%"></img></SwiperSlide>
            </Swiper>
        </div>
    </div>
  );
}

export default HomeContainer;