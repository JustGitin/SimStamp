import { Minutes, Hours } from "./typeDeclaration";

export interface TimerProps {
  onClick: (timePeriod: { h: Hours; min: Minutes }) => void;
  projectTitle: String;
  description: String;
}
