import classNames from "classnames";

interface IconProps {
  name?: string;
  active?: boolean;
  onClickHandler?: () => void;
}
const Icon = ({ name, active, onClickHandler }: IconProps) => {
  return (
    <span
      className={classNames("icon", name, active && "on")}
      onClick={onClickHandler}
    />
  );
};

export default Icon;
