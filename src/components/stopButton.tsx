interface StopButtonProps {
  onStop: () => void;
}

export const StopButton: React.FC<StopButtonProps> = (props) => {
  const handleClick = () => {
    props.onStop();
  };
  return (
    <button className="buttonStyle" onClick={handleClick}>
      Stop
    </button>
  );
};
