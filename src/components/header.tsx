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
            <a href="#hallo">Tabellenansicht</a>
          </li>
          <li>
            <a href="#tschüss">Notizen</a>
          </li>
        </ul>

        <User />
      </div>
    </>
  );
}
