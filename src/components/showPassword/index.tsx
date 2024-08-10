import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const EyeIcon = styled.span`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
right: 10px;
top: 50%;
transform: translateY(-50%);
cursor: pointer;
color: rgba(0, 0, 0, 0.7);
border-radius: 50%; 
padding: 5px;  

&:hover {
  background-color: rgba(0, 0, 0, 0.2); 
}

&:active {
  background-color: rgba(0, 0, 0, 0.1); 
}
`;

interface Props {
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
}

export default function ShowPassword({ showPassword, setShowPassword }: Props) {
  return (
    <EyeIcon onClick={() => setShowPassword(!showPassword)}>
    {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
  </EyeIcon>
  );
}
