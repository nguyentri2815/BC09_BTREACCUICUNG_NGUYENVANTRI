import axios from "axios";
import { createAction } from "./index";
import { actionType } from "./type";

export const signIn = (userLogin, callback) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        data: userLogin,
      });

      dispatch(createAction(actionType.SET_ME, res.data));
      localStorage.setItem("t", res.data.accessToken);
      alert('Đăng nhập thành công!!')
      callback();
    } catch (err) {
      console.log({ ...err });
      alert(err.response.data);
    }
  };
};

export const fetchMe = async (dispatch) => {
  try {
    const res = await axios({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung",
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("t"),
      },
    });

    dispatch(createAction(actionType.SET_ME, res.data));
  } catch (err) {}
};
