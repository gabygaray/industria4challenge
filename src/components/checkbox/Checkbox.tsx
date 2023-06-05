import { CheckboxProps } from "./checkbox.interface";

import {
  CheckboxContainer,
  CheckboxLabel,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from "./styles";

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  checked,
  onChange,
  disabled,
}): React.ReactElement => {
  return (
    <CheckboxContainer $disabled={disabled}>
      <HiddenCheckbox
        checked={checked}
        onChange={() => onChange(!checked, name)}
      />
      <StyledCheckbox $checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
