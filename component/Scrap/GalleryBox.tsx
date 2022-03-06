import Link from "next/link";
import classNames from "classnames";
import { Button } from "../Common/BasicUIElements";

interface GalleryBoxProps {
  storageId: string;
  storageNm: string;
  defaultYn: string;
  imgUrl?: string;

  onClickOption?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const GalleryBox = ({
  storageId,
  storageNm,
  defaultYn,
  imgUrl,
  onClickOption,
}: GalleryBoxProps) => {
  return (
    <Link href={`/scrap/detail/${storageId}`}>
      <a className={classNames(defaultYn === "Y" && "no_dim")}>
        {imgUrl && <img src={imgUrl} alt="이미지" />}
        <span>{storageNm}</span>
        {defaultYn !== "Y" && (
          <Button
            className="scrap_fmore_btn"
            content="SCRAP FOLDER MODIFY"
            onClick={(e) => onClickOption(e)}
          />
        )}
      </a>
    </Link>
  );
};

export default GalleryBox;
