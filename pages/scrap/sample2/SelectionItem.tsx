const SelectionItem = (props) => {
  const { data, isSelected } = props;
  let className = "item noselect";
  className += isSelected ? " selected" : "";

  return <div className={className}>Item {data + 1}</div>;
};

export default SelectionItem;
