import pngImage from "../../icons/whiteIcon.png";
import "./user.css";
export const User = () => {
  type Account = {
    name: string;
    number: number;
  };
  const account: Account = {
    name: "Justin Richter",
    number: 123,
  };

  return (
    <div className="icon-container">
      <img className="userIcon" src={pngImage} alt="dummyIcon" />
      <span>{account.name}</span>
    </div>
  );
};
