import img from '../../assets/img/office.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useScreenSize } from 'components/Button/ScreenSizeTracker';
const HeroImg = () => {
  const { width } = useScreenSize();
  return (
    <Container>
      <Row className='p-0 overflow-hidden' style={{ height: "120px" }}>
        <Col className='p-0'>
          <img className="object-fit-cover" src={img} alt="img" />
        </Col>
      </Row>
    </Container>

  );
};

export default HeroImg;
