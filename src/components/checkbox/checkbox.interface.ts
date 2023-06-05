export interface CheckboxProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: (isChecked: boolean, checkboxName: string) => void;
  disabled?: boolean;
}

export interface IStyledCheckbox {
  $checked: boolean;
}

export interface ICheckboxContainer {
  $disabled?: boolean;
}
