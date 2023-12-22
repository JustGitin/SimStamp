interface StartButtonProps {
  onStart: () => void;
}

export const StartButton: React.FC<StartButtonProps> = (props) => {
  const handleClick = () => {
    props.onStart();
  };
  return (
    <button className="buttonStyle" onClick={handleClick}>
      Start
    </button>
  );
};
