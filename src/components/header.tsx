import "./header.css";
import { Logo } from "./Logo";
import { DropDownMenu } from "./DropdownMenu";

export function Header() {
  return (
    <>
      <div className="navbar">
        <Logo />
        <ul className="navlist">
          <li>
            <a href="#hallo">Notizen</a>
          </li>
          <li>
            <div className="dropdown-button">
              <DropDownMenu />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
