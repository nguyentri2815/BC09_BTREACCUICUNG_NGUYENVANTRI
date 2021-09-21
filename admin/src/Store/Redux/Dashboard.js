import { type } from "../Action/type";

const Dashboard = {
  listPage: [],
};
const reducer = (state = Dashboard, action) => {
  switch (action.type) {
    case type.GET_DASHBOARD:
      console.log("payload", action.payload);
      state.listPage = action.payload;
      return { ...state };
    case type.GET_ID:
      state.listPage = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
