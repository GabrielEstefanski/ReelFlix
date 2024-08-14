import styled, { keyframes } from "styled-components";
import { ReactNode } from "react";

const slideInFromRight = keyframes`
  0% { opacity: 0; transform: translateX(30px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const Cache = styled.div`
  transition: max-width 0.3s ease-in-out;
  animation: ${slideInFromRight} 0.8s ease-out;
`

interface DefaultCacheProps {
  children: ReactNode;
}

export default function DefaultCache ({ children }: DefaultCacheProps) {
  return (
    <>
      <Cache>
        {children}
      </Cache>
    </>
  )
}