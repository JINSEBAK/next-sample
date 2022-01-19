import { Button } from "../../component/Common/BasicUIElements";

const SubHeader = () => {
  //
  return (
    <header id="header">
      <Button className="btn_hdback btn_hdleft" content="HD BACK" />
      <h2>
        <span>닉네임12345</span>
      </h2>
      <Button className="btn_hdmore btn_hdright" content="HD MORE" />
    </header>
  );
};

export default SubHeader;
