import Form from './Form/Form';
import HeroImg from './HeroImg/HeroImg';
import SidePanel from './SidePanel/SidePanel';

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
      <HeroImg />
      <Form />
      <SidePanel />
    </div>
  );
};
