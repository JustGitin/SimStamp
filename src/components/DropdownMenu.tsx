import { DropDownButton } from "devextreme-react";
import { SelectionChangedEvent } from "devextreme/ui/drop_down_button";

export const DropdownMenu = () => {
  const dropDownOptions = {
    height: 225,
  };
  const actions = [
    { id: 1, text: "Mein Profil", icon: "user" },
    { id: 2, text: "Messages", icon: "email" },
    { id: 3, text: "Einstellungen", icon: "group" },
    { id: 4, text: "Logout", icon: "runner" },
  ];

  const logButtonClick = () => {
    console.log("Main button was clicked");
  };

  const logSelectionChanged = (e: SelectionChangedEvent) => {
    console.log(
      e.item.text + " was selected; " + e.previousItem.text + " was deselected"
    );
  };

  return (
    <div className="dropdown-button">
      <DropDownButton
        items={actions}
        keyExpr="id"
        displayExpr="text"
        splitButton={true}
        onButtonClick={logButtonClick}
        dropDownOptions={dropDownOptions}
        useSelectMode={true}
        selectedItemKey={1}
        onSelectionChanged={logSelectionChanged}
      ></DropDownButton>
    </div>
  );
};
