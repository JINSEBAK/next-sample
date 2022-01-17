import { useState, useEffect, useRef } from "react";
import { Button } from "./BasicUIElements";
import classNames from "classnames";

interface InputProps {
  type: string;
  placeholder?: string;
  onChange?: (e) => React.ChangeEvent<HTMLInputElement>;
}
export const Input = ({ type, placeholder, onChange }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
    />
  );
};

interface RadioProps {
  name: string;
  id: string;
  label: string;
  value: string | number;
}
export const Radio = ({ name, id, label, value }: RadioProps) => {
  return (
    <p className="radio">
      <input type="radio" name={name} id={id} value={value} />
      <label htmlFor={id}>
        <span />
        {label}
      </label>
    </p>
  );
};

interface CheckProps {
  name: string;
  id: string;
  label: string;
  value: string | number;
}
export const Checkbox = ({ name, id, label, value }: CheckProps) => {
  return (
    <p className="check">
      <input type="checkbox" name={name} id={id} value={value} />
      <label htmlFor={id}>
        <span />
        {label}
      </label>
    </p>
  );
};

interface SwitchProps {
  prefixedLabel?: string;
  postfixedLabel?: string;
}
export const Switch = ({ prefixedLabel, postfixedLabel }: SwitchProps) => {
  return (
    <div className="switch_box">
      <span>{prefixedLabel}</span>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
      <span>{postfixedLabel}</span>
    </div>
  );
};

export const FileBox = () => {
  return (
    <div className="fileBox w90p">
      <span className="file">
        파일 찾기
        <input type="file" id="file0" />
      </span>
      <span className="pholder">
        <label htmlFor="file0">파일을 첨부해 주세요.</label>
        <input type="text" readOnly={true} title="선택 파일" />
      </span>
    </div>
  );
};

interface SelectProps {
  id?: string;
  options: { value: string | number; name: string }[];
  disabled?: boolean | false;
  defaultValue?: string;
  onSelect: (value: string | number, name: string) => void;
}
// 크기 다른 selectbox 있을 경우 최상위 div 의 클래스명을 props로 변경할 것
export const Select = ({
  id,
  options,
  disabled,
  defaultValue,
  onSelect,
}: SelectProps) => {
  //
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({ value: "", name: "선택" });

  const selectRef = useRef<HTMLDivElement>();

  // 문서전체 mousedown 이벤트 바인딩
  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
  }, []);

  // Selectbox 외부 요소 클릭 확인
  const onClickOutside = (event) => {
    if (!selectRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  // defaultValue 설정
  useEffect(() => {
    if (defaultValue) {
      let tmp = options.filter((item) => {
        return item.value === defaultValue;
      });
      setSelected({ value: defaultValue, name: tmp[0].name });
    }
  }, [defaultValue]);

  const onClickHandle = () => {
    setOpen(!open);
  };

  const onClickOption = (value, name) => {
    setSelected({ value: value, name: name });
    // 선택 후 옵션 창 닫기
    onClickHandle();
    //
    onSelect(value, name);
  };

  return (
    <div
      className={classNames("selectWrap", "w60p", disabled && "disabled")}
      id={id}
      ref={selectRef}
    >
      <div className={classNames("selectVal", open && "on")}>
        <span>{selected.name}</span>
        <Button onClick={!disabled ? onClickHandle : undefined}>
          <em className="blind">선택 리스트 {open ? "닫기" : "열기"}</em>
        </Button>
        <input type="hidden" value={selected.value} />
      </div>
      {/* select options */}
      {options && (
        <ul className="selectList">
          {options.map((option, index) => {
            return (
              <li key={index}>
                <Button
                  content={option.name}
                  onClick={() => onClickOption(option.value, option.name)}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
