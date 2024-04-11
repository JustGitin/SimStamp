import "./header.css";
import { Logo } from "./Logo";
import { DropdownMenu } from "./DropdownMenu";

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
              <DropdownMenu />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
