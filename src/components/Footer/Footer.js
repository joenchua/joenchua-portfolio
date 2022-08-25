import React from "react";
import styles from "./Footer.module.scss";
import {
  Container,
  Image,
} from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className={styles.contact} id="Contact">
        <Container fluid>
          <div className={styles.title}>Contact Me</div>
          <div className={`${styles.logos} w-100`}>
            <div>
              <a href="https://www.linkedin.com/in/chuajoen/" target="_blank" rel="noreferrer" className="mx-2">
                <Image src={require(`../../assets/linkedin-logo.png`)} width="20" />
              </a>
              <a href="mailto:chuajoenx@gmail.com" className="mx-2">
                <Image src={require(`../../assets/email-logo.png`)} width="20" />
              </a>
              <a href="https://t.me/joenchua/" target="_blank" rel="noreferrer" className="mx-2">
                <Image src={require(`../../assets/telegram-logo.png`)} width="20" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer;
