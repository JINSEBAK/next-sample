import {
  MainContainer,
  Contents,
} from "../../../component/Common/CommonUIElements";
import SubHeader from "../../../component/Common/SubHeader";
import { Input } from "../../../component/Common/FormUIElements";
import { useState } from "react";
import { Button } from "../../../component/Common/BasicUIElements";

const ScrapFolder = () => {
  //
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(true);

  // 폴더명 입력 시, 입력값 체크
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const REG_EX = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
    if (e.target.value === "" || REG_EX.test(e.target.value)) {
      if (e.target.value.length > -1 && e.target.value.length < 11) {
        setName(e.target.value);
        if (e.target.value.length === 0) {
          setDisabled(true);
        } else {
          setDisabled(false);
        }
      }
    }
  };

  const onClickSave = () => {
    alert("저장할거니?");
  };

  return (
    <MainContainer>
      <SubHeader
        title="폴더 만들기"
        isBack={true}
        rightButton={
          <Button
            className="btn_hdtext btn_hdright"
            content="저장"
            disabled={disabled}
            onClick={onClickSave}
          />
        }
      />
      <Contents className="ssg_sub has_mg_lr">
        <p className="scrap_folder_mdimg" />
        <dl className="info_inp_box">
          <dt>이름</dt>
          <dd>
            <Input
              type="text"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeInput(e)
              }
            />
          </dd>
          <dd className="input_guidetext">한글, 영문 2~10자리</dd>
        </dl>
      </Contents>
    </MainContainer>
  );
};

export default ScrapFolder;
