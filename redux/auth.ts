interface Auth {
  users: Array<object>;
  currentUser: boolean;
}

export const types = {
  register: "auth/register",
  logIn: "auth/logIn",
  logOut: "auth/logOut",
};

const initialState: Auth = {
  users: [],
  currentUser: false,
};

export default function auth(state = initialState, action: any) {
  switch (action.type) {
    case types.register:
      return { ...state, users: [...state.users, action.payload] };

    case types.logIn:
      return { ...state, currentUser: action.payload };

    case types.logOut:
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
}

export const Auth = {
  addUser: (user: object) => ({
    type: types.register,
    payload: user,
  }),
  logIn: (user: boolean) => ({
    type: types.logIn,
    payload: user,
  }),
  logOut: () =>
    void {
      type: types.logOut,
      payload: false,
    },
};
