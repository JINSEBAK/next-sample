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
