import axios from "axios";
import { createAction } from ".";
import { actionType } from "./type";

//tạo ra 1 async action để fetch ds khoá học
export const fetchCourses = (page) => {
  //side-effect: những hành động thay đổi 1 state nằm ngoài scope của function
  return async (dispatch) => {
    try {
      const res = await axios({
        url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang",
        method: "GET",
        params: {
          maNhom: "GP01",
          soTrang:page||1,
          soPhanTuTrenTrang:"10"
        },
      });
      dispatch(createAction(actionType.SET_COURSES, res.data.content));
    } catch (err) {
      console.log(err);
    }
  }
};

export const fetchCourse = (maPhim) => {
  // return asyn action
  return async (dispatch) => {
    try {
      const res = await axios({
        url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayThongTinPhim?",
        method: "GET",
        params: {
          MaPhim: maPhim,
        },
      });
      // 1.dispatch action lên store để lưu cái detail
      //  (tạo dữ liệu courseDetail trên reducer, createAction, actionType)
      console.log(res);
      dispatch(createAction(actionType.SET_COURSEDETAIL, res.data.content));
      // 2. ở component Detail, lấy dữ liệu xuống và show ra màn hình (hình ảnh, 
      // tên khoá, mô tả, người tạo...)
      
    } catch (err) {
      console.log(err);
    }
  };
};
