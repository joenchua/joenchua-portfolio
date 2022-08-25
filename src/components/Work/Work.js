import React from "react";
import styles from "./Work.module.scss";
import {
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";

const Works = () => {
  const array = ["works-pepper", "works-sutrix", "works-dicapella", "works-webull", "works-smuscape"];

  const images = array.map(image => {
      return <Image key={image} src={require(`../../assets/${image}.png`)} className={`img-fluid pb-4`} width="800" fluid />
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
            <Col lg={8} className="mx-auto">
              <div className={styles.works}>
                {images}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Works;
