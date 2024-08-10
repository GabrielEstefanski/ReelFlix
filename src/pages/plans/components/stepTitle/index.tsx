import styled from "styled-components"

interface Props {
  description: string;
}

const Title = styled.h1`
  color: #fff;
`

export default function StepTitle ({ description }: Props) {
  return (
    <>
      <Title>{ description }</Title>
    </>
  )
}