import Button from 'components/Button/Button';
import SidePrimaryText from './SidePrimaryText';
import SideSubTitle from './SideSubTitle';

const SidePanel = () => {
  return (
    <>
      <div className="col-12 col-sm-3 h-100 bg-black py-16 d-flex justify-content-center">
        <h2 className="visually-hidden">Side Panel</h2>
        <div className="px-16 d-flex flex-column gap-20">
          <div>
            <SideSubTitle text="Сроки:" />
            <SidePrimaryText text="от 10 до 12 дней" />
          </div>

          <div>
            <SideSubTitle text="Стоимость:" />
            <SidePrimaryText text="от $3000" />
          </div>

          <div>
            <Button className="bg-warning rounded-5 px-4 py-2 fs-6 border-0 w-20-sm h-20-sm">
              Получить консультацию &rarr;
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
