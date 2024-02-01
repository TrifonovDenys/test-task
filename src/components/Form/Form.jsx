import React, { useState } from 'react';
import FirstStep from './FormSteps/FirstStep';
import SecondStep from './FormSteps/SecondStep';
import Button from 'components/Button/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Form = () => {
  const [page, setPage] = useState(1);

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
    <Container fluid="md">
      <Row>
        <Col className="bg-light-subtle py-10 px-8">
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
                  className={`border-0 bg-transparent fs-6 text-body-tertiary opacity-50`}
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
                  className={`border-0 bg-transparent fs-6 text-body-tertiary opacity-50 `}
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
        </Col>
      </Row>
    </Container>
  );
};

export default Form;
