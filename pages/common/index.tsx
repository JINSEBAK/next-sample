import {
  MainContainer,
  Contents,
} from "../../component/Common/CommonUIElements";
import {
  Radio,
  Checkbox,
  Switch,
  FileBox,
  Select,
} from "../../component/Common/FormUIElements";

const OPTIONS = [
  { value: "1", name: "옵션 1" },
  { value: "2", name: "옵션 2" },
  { value: "3", name: "옵션 3" },
  { value: "4", name: "옵션 4" },
  { value: "5", name: "옵션 5" },
];

const Common = () => {
  //
  const onSelect = (value, name) => {
    console.log(value);
    console.log(name);
  };

  return (
    <MainContainer>
      <Contents>
        <h1 style={{ margin: "20px 0 10px" }}>라디오버튼</h1>
        <div>
          <Radio name="radio" id="radio1" label="라벨1" value="1" />
          <Radio name="radio" id="radio2" label="라벨2" value="2" />
        </div>
        <br />
        <h1 style={{ margin: "20px 0 10px" }}>체크박스</h1>
        <div>
          <Checkbox name="check" id="check1" label="라벨1" value="3" />
          <Checkbox name="check" id="check2" label="라벨1" value="4" />
        </div>
        <br />
        <h1 style={{ margin: "20px 0 10px" }}>토글버튼</h1>
        <div>
          <Switch prefixedLabel="왼쪽" postfixedLabel="오른쪽" />
        </div>
        <br />
        <h1 style={{ margin: "20px 0 10px" }}>파일첨부 박스</h1>
        <div>
          <FileBox />
        </div>
        <br />
        <h1 style={{ margin: "20px 0 10px" }}>셀렉트</h1>
        <div>
          <Select id="sampleSelect" options={OPTIONS} onSelect={onSelect} />
        </div>
      </Contents>
    </MainContainer>
  );
};

export default Common;
