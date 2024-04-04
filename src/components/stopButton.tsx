import { Button } from "devextreme-react";

interface StopButtonProps {
  onStop: () => void;
}

export const StopButton: React.FC<StopButtonProps> = (props) => {
  const handleClick = () => {
    props.onStop();
  };
  return <Button onClick={handleClick} text="Stopp" type="success"></Button>;
};
