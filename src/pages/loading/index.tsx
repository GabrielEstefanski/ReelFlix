import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Define a keyframes animation for spinning
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Define a keyframes animation for fade out
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// Define styled components
const SpinnerContainer = styled.div<{ isFadingOut: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transition: opacity 0.5s ease-out;
  opacity: ${props => (props.isFadingOut ? 0 : 1)};
  animation: ${props => (props.isFadingOut ? fadeOut : 'none')} 0.5s ease-out;
`;

const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid orange;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spin} 1s linear infinite;
`;

// Define the Loading component
export default function Loading() {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        navigate('/movies');
      }, 500); // Match this duration with the fade-out transition time
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <SpinnerContainer isFadingOut={isFadingOut}>
      <Spinner />
    </SpinnerContainer>
  );
}
