let INITIAL_STATE = {
  modal: [],
  visible: false,
};

export const addModal = (itemsToAdd) => ({
  type: "ADD_MODAL",
  payload: itemsToAdd,
});

export const showModal = () => ({
  type: "SHOW_MODAL",
});

export const hideModal = () => ({
  type: "HIDE_MODAL",
});

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_MODAL":
      return {
        ...state,
        modal: action.payload,
      };
    case "SHOW_MODAL":
      return {
        ...state,
        visible: true,
      };
    case "HIDE_MODAL":
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
