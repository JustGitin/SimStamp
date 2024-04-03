import { Button } from "devextreme-react";

interface StopButtonProps {
  onStop: () => void;
}

export const StopButton: React.FC<StopButtonProps> = (props) => {
  const handleClick = () => {
    props.onStop();
  };
  return (
    <Button className="buttonStyle" onClick={handleClick}>
      Stopp
    </Button>
  );
};
