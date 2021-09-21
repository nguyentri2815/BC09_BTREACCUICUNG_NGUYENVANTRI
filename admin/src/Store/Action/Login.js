import axios from "axios";
import { CreateAcion } from "./create";
import { type } from "./type";

export const fetchLogin = (value, callback) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangNhap",
        data: value,
      });
      if (res.data.content.maLoaiNguoiDung === "QuanTri") {
        console.log("data", res.data.content);
        localStorage.setItem("token", res.data.content.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data.content));
        callback();
      } else {
        alert("Không có quyền đăng nhập");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
