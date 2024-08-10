import { useState } from "react";
import styled from "styled-components"
import ShowPassword from "../showPassword";

interface Props {
  type: string;
  id: string;
  text: string;
  value: string;
  onChange: (value: string) => void;
  invertColors?: boolean;
  hideShowPasswordButton?: boolean;
}

const Label = styled.div<{ invertColors?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  .input {
    height: 56px;
    padding: 20px 16px 0px 10px;
    outline: 0;
    border: 1px solid ${({ invertColors }) => (invertColors ? '#ffffff' :'#000000' )};
    color: ${({ invertColors }) => (invertColors ? '#ffffff' : '#111')};
    border-radius: 4px;
    background: ${({ invertColors }) => (invertColors ? '#111' : '#ffffff')}; 
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    position: relative;
  }

  .label {
    font-size: 1.0rem;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    padding: 0 15px;
    color:  ${({ invertColors }) => (invertColors ? '#999999;' : '#000000')};
    pointer-events: none;
    position: absolute;
    transform: translate(0, 20px) scale(1);
    transform-origin: top left;
    transition: all 0.2s ease-out;
  }

  &:focus-within .label,
  .input:focus + .label {
    transform: translate(0, 12px) scale(0.75);
  }

  &:focus-within {
    border: 1px solid #000000;
    border-radius: 4px;
  }

  .active-label {
    transform: translate(0, 12px) scale(0.75);
  }

  @media (max-width: 768px) {
    .label {
      font-size: 0.9rem;
    }
  }
`;

export default function FloatLabel({ type, id, value, text, onChange, invertColors, hideShowPasswordButton }: Props) {
  const isActive = !!value;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Label invertColors={invertColors}>
      <input 
        type={showPassword ? 'text' : type}
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id={id}
      />

      <label 
        htmlFor={id}
        className={`label ${isActive ? 'active-label' : ''}`}
      >
        {text}
      </label>

      {type === 'password' && !hideShowPasswordButton && (
        <ShowPassword
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      )}
    </Label>
  );
}
