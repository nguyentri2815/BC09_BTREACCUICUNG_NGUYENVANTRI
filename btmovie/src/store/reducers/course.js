import { actionType } from "../actions/type";

const initialState = {
  courses: [],
  courseDetail: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_COURSES:
      state.courses = action.payload;
      return { ...state };
    case actionType.SET_COURSEDETAIL:
      state.courseDetail = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
