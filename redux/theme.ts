interface Theme {
  theme: string;
}

export const types = {
  switchTheme: "theme/switch",
};

const initialState: Theme = {
  theme: "light",
};

export default function theme(state = initialState, action: any) {
  switch (action.type) {
    case types.switchTheme:
      return { ...state, theme: action.payload };

    default:
      return state;
  }
}

export const Theme = {
  switchTheme: (theme: string) => ({
    type: types.switchTheme,
    payload: theme,
  }),
};
