import TextInput from './TextInput';
import ChekedLabel from './ChekedLabel';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { useScreenSize } from 'components/Button/ScreenSizeTracker';
import SubTitle from './SubTitle';

const SecondStep = () => {

  const { width } = useScreenSize();
  return (
    <Col>
      <Stack gap={10}>
        <h2>Рассчитать стоимость ремонта квартиры за 1 минуту</h2>

        <div>
          <SubTitle>{width > 550 ? 'Выберете удобный формат консультации' : "Как с вами связаться?"}</SubTitle>

          <Stack gap={2}>
            <ChekedLabel
              text={width > 550 ? "Вайбер" : "Пришлите мне в Viber"}
              htmlFor=""
              type="checkbox"
              name=""
              id=""
            />

            <ChekedLabel text="Проконсультируйте по телефону" htmlFor="" type="checkbox" name="" id="" />

            <ChekedLabel
              text="Видеозвонок/встреча в офисе"
              htmlFor=""
              type="checkbox"
              name=""
              id=""
            />
          </Stack>
        </div>
        <Stack gap={3}>
          <TextInput type="text" placeholder="Ведите имя" name="name" id="name" />
          <TextInput
            type="text"
            placeholder="Ведите телефон"
            name="tel"
            id="tel"
          />
          <TextInput
            type="text"
            placeholder="Коментарий"
            name="comment"
            id="comment"
          />
        </Stack>
      </Stack>
    </Col>

  );
};

export default SecondStep;
