import headerImg from "../assets/img/header-img.svg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useState, useEffect } from "react";

function Banner() {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "web developer", "UI/UX designer", "photographer" ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {

    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => {clearInterval(ticker)}

  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);
    
    if (isDeleting) {
      setDelta(delta => delta / 1.5);
    }

    if (updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  }

  return (
    <section className="banner p-0" id="home">
      <Container className="m-0 p-6">
        <Row className="align-items-center">
          <Col xs={12} md={5} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi! I'm John, a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam.</p>
            <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={7} xl={5} className="mt-4 d-none d-md-block">
            <img src={headerImg} alt="Header Img" className="get-smaller" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;