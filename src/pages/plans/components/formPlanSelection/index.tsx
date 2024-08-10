import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlanOption from '../../../../pages/plans/components/planOption/index';
import { planOptions } from '../../../../composables/planOptions';

const Form = styled.form`
  padding-top: 20px;
`;

const PlanSelection = styled.div`
  display: flex;
  height: 700px;
`;

interface FormPlanSelectionProps {
  setSelectedPlan: (plan: string) => void;
}

export default function FormPlanSelection({ setSelectedPlan }: FormPlanSelectionProps) {
  const [selectedPlan, setSelectedPlanState] = useState(planOptions[0].value);

  useEffect(() => {
    const storedPlan = localStorage.getItem('selectedPlan');
    if (storedPlan) {
      setSelectedPlanState(storedPlan);
    }
  }, []);

  const handlePlanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPlan = event.target.value;
    setSelectedPlanState(selectedPlan);
    setSelectedPlan(selectedPlan);
    localStorage.setItem('selectedPlan', selectedPlan);
  };

  return (
    <Form method="POST">
      <PlanSelection>
        {planOptions.map((plan) => (
          <PlanOption
            key={plan.id}
            id={plan.id}
            value={plan.value}
            title={plan.title}
            subtitle={plan.subtitle}
            details={plan.details}
            onChange={handlePlanChange}
            isChecked={selectedPlan === plan.value}
          />
        ))}
      </PlanSelection>
    </Form>
  );
}