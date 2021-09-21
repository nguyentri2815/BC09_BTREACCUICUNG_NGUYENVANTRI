import { type } from "../Action/type";

let adminLogin = {};
const user = localStorage.getItem("user");
console.log(user);
if (user) {
  adminLogin = JSON.parse(user);
  console.log("adminLogin", adminLogin);
}

const Login = {
  login: adminLogin,
};
const reducer = (state = Login, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
export default reducer;
