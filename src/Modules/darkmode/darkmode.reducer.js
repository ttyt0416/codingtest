let INITIAL_STATE = {
  darkmode: "light",
};

export const toggleDarkmode = () => ({
  type: "TOGGLE_DARKMODE",
});

const darkmodeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_DARKMODE":
      return {
        ...state,
        darkmode: state.darkmode === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export default darkmodeReducer;
