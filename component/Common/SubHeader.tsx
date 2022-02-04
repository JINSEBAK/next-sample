import { Button } from "../../component/Common/BasicUIElements";

interface SubHeaderProps {
  title?: string | React.ReactNode;
  isBack?: boolean;
  onClickOpenClose?: () => void;
}
const SubHeader = ({
  title,
  isBack = true,
  onClickOpenClose,
}: SubHeaderProps) => {
  // 뒤로가기
  const onClickBack = () => {
    history.back();
  };
  return (
    <header id="header">
      {isBack && (
        <Button
          className="btn_hdback btn_hdleft"
          content="HD BACK"
          onClick={onClickBack}
        />
      )}
      <h2>
        <span>{title}</span>
      </h2>
      <Button
        className="btn_hdmore btn_hdright"
        content="HD MORE"
        onClick={onClickOpenClose}
      />
    </header>
  );
};

export default SubHeader;
