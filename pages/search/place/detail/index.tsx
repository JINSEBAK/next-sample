import {
  MainContainer,
  Contents,
} from "../../../../component/Common/CommonUIElements";
import SubHeader from "../../../../component/Common/SubHeader";
import { useRouter } from "next/router";

const PlaceDetailPage = () => {
  //
  const router = useRouter();

  return (
    <MainContainer>
      <SubHeader title="대륭포스트타워 6차" />
      <Contents className="ssg_sub">
        <div
          style={{
            background: "pink",
            height: "100vh",
            marginTop: "-56px",
            padding: "16px",
          }}
        >
          123
        </div>
      </Contents>
    </MainContainer>
  );
};

export default PlaceDetailPage;
