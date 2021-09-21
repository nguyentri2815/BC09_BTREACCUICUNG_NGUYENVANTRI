import axios from "axios";
import { CreateAcion } from "./create";
import { type } from "./type";

export const fetchUserPage = (page) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=20`,
      });
      console.log("page", res.data.content);
      console.log("items", res.data.content.items);
      dispatch(CreateAcion(type.GET_DASHBOARD, res.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchAddUser = (value, callback) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        data: value,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      callback();
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchEditUser = (value, callback) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        data: value,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      callback();
      console.log("edit", res.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchDelUser = (value) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "DELETE",
        url: `http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${value}`,
        data: value,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log("dele", res.data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchIDUser = (value) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${value}`,
        data: value,
      });
      console.log("ID", res.data.content[0]);
      dispatch(CreateAcion(type.GET_ID, res.data.content[0]));
    } catch (err) {
      console.log(err);
    }
  };
};
