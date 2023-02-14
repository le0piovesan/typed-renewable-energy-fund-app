export interface Props {
  label: string;
  passwordVisible?: boolean;
  secureTextEntry: boolean;
  setPasswordVisible: (value: boolean) => void;
}
