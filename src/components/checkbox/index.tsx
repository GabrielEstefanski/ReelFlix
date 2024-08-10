import React from "react";
import styled from "styled-components";

interface Props {
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
  background-color: #000000;
  border: 1px solid #ffffff;

  &:checked {
    color: white;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  `;

const Label = styled.label`
  font-size: 15px;
  rgba(255, 255, 255, 0.7);
`

export default function CheckBox({ description, checked, onChange }: Props) {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <Container>
      <Checkbox
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <Label>{description}</Label>
    </Container>
  );
}
