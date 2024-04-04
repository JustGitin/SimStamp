import { Button } from "devextreme-react";

interface ResetButtonProps {
  onReset: () => void;
}

export const ResetButton: React.FC<ResetButtonProps> = (props) => {
  const handleClick = () => {
    props.onReset();
  };
  return (
    <Button
      className="buttonStyle"
      onClick={handleClick}
      text="Reset"
      type="danger"
    ></Button>
  );
};
