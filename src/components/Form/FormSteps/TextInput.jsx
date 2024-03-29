import { useScreenSize } from "components/Button/ScreenSizeTracker";

const TextInput = ({ type, placeholder, name, id }) => {
  const { width } = useScreenSize();
  return (
    <>
      <input
        className={`${width > 550 ? 'w-75' : 'w-full'} px-6 py-4 border-0 fs-5`}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
      />
    </>
  );
};

export default TextInput;
