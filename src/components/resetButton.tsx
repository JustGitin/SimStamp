import { Button } from "devextreme-react";

interface ResetButtonProps {
  onReset: () => void;
  isButtonVisible: boolean;
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
      disabled={props.isButtonVisible}
    ></Button>
  );
};
