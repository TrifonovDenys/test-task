import { useScreenSize } from 'components/Button/ScreenSizeTracker';

const SIdeSubTitle = ({ text }) => {
  const { width } = useScreenSize();
  return (
    <h3
      className={`${
        width > 500 ? 'fs-5 fw-normal' : 'fs-6 fw-normal me-1'
      } text-light `}
      style={{
        display: `${width > 500 ? 'block' : 'inline-block'}`,
      }}
    >
      {text}
    </h3>
  );
};

export default SIdeSubTitle;
