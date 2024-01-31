import img from '../../assets/img/office.jpg';

const HeroImg = () => {
  return (
    <>
      <div className="col-12 col-sm-2 h-100-sm overflow-hidden">
        <img className="object-fit-cover" src={img} alt="img" />
      </div>
    </>
  );
};

export default HeroImg;
