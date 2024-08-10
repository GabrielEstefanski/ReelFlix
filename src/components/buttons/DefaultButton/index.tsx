import styled from "styled-components";
import { lighten } from "polished";

interface Props {
  description: string;
  color: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Button = styled.div`
  color: #fff;
  width: 100%;
  height: 40px;
  align-content: center;
  text-align: center;
  background-color: ${({ color }) => color};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ color }) => (color ? lighten(0.2, color) : "#000000")};
  }
`

export default function DefaultButton({ description, color, onClick }: Props) {
  return (
  <Button 
    color={color || "#000000"}
    className="button" 
    onClick={onClick}>
    { description }
  </Button>
  )
}