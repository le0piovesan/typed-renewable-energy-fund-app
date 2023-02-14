export interface Props {
  label: string;
  secureTextEntry: boolean;
  passwordVisible?: boolean;
  setPasswordVisible: (value: boolean) => void;
  onBlur?: (value: boolean) => void;
  value?: string;
  error?: string;
}
