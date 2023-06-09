interface ButtonProps {
  onClick: () => void;
}

export default function Button({ onClick }: ButtonProps) {
  return <button onClick={onClick}>검색</button>;
}
