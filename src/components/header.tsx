import { Logo } from "./Logo";
import { User } from "./User";
import "./header.css";

export function Header() {
  return (
    <>
      <div className="navbar">
        <Logo />
        <ul className="navlist">
          <li>
            <a href="#hallo">Option 1</a>
          </li>
          <li>
            <a href="#tschüss">Option 2</a>
          </li>
        </ul>

        <User />
      </div>
    </>
  );
}
