import React, { useState } from "react";
import styles from "./About.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import {
  Container,
  Row,
  Col,
  Accordion
} from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";

const About = () => {
  return (
    <>
      <div className={styles.about} id="Works">
        <Container fluid>
          <Row>
            <Col>
              <div className={styles.title}>
                About
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mx-auto">
              <div className={styles.projects}>
                <Swiper
                  navigation={true}
                  modules={[Navigation]}  
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div>
                      <div className={styles['projects-title']}>Shopee Pte Ltd</div>
                      <div className={styles['projects-role']}>Product Management Intern</div>
                      <hr/>
                      <div className={styles['projects-role']}>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Release of new features for the Campaign Management Tool (CMT)</Accordion.Header>
                          <Accordion.Body>
                            <p style={{ fontSize: "16px", color: "black" }}>The CMT allows local teams to create campaigns (such as 9/9, 11/11 campaigns) for their country so that Sellers will be able to nominate their products to participate in the campaigns. Such features include PPCMT Migration Improvement - introducing new changes log to record actions performed by users on the platform in a single page, real-time update of promo stock to match the current stock for sellers, allow sellers to see all campaigns available, regardless of nomination status</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Product Monitoring Tool for CMT using Data Suite</Accordion.Header>
                          <Accordion.Body>
                            <p style={{ fontSize: "16px", color: "black" }}>A new data tool was introduced in Shopee. Before this tool was launched, PMs had a heavy reliance on the Business Intelligence team to perform A/B testing and performance monitoring of the product. When the metrics were needed by the team, they had to contact the BI in charge for the product to send the reports over, even if a similar request was completed previously. I was resolute to fix the gaps between this inefficiency as I built a monitoring system that can be customised based on the PM's requirements to measure certain metrics and obtain data to measure performance of the product. Working with the BI team, I learnt to pick up the new system and also held training sessions for PMs on how to use the new tool for performance tracking of the product.</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>CMT Mockup on Figma</Accordion.Header>
                          <Accordion.Body>
                          <p style={{ fontSize: "16px", color: "black" }}>Before this project was completed, PMs in the team usually have to manually use word/google slides/preview to present the mockup of the new feature to be implemented on the system when drafting the BRDs and PRDs. This process was inefficient as it is tedious to manually edit the screenshots of the current product to add the new feature without the help of the design team. To streamline the BRD and PRD drafting process, I created a single Figma file with all the pages and component guide so that PMs can easily copy the page needed and add the required buttons/input fields etc. After the internship, I have received feedback that the Figma file makes it easier for PMs to draft the screenshots for new features in the BRDs/PRDs.</p>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className={styles['projects-title']}>SMU Information Systems<br/>Final Year Capstone Project</div>
                      <div className={styles['projects-role']}>Project & Product Manager</div>
                      <hr/>
                      <div className={styles['projects-role']}>
                        <Accordion defaultActiveKey="0">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>Webull Robo Advisor</Accordion.Header>
                            <Accordion.Body>
                            <p style={{ fontSize: "16px", color: "black" }}>Webull is a brokerage firm that offers advanced and intelligent tools and services for investors. As the project and product manager, I was in charge of collecting requirements with the FYP sponsor and communicating with the sponsor to ensure that the team is going on the right track. I was also in charge of overseeing the allocation of tasks and facilitating meetings with the sponsor, FYP supervisor (SMU Professor) and groupmates to ensure that everyone is aligned with the project goals and following the timeline of the project. During meetings, I am also in charge of ensuring that the results produced by the team meets the requirements of the sponsor and to deliver what is expected of the team and project.</p>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className={styles['projects-title']}>Engineering Good Singapore</div>
                      <div className={styles['projects-role']}>Tech for Good Festival Planning Committee<br/>Programmes Coordinator</div>
                      <hr/>
                      <div className={styles['projects-role']}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>Tech for Good Festival 2021</Accordion.Header>
                              <Accordion.Body>
                              <p style={{ fontSize: "16px", color: "black" }}>I am the programmes coordinator for Tech for Good Festival 2021, EngineeringGood’s largest-scaled innovation challenge that impact persons with disabilities and disadvantages communities. I hold an active voice in planning and mentor the teams in workshops to see through the event from initiation to execution. My responsibilities include liaising with stakeholders to coordinate and facilitate workshops to equip teams with engineering skills.</p>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide>
                    <div>
                      <div className={styles['projects-title']}>Eightfour Digital LLP</div>
                      <div className={styles['projects-role']}>Frontend Development Intern</div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className={styles['projects-title']}>Robert Bosch (SEA) Pte Ltd</div>
                      <div className={styles['projects-role']}>Sales Management Intern</div>
                    </div>
                  </SwiperSlide> */}
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default About;
