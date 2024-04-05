import { DropDownButton } from "devextreme-react";
import { useState } from "react";

export const DropDownMenu = () => {
  const [dropdownValue, setDropdownValue] = useState("User");

  const dropdownItems = [
    { id: 1, text: "User" },
    { id: 2, text: "B" },
    { id: 3, text: "C" },
    { id: 4, text: "Einstellungen" },
    { id: 5, text: "Logout" },
  ];

  const handleDropdownValueChanged = (e: any) => {
    setDropdownValue(e.itemData.text);
  };

  return (
    <div className="dropdown-button">
      <DropDownButton
        dataSource={dropdownItems}
        valueExpr="text"
        displayExpr="text"
        value={dropdownValue}
        onValueChanged={handleDropdownValueChanged}
        width="150px"
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
  );
};
