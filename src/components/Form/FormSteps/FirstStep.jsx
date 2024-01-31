import { useState } from 'react';
import ChekedLabel from './ChekedLabel';

const FirstStep = () => {
  const [rangeMark, setRangeMark] = useState(0);

  const handleChange = e => {
    setRangeMark(e.target.value);
  };
  return (
    <div className="d-flex flex-column gap-20">
      <h2>Рассчитать стоимость ремонта квартиры за 1 минуту</h2>
      <div>
        <h3>Вид ремонта:</h3>

        <div className="d-flex-sm justify-content-between">
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
        </div>
      </div>
      <div>
        <h3>Тип недвижимости:</h3>
        <div className="d-flex-sm gap-20">
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
        </div>
      </div>
      <div>
        <h3>Укажите площадь:</h3>
        <p style={{ marginLeft: `${rangeMark * 1.6}px` }} className="fs-5 my-0">
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
    </div>
  );
};

export default FirstStep;



1) I always try to.. 2) If you are overeating, try.. 3) I will forever remember.. 4) It's always good to remember to.. 5) I was writing my homework and then I stopped to.. 6) If you want your life to get better, stop..