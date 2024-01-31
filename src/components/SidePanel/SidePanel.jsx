import Button from 'components/Button/Button';
import SidePrimaryText from './SidePrimaryText';
import SideSubTitle from './SideSubTitle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useScreenSize } from 'components/Button/ScreenSizeTracker';

const SidePanel = () => {
  const { width } = useScreenSize();
  return (
    <Container fluid="md" className='px-8 py-4' style={{ backgroundColor: "#252424" }}>
      <Row className="justify-content-between">
        <Col className='d-flex flex-column  justify-content-center'>
          {/* <div> */}
          <Row >
            <Col>
              <SideSubTitle text="Сроки:" style={{ display: "inline-block" }} />
              <SidePrimaryText text={width > 550 ? "от 10 до 12 дней" : "от 0 дней"} style={{ display: "inline-block" }} />
            </Col>

          </Row>
          <Row>
            <Col>
              <SideSubTitle text="Стоимость:" style={{ display: "inline-block" }} />
              <SidePrimaryText text={width > 550 ? "от $3000" : "от $0"} style={{ display: "inline-block" }} />
            </Col>
          </Row>
          {/* </div> */}
        </Col>
        <Col className='d-flex justify-content-center' >
          <Button className="bg-warning px-4 pt-8 fs-6 border-0" style={{ width: "130px", height: "130px", borderRadius: "50%" }}>
            Получить консультацию
            <p>&rarr;</p>
          </Button>
        </Col>
      </Row>
      {/* <div className="col-12 col-sm-3 h-100 bg-black py-16 d-flex justify-content-center">
        <h2 className="visually-hidden">Side Panel</h2>
        <div className="px-16 d-flex flex-column gap-20">
          <div>
            <SideSubTitle text="Сроки:" />
            <SidePrimaryText text="от 10 до 12 дней" />
          </div>

          <div>
            <SideSubTitle text="Стоимость:" />
            <SidePrimaryText text="от $3000" />
          </div>

          <div>
            <Button className="bg-warning rounded-5 px-4 py-2 fs-6 border-0 w-20-sm h-20-sm">
              Получить консультацию &rarr;
            </Button>
          </div>
        </div>
      </div> */}
    </Container>
  );
};

export default SidePanel;
