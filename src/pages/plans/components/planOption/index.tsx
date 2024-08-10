import React from 'react';
import styled from 'styled-components';
import Rows from '../rowsTabPanel';

const TabPanel = styled.ul`
  box-sizing: border-box;
  padding: 12.5px 12.5px;
  width: 100%;
`;

const SelectPlan = styled.input`
  display: none;
`;

const ContainerPlan = styled.label`
  margin-right: 12px;
  flex-grow: 1;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: margin 250ms ease-in-out 0s, box-shadow 250ms ease-in-out 0s, border-color 250ms ease-in-out 0s;

  ${SelectPlan}:checked + & {
    border-color: #FFD14C;
  }
`;

const LabelCard = styled.div`
  margin: 8px;
  padding: 10px 16px;
  background: radial-gradient(140.76% 131.96% at 100% 100%, rgb(255 69 0) 0%, rgb(255 124 0 / 50%) 73.57%, rgba(74, 42, 150, 0) 100%), rgb(255 209 76);
  min-height: 83px;
  flex-direction: column;
  display: flex;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 12px;
  color: #000;
`;


interface PlanOptionProps {
  id: string;
  value: string;
  title: string;
  subtitle: string;
  details: Array<{ title: string, description: string }>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

const PlanOption: React.FC<PlanOptionProps> = ({ id, value, title, subtitle, details, onChange, isChecked }) => (
  <>
    <SelectPlan
      type="radio"
      id={id}
      name="plan"
      value={value}
      onChange={onChange}
      checked={isChecked} 
    />
    <ContainerPlan htmlFor={id}>
      <LabelCard>
        <span>{title}</span>
        <span>{subtitle}</span>
      </LabelCard>
      <TabPanel>
        {details.map((detail, index) => (
          <Rows key={index} title={detail.title} description={detail.description} />
        ))}
      </TabPanel>
    </ContainerPlan>
  </>
);

export default PlanOption;