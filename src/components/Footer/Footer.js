import { Container, Row, Col } from "react-bootstrap";
import "./styles/footer.css";
import logo from "./assets/img/logo.svg";
import linkedin from "./assets/img/linkedin.svg";
import github from "./assets/img/github.svg";
import navIcon3 from "./assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={linkedin} alt="Icon" /></a>
              <a href="#"><img src={github} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}