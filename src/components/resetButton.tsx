interface ResetButtonProps {
  onReset: () => void;
}

export const ResetButton: React.FC<ResetButtonProps> = (props) => {
  const handleClick = () => {
    props.onReset();
  };
  return (
    <button className="buttonStyle" onClick={handleClick}>
      Reset
    </button>
  );
};
