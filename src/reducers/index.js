export default (state, action) => {
  switch (action.type) {
    case "SET_USER_PROFILE":
      return {
        ...state,
        userName: action.userName,
        avatar: action.avatar
      };
    default:
      return state;
  }
};
