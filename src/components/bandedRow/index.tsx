import styled from "styled-components";
import ErrorIcon from "../icons/error";

interface Props {
  content: string;
}

const BandedRow = styled.div`
  color: rgb(193, 17, 25);
  margin-top: 0.375rem;
  font-weight: 400;
  font-size: 0.8125rem;
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div`
  margin-right: 0.5rem;
`

export default function BandedRows ({ content }: Props) {
  return (
    <>
      <BandedRow>
        <IconWrapper> 
          <ErrorIcon/> 
        </IconWrapper>
        {content} 
      </BandedRow>
    </>
  )
}