import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import MicroModal from 'micromodal';
import { basePortfolio, projectsPortfolio } from '../constants';

const Slider = ({origin, direction=false, delay=2000, perview=1, base}) => {
    return (
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={50}
          slidesPerView={perview}
          loop={true}
          autoplay={{ delay: delay, reverseDirection: direction }}
          navigation={true}
          pagination={{ dynamicBullets: true }}
          className='container grid'
        >
            {origin === projectsPortfolio ? 
                origin.map((element) => (
                    <SwiperSlide key={element.id}>
                        <div className={`${base}__container container`}>
                            <div className={`${base}__container-img`}>
                                <img src={element.img} alt="" />
                            </div>
                            <div className={`${base}__container-links`}>
                                <h1 className={`${base}__title`}>{element.title}</h1>
                                <div className={`${base}__icons`}>
                                    <a href={element.demo} target='_blank' rel="noreferrer" className={`${base}__icon`}><i className="uil uil-external-link-alt"></i>{basePortfolio.demo}</a>
                                    <a href={element.link} target='_blank' rel="noreferrer" className={`${base}__icon`}><i className="uil uil-github-alt"></i>{basePortfolio.repository}</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>   
                ))
            : (
                origin.map((element) => (
                    <SwiperSlide key={element.id}>
                        <div className={`${base}__container container`}>
                            <div className={`${base}__container-img`}>
                                <img src={element.link.document} alt="" />
                            </div>
                            <div className={`${base}__container-links`}>    
                                <div>
                                    <div className={`${base}__head`}>
                                        <h1 className={`${base}__title`}>{element.platform}</h1>
                                        <img src={element.img} alt="" />
                                    </div>
                                    <p className={`${base}__subtitle`}>{element.course}</p>
                                </div>
                                <div className={`${base}__icons`}>
                                    <a href={element.link.document} target='_blank' rel="noreferrer"
                                    className={`${base}__icon`}><i className="uil uil-eye"></i></a>
                                    <a href={element.link.web} target='_blank' rel="noreferrer" className={`${base}__icon`}><i className="uil uil-external-link-alt"></i></a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>   
                ))
            )}
        </Swiper>
    );
}

export default Slider