const ChekedLabel = ({ text, htmlFor, type, name, id }) => {
  return (
    <>
      <label className="d-flex align-items-center fs-5 ">
        <input className="custom_checkbox" type={type} name={name} id={id} />
        {text}
      </label>
    </>
  );
};

export default ChekedLabel;
