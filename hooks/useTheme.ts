import { useAppSelector } from "./useRedux";

export const currentColorTheme = () => {
  const currentTheme = useAppSelector((state) => state.theme.theme);

  return currentTheme;
};
