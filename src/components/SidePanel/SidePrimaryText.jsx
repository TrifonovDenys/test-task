import { useScreenSize } from "components/Button/ScreenSizeTracker";

const SidePrimaryText = ({ text }) => {
  const { width } = useScreenSize();
  return <div className={`${width > 500 ? 'fs-2 fw-normal' : 'fs-5'} text-warning  `} style={{
    display: `${width > 500 ? 'block' : "inline-block"}`
  }}>{text}</div>;
};

export default SidePrimaryText;
