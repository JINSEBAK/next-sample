import {
  MainContainer,
  Contents,
} from "../../../component/Common/CommonUIElements";
import SubHeader from "../../../component/Common/SubHeader";
import { Button } from "../../../component/Common/BasicUIElements";

const SAMPLE_DATAS = [
  { id: 1, type: "", imgUrl: "test_7.jpeg" },
  { id: 2, type: "", imgUrl: "test_4.jpeg" },
  { id: 3, type: "", imgUrl: "test_2.jpeg" },
  { id: 4, type: "", imgUrl: "test_5.jpeg" },
  { id: 5, type: "", imgUrl: "" },
];

const ArchiveDetail = () => {
  return (
    <MainContainer>
      <SubHeader title="기본 폴더(352)" />
      <Contents className="scrap">
        <ul className="scrap_img_list">
          <li>
            <Button content="일시품절">
              <img src="/images/test7.jpeg" alt="" />
            </Button>
            <p className="pop_movieplay_btn">MOVIE PLAY ICON</p>
          </li>
          {SAMPLE_DATAS.map((item, index) => {
            return (
              <li key={index}>
                <Button content="일시품절">
                  <img src={`/images/${item.imgUrl}`} alt="" />
                </Button>
                <p className="pop_movieplay_btn">MOVIE PLAY ICON</p>
              </li>
            );
          })}
        </ul>
      </Contents>
    </MainContainer>
  );
};

export default ArchiveDetail;
