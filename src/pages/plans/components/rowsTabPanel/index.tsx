import styled from "styled-components"

interface Props {
  title: string;
  description: string;
}

const Section = styled.div`
  display: flex;
  color: white;
`

const TabPanel = styled.li`
  box-sizing: border-box;
  padding: 12.5px 0px;
  width: 100%;
  border-bottom: 1px solid #909090;
  list-style: none;
`

const TitleSpan = styled.span`
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.53846;
  color: #a6a6a6;
`

const DescriptionSpan = styled.span`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
`

export default function Rows({ title, description }: Props) {
  return (
    <TabPanel>
      <Section>
        <TitleSpan> {title} </TitleSpan>
      </Section>
      <Section>
        <DescriptionSpan> {description} </DescriptionSpan>
      </Section>
    </TabPanel>
  )
}