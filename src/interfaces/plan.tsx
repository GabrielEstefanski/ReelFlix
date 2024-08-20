export interface PlanDetail {
  title: string;
  description: string;
}

export interface PlanOption {
  id: string;
  value: string;
  title: string;
  subtitle: string;
  details: PlanDetail[];
}