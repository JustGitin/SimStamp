import { Minutes, Time } from "./typeDeclaration";

export interface TimerProps {
  onClick: (timePeriod: { h: Time; min: Minutes }) => void;
  projectTitle: string;
  description: string;
}
