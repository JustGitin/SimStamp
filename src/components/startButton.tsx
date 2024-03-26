import { Button } from "devextreme-react";

interface StartButtonProps {
  onStart: () => void;
}

export const StartButton: React.FC<StartButtonProps> = (props) => {
  const handleClick = () => {
    props.onStart();
  };
  return (
    <Button className="buttonStyle" onClick={handleClick}>
      Start
    </Button>
  );
};
