import React from "react";
// import Container from "react-bootstrap/Container";
import { Typewriter } from "react-simple-typewriter";
import {
  Container,
  Row,
  Col,
  Image,
  Button
} from "react-bootstrap";
import styles from "./Home.module.scss";
import header from "../../assets/feed1-3.png";


const Home = () => {
  return (
    <>
      <div className={`${styles.home}`} id="Home">
        <Container fluid>
        {/* <Container fluid style={{ height: "calc(100vh - 120px)", padding: "8rem 0"}}> */}
          <Row>
            <Col lg={6}>
              <div className={styles.hero}>
                <div className={`${styles.title}`}>
                  hello! i'm joen
                </div>
                <div className={styles.desc}>
                  I like to <nbsp/>
                  <span>
                    <Typewriter
                      loop
                      cursor
                      cursorStyle="|"
                      textSpeed={70}
                      deleteSpeed={70}
                      delaySpeed={1000}
                      words={["draw", "design", "code"]}
                    />
                  </span>
                  {/* I like to <span>draw</span>, <span>design</span> and <span>build</span> things. */}
                </div>
                <div className={styles.text}>
                  I am an aspiring frontend developer and PM based in Singapore with experience in delivering end-to-end UI/UX software products.
                </div>
                <Button className={styles['contact-button']} variant="outline-dark"><a href="mailto:chuajoenx@gmail.com">Contact Me</a></Button>
              </div>
            </Col>
            <Col lg={{ span: 5, offset: 1 }}>
              <div>
                <Image src={header} fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Home;
