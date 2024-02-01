import { useState } from 'react';
import ChekedLabel from './ChekedLabel';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { useScreenSize } from 'components/Button/ScreenSizeTracker';
import SubTitle from './SubTitle';
const FirstStep = () => {
  const { width } = useScreenSize();
  const [rangeMark, setRangeMark] = useState(0);

  const handleChange = e => {
    setRangeMark(e.target.value);
  };
  return (
    <Col>
      <Stack gap={width > 550 ? 16 : 10}>
        <h2>Рассчитать стоимость ремонта квартиры за 1 минуту</h2>
        <div>
          <SubTitle>
            {width > 550 ? 'Вид ремонта:' : 'Выберите тип ремонта'}
          </SubTitle>
          <Stack
            direction={width > 550 ? 'horizontal' : 'vertical'}
            gap={2}
            style={{ justifyContent: 'space-between' }}
          >
            <ChekedLabel
              text="Капитальный ремонт"
              htmlFor=""
              type="checkbox"
              name=""
              id=""
            />

            <ChekedLabel
              text="Ремонт под ключ"
              htmlFor=""
              type="checkbox"
              name=""
              id=""
            />
            <ChekedLabel
              text="Ремoнт премиум-класс"
              htmlFor=""
              type="checkbox"
              name=""
              id=""
            />
          </Stack>
        </div>

        <div>
          <SubTitle>
            {width > 550 ? 'Тип недвижимости:' : 'Где планируете ремонт?'}
          </SubTitle>
          <Stack
            direction={width > 550 ? 'horizontal' : 'vertical'}
            gap={width > 550 ? '12' : '2'}
          >
            <ChekedLabel
              text="Новостройка"
              htmlFor=""
              type="checkbox"
              name=""
              id=""
            />

            <ChekedLabel
              text="Вторичка"
              htmlFor=""
              type="checkbox"
              name=""
              id=""
            />
          </Stack>
        </div>

        <div>
          <SubTitle>
            {width > 550 ? 'Укажите площадь:' : 'Укажите площадь'}
          </SubTitle>
          <div
            style={{
              marginLeft: '-10px',
            }}
            className={`${width > 550 ? 'w-75' : ''}`}
          >
            <p
              style={{
                fontSize: '0.9rem',
                marginLeft: `${rangeMark / (width > 550 ? 1.6 : 1.7)}%`,
                marginRight: '-20px',
                marginBottom: '-10px',
              }}
            >
              {rangeMark}&nbsp;m2
            </p>
          </div>
          <input
            className={`${width > 550 ? 'w-75' : ''}`}
            value={rangeMark}
            onChange={handleChange}
            type="range"
            min="1"
            max="150"
          />
        </div>
      </Stack>
    </Col>
  );
};

export default FirstStep;
