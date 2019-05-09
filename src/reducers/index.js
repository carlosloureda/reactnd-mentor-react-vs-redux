export default (state, action) => {
  switch (action.type) {
    case "SET_USER_PROFILE":
      let a = {
        ...state,
        userName: action.userName,
        avatar: action.avatar
      };
      console.log("The a: ", a);
      return a;
    default:
      return state;
  }
};
