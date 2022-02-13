import {
  MainContainer,
  Contents,
  ContentsInner,
} from "../../../component/Common/CommonUIElements";
import SubHeader from "../../../component/Common/SubHeader";
import { Input } from "../../../component/Common/FormUIElements";

const ArchiveFolder = () => {
  return (
    <MainContainer>
      <SubHeader title="폴더 만들기" />
      <Contents className="scrap">
        <ContentsInner type="div" className="scrap_frame">
          <p className="scrap_folder_mdimg" />
          <dl className="scrap_inp_box">
            <dt>이름</dt>
            <dd>
              <Input type="text" />
            </dd>
            <dd className="input_guidetext">한글, 영문 2~10자리</dd>
          </dl>
        </ContentsInner>
      </Contents>
    </MainContainer>
  );
};

export default ArchiveFolder;
