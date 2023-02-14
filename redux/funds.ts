interface Funds {
  funds: Array<Content>;
}

interface Content {
  name: string;
  value: number;
  graph: (src: string) => string;
  icon: (src: string) => string;
  plotBackground: (src: string) => string;
  color: string;
}

export const types = {
  create: "funds/create",
};

const initialState = {
  funds: [
    {
      name: "Wind Fund",
      value: 1032.23,
      graph: require("../assets/images/wind-fund.png"),
      icon: require("../assets/images/wind-icon.png"),
      plotBackground: require("../assets/images/wind-plot-bg.png"),
      color: "#4A88D0",
    },
    {
      name: "Solar Fund",
      value: 986.61,
      graph: require("../assets/images/solar-fund.png"),
      icon: require("../assets/images/solar-icon.png"),
      plotBackground: require("../assets/images/solar-plot-bg.png"),
      color: "#F0A719",
    },
    {
      name: "Nature Fund",
      value: 1122.95,
      graph: require("../assets/images/nature-fund.png"),
      icon: require("../assets/images/nature-icon.png"),
      plotBackground: require("../assets/images/nature-plot-bg.png"),
      color: "#0FDF8F",
    },
  ],
};

export default function funds(state = initialState, action: any) {
  switch (action.type) {
    case types.create:
      return { ...state, funds: [...state.funds, action.payload] };
    default:
      return state;
  }
}

export const Funds = {
  createFund: (fund: object) => ({
    type: types.create,
    payload: fund,
  }),
};
