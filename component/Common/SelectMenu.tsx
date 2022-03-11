import { Button } from "./BasicUIElements";

interface SelectMenuProps {
  menu: string[];
  onClickMenu: (item: string) => void;
}
const SelectMenu = ({ menu, onClickMenu }: SelectMenuProps) => {
  return (
    <ul className="pop_listbtn_noraml">
      {menu.length > 0 &&
        menu.map((item, index) => (
          <li key={index}>
            <Button content={item} onClick={() => onClickMenu(item)} />
          </li>
        ))}
    </ul>
  );
};

export default SelectMenu;
