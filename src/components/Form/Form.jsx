import React, { useState } from 'react';
import FirstStep from './FormSteps/FirstStep';
import SecondStep from './FormSteps/SecondStep';
import Button from 'components/Button/Button';
const Form = () => {
  const [page, setPage] = useState(1);

  console.log(page);
  const pages = [
    {
      page: 1,
      element: <FirstStep />,
      name: 'First Step',
    },
    {
      page: 2,
      element: <SecondStep />,
      name: 'Second Step',
    },
  ];

  return (
    <div className="col-12 col-sm-7 bg-light py-12-sm ps-16-sm pe-20-sm py-5 px-5">
      <form>
        {pages.map(p => (
          <div
            key={p.page}
            className={`${p.page !== page ? 'visually-hidden' : ''}`}
          >
            {p.element}
          </div>
        ))}

        <div>
          {page === 1 && (
            <Button
              className={`border-0 bg-transparent fs-5 text-body-tertiary opacity-50`}
              type="button"
              onClick={() => {
                setPage(currPage => currPage + 1);
              }}
            >
              К следующему вопросу &rarr;
            </Button>
          )}

          {page === 2 && (
            <Button
              className={`border-0 bg-transparent fs-5 text-body-tertiary opacity-50`}
              type="button"
              onClick={() => {
                setPage(currPage => currPage - 1);
              }}
            >
              &larr; Вернутся к пердыдущему вопросу
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
