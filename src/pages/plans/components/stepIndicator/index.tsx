import styled from "styled-components"

interface Props { 
  description: string
}

const Step = styled.div`
  color: #c0c0c1;
  line-height: 19px;
  font-size: 13px;
`

export default function StepIndicator ({ description }: Props) {
  return (
    <Step>
      { description }
    </Step>
  )
}