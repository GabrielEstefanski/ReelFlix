import styled from "styled-components";
import { lighten } from "polished";

interface Props {
  description: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  color?: string;
  style?: React.CSSProperties;
}

const Button = styled.div<{ color: string }>`
  color: #fff;
  width: 100%;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: ${({ color }) => color};
  transition: background-color 0.3s ease;
  cursor: pointer; // Adicionando cursor pointer para indicar que é clicável

  &:hover {
    background-color: ${({ color }) => (color ? lighten(0.2, color) : "#000000")};
  }
`

export default function DefaultButton({ description, color, onClick, style }: Props) {
  return (
    <Button 
      color={color || "#000000"}
      className="button" 
      onClick={onClick}
      style={style}
    >
      { description }
    </Button>
  )
}
