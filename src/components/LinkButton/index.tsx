import styled from "styled-components"

const LinkAccess = styled.a`
  color: #0080ff;
  text-decoration: none;
`

interface Props {
  text: string;
  access: string;
  target?: string;
}

export default function LinkButton({ text, access, target }: Props){
  return (
    <>
      <LinkAccess href={access} id="default_link" target={target}>{text}</LinkAccess>
    </>
  )
}