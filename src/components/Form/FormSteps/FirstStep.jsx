import { useState } from 'react';
import ChekedLabel from './ChekedLabel';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { useScreenSize } from 'components/Button/ScreenSizeTracker';
const FirstStep = () => {
  const { width } = useScreenSize();
  const [rangeMark, setRangeMark] = useState(0);

  const handleChange = e => {
    setRangeMark(e.target.value);
  };
  return (
    <Col>
      <Stack gap={10}>
        <h2>Рассчитать стоимость ремонта квартиры за 1 минуту</h2>
        <div>
          <h3>{width > 550 ? 'Вид ремонта:' : "Выберите тип ремонта"}</h3>
          <Stack gap={2}>
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
          <h3>{width > 550 ? 'Тип недвижимости:' : "Где планируете ремонт?"}</h3>
          <Stack gap={2}>
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
          <h3>Укажите площадь</h3>
          <p style={{ marginLeft: `${rangeMark * 1.78}px` }} className="fs-5 my-0">
            {rangeMark}m2
          </p>
          <input
            className="w-75-sm"
            value={rangeMark}
            onChange={handleChange}
            type="range"
            min="1"
            max="150"
          />
        </div>
      </Stack>
    </Col>

    // <Col>
    //   <Row>
    //     <h2>Рассчитать стоимость ремонта квартиры за 1 минуту</h2>
    //   </Row>
    //   <Row>
    //     <div>
    //       <h3>Вид ремонта:</h3>
    //       <div className="d-flex-sm justify-content-between">
    //         <ChekedLabel
    //           text="Капитальный ремонт"
    //           htmlFor=""
    //           type="checkbox"
    //           name=""
    //           id=""
    //         />

    //         <ChekedLabel
    //           text="Ремонт под ключ"
    //           htmlFor=""
    //           type="checkbox"
    //           name=""
    //           id=""
    //         />
    //         <ChekedLabel
    //           text="Ремoнт премиум-класс"
    //           htmlFor=""
    //           type="checkbox"
    //           name=""
    //           id=""
    //         />
    //       </div>
    //     </div>
    //   </Row>
    //   <Row>
    //     <div>
    //       <h3>Тип недвижимости:</h3>
    //       <div className="d-flex-sm gap-20">
    //         <ChekedLabel
    //           text="Новостройка"
    //           htmlFor=""
    //           type="checkbox"
    //           name=""
    //           id=""
    //         />

    //         <ChekedLabel
    //           text="Вторичка"
    //           htmlFor=""
    //           type="checkbox"
    //           name=""
    //           id=""
    //         />
    //       </div>
    //     </div>
    //   </Row>
    //   <Row>
    //     <div>
    //       <h3>Укажите площадь</h3>
    //       <p style={{ marginLeft: `${rangeMark * 1.78}px` }} className="fs-5 my-0">
    //         {rangeMark}m2
    //       </p>
    //       <input
    //         className="w-75-sm"
    //         value={rangeMark}
    //         onChange={handleChange}
    //         type="range"
    //         min="1"
    //         max="150"
    //       />
    //     </div>
    //   </Row></Col>
    //   <div className="d-flex flex-column gap-20">



    //   </div>

  );
};

export default FirstStep;

