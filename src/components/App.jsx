import Form from './Form/Form';
import HeroImg from './HeroImg/HeroImg';
import SidePanel from './SidePanel/SidePanel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const App = () => {
  return (
    <div
      className="app"
      style={{
        // fontFamily: 'MonoCase'
        // height: '100vh',
        // width: '100%',
        // display: 'flex',
        // fontSize: 40,
        // color: '#010101',
      }}
    >
      <Container>
        <Row>
          <Col md={2} className='p-0'><HeroImg /></Col>
          <Col md={7} className='p-0'><Form /></Col>
          <Col md={3} className='p-0'><SidePanel /></Col>
        </Row>
      </Container>
    </div>
  );
};
