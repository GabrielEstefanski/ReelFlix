import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid orange;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spin} 1s linear infinite;
`;

const Loading: React.FC = () => (
  <SpinnerContainer>
    <Spinner />
  </SpinnerContainer>
);

export default Loading;
