import React, { useState } from "react";
import { DropDownButton } from "devextreme-react";
import "./header.css";
import { Logo } from "./Logo";

export function Header() {
  const [dropdownValue, setDropdownValue] = useState("January");

  const dropdownItems = [
    { id: 1, text: "January" },
    { id: 2, text: "February" },
    { id: 3, text: "March" },
    { id: 4, text: "April" },
    { id: 5, text: "May" },
    { id: 6, text: "June" },
    { id: 7, text: "July" },
    { id: 8, text: "August" },
    { id: 9, text: "September" },
    { id: 10, text: "October" },
    { id: 11, text: "November" },
    { id: 12, text: "December" },
  ];

  const handleDropdownValueChanged = (e: any) => {
    setDropdownValue(e.itemData.text);
  };

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
              <DropDownButton
                dataSource={dropdownItems}
                valueExpr="text"
                displayExpr="text"
                value={dropdownValue}
                onValueChanged={handleDropdownValueChanged}
                width="160px"
              >
                <div className="headerUser">
                  <span>User</span>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.06006 5.22222L4.99993 1.77778L9.03989 5.22222"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </DropDownButton>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
