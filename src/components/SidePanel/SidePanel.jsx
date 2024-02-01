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
    <Container fluid="md" className={`${width > 550 ? 'h-100 px-14 py-12' : 'px-8 py-4'} `} style={{ backgroundColor: "#252424" }}>
      <Row className={`${width > 550 ? 'h-100 flex-column' : ''}  justify-content-between`}>
        <Col className={`${width > 550 ? `align-items-start justify-content-between` : `justify-content-center`} d-flex flex-column`}>
          <Row >
            <Col>
              <SideSubTitle text="Сроки:" />
              <SidePrimaryText text={width > 550 ? "от 10 до 12 дней" : "от 0 дней"} />
            </Col>

          </Row>
          <Row>
            <Col>
              <SideSubTitle text="Стоимость:" />
              <SidePrimaryText text={width > 550 ? "от $3000" : "от $0"} />
            </Col>
          </Row>
        </Col>
        <Col className={`${width > 550 ? 'align-items-end' : 'justify-content-center'} d-flex `}>
          <Button className={`${width > 500 ? 'd-flex align-items-center justify-content-center' : 'px-4 pt-8 '} bg-warning fs-6 border-0`} style={{ width: `${width > 550 ? '100%' : '130px'}`, height: `${width > 550 ? '' : '130px'}`, borderRadius: `${width > 550 ? '30px' : '50%'}` }}>
            Получить консультацию
            <p className={`${width > 500 ? ' align-items-center justify-content-center' : ''} h-100 `}>&rarr;</p>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SidePanel;
