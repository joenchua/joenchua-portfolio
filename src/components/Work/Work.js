import React from "react";
import styles from "./Work.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import {
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import 'swiper/css';
import "swiper/css/pagination";


const Works = () => {
  const array = ["works-pepper", "works-sutrix", "works-dicapella", "works-webull", "works-smuscape"];

  const images = array.map(image => {
      return <SwiperSlide className="p-md-5"><Image key={image} src={require(`../../assets/${image}.png`)} className={`img-fluid pb-4`} width="800" fluid /></SwiperSlide>
  });

  return (
    <>
      <div className={styles.work} id="Works">
        <Container fluid>
          <Row>
            <Col>
              <div className={styles.title}>
                Works
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mx-auto">
              <div className={styles.works}>
                <Swiper
                  spaceBetween={0}
                  pagination={true} 
                  modules={[Pagination]}
                  slidesPerView={1.2}
                  centeredSlides={true}
                  zoom
                >
                  {images}
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Works;
