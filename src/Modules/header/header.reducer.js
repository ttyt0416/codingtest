let INITIAL_STATE = {
  header: ["testing"],
};

export const addHeader = (itemsToAdd) => ({
  type: "ADD_HEADER",
  payload: itemsToAdd,
});

export const resetHeader = () => ({
  type: "RESET_HEADER",
});

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_HEADER":
      return {
        ...state,
        header: action.payload,
      };
    case "RESET_HEADER":
      return {
        ...state,
        header: [],
      };

    default:
      return state;
  }
};

export default headerReducer;
