import Link from "next/link";
import { Button } from "../Common/BasicUIElements";
import classNames from "classnames";

interface ArchiveProps {
  className?: string;
  info?: { id: string; title: string; imgUrl: string };
}

const Archive = ({ className, info }: ArchiveProps) => {
  let linkDetail = true;
  if (className) {
    if (className.indexOf("base_folder") > -1) {
      linkDetail = false;
    } else {
      linkDetail = true;
    }
  }

  return (
    <Link href={linkDetail ? "/archive/detail" : "/archive/folder"}>
      <a className={classNames(className)}>
        {className ? (
          <span>
            {!linkDetail ? (
              <>
                폴더 만들기<em></em>
              </>
            ) : (
              "기본 폴더"
            )}
          </span>
        ) : (
          <>
            <img
              src={`/images/${info.imgUrl}`}
              alt={`${info.title}의 대표 이미지`}
            />
            <span>{info.title}</span>
            <Button className="scrap_fmore_btn" content="SCRAP FOLDER MODIFY" />
          </>
        )}
      </a>
    </Link>
  );
};

export default Archive;
