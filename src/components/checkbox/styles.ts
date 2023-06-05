import styled from "styled-components";
import { ICheckboxContainer, IStyledCheckbox } from "./checkbox.interface";

export const CheckboxContainer = styled.label<ICheckboxContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;

  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  pointer-events: ${(props) => props.$disabled && "none"};
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledCheckbox = styled.div<IStyledCheckbox>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border: 2px solid ${(props) => (props.$checked ? "#007bff" : "#ced4da")};
  background-color: ${(props) => (props.$checked ? "#007bff" : "transparent")};
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.$checked ? "visible" : "hidden")};
  }
`;

export const CheckboxLabel = styled.span`
  font-size: 14px;
  margin-left: 8px;
  user-select: none;
`;
