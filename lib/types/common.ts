export type ChildrenProps = JSX.Element | JSX.Element[];

export enum SearchTabTitle {
  "all" = "전체",
  "user" = "유저",
  "family" = "친구",
  "hashtag" = "#태그",
  "place" = "장소",
  "product" = "상품",
  "brand" = "브랜드",
}

export enum SearchTabClassName {
  "user" = "sch_img_list",
  "family" = "sch_img_list type_rc",
  "place" = "gallery_list",
  "hastag" = "sch_recommend_list xscroll_list",
  "product" = "gallery_list",
  "brand" = "sch_img_list type_bd xscroll_list",
}

export enum ProfileMenu {
  "M001" = "공유하기",
  "M002" = "팔로우 취소하기",
  "M003" = "신고하기",
}

export enum ScrapMenu {
  "SM001" = "폴더 수정",
  "SM002" = "폴더 삭제",
}

export enum ScrapDetailMenu {
  "SDM001" = "콘텐츠 선택",
  "SDM002" = "폴더 수정",
  "SDM003" = "폴더 삭제",
}
