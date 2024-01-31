const TextInput = ({ type, placeholder, name, id }) => {
  return (
    <>
      <input
        className="w-full px-6 py-4 border-0 fs-5 "
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
      />
    </>
  );
};

export default TextInput;
