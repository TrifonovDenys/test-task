import Button from 'components/Button/Button';
import TextInput from './TextInput';
import ChekedLabel from './ChekedLabel';

const SecondStep = () => {
  return (
    <div className="d-flex flex-column gap-10">
      <h2>Рассчитать стоимость ремонта квартиры за 1 минуту</h2>

      <div>
        <h3>Выберете удобный формат консультации</h3>

        <div className="d-flex flex-column gap-2">
          <ChekedLabel
            text="Проконсультироватся по телефону"
            htmlFor=""
            type="checkbox"
            name=""
            id=""
          />

          <ChekedLabel text="Вайбер" htmlFor="" type="checkbox" name="" id="" />

          <ChekedLabel
            text="Видеозвонок/встреча в офисе"
            htmlFor=""
            type="checkbox"
            name=""
            id=""
          />
        </div>
      </div>

      <div className="d-flex flex-column w-75-sm w-100 gap-3">
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
      </div>
    </div>
  );
};

export default SecondStep;
