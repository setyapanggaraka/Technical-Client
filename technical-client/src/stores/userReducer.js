const initialState = {
  users: [],
  user: {},
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "users/setUsers":
      return { ...state, users: action.payload };
    case "user/setUser":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
