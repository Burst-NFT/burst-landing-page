import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="Burst picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                {/* <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    `Many of today's DeFi protocols focus on providing markets for transaction and pricing of individual assets or pairs. This can lead to potential bottlenecks or blockers for current DeFi participants or those seeking to venture into the space.`}
                </p> */}
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'We envision an evolving DeFi space that enables participants to create sophisticated crypto-asset backed securities or baskets that allow for greater price exploration and novel strategies.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Burst allows anyone to create a basket of multiple crypto assets represented by an NFT. This basket NFT can be priced and transacted in novel ways outside of normal DeFi swap protocols or exchanges.'}
                </p>
                {/* {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )} */}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
