import React, { useCallback, useEffect } from "react";
import {
  TextField,
  Typography,
  Button,
  Container,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchEditUser, fetchIDUser } from "../../Store/Action/Dashboard";
import userStyle from "./Style";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("User is required"),
  matKhau: yup
    .string()
    .required("User is required")
    .min(10, "At least ten characters")
    .max(20, "No more than twenty characters"),

  email: yup.string().required("Email is required").email("Email is invalid"),
  soDT: yup
    .string()
    .required("Phone is required")
    .matches(/^[0-9]+$/g, "Phone must be number"),
  maNhom: yup.string().required("Group code is required"),
  maLoaiNguoiDung: yup.string().required("User code is required"),
  hoTen: yup.string().required("User is required"),
});

const EditUser = (props) => {
  const { border, title } = userStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  const id = props.match.params.id;

  const userID = useSelector((state) => {
    return state.Dashboard.listPage;
  });
  console.log("userID", userID);

  useEffect(() => {
    dispatch(fetchIDUser(id));
  }, [id, dispatch]);

  const formik = useFormik({
    initialValues: {
      taiKhoan: userID?.taiKhoan,
      matKhau: userID?.matKhau,
      email: userID?.email,
      soDT: userID?.soDT,
      maNhom: "GP01",
      maLoaiNguoiDung: userID?.maLoaiNguoiDung,
      hoTen: userID?.hoTen,
    },
    validationSchema: schema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formik.isValid) return;
    dispatch(fetchEditUser(formik.values));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3" align="center" className={title}>
          CẬP NHẬT THÔNG TIN
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <label style={{ width: 160, paddingTop: 17 }}>Tài Khoản</label>
          <TextField
            disabled="true"
            className={border}
            fullWidth
            name="taiKhoan"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.taiKhoan}
            // label="Tài khoản"
            variant="outlined"
          />
          {formik.touched.taiKhoan && (
            <p style={{ color: "red" }}>{formik.errors.taiKhoan}</p>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <label style={{ width: 160, paddingTop: 17 }}>Họ tên</label>
          <TextField
            className={border}
            fullWidth
            name="hoTen"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.hoTen}
            // label="Họ tên"
            variant="outlined"
          />
          {formik.touched.hoTen && (
            <p style={{ color: "red" }}>{formik.errors.hoTen}</p>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <label style={{ width: 160, paddingTop: 17 }}>Mật khẩu</label>
          <TextField
            className={border}
            fullWidth
            name="matKhau"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.matKhau}
            type="password"
            // label="Mật khẩu"
            variant="outlined"
          />
          {formik.touched.matKhau && (
            <p style={{ color: "red" }}>{formik.errors.matKhau}</p>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <label style={{ width: 160, paddingTop: 17 }}>Email</label>
          <TextField
            className={border}
            fullWidth
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            // label="Email"
            variant="outlined"
          />
          {formik.touched.email && (
            <p style={{ color: "red" }}>{formik.errors.email}</p>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <label style={{ width: 160, paddingTop: 17 }}>Số điện thoại</label>
          <TextField
            className={border}
            fullWidth
            name="soDT"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.soDT}
            // label="Số điện thoại"
            variant="outlined"
          />
          {formik.touched.soDT && (
            <p style={{ color: "red" }}>{formik.errors.soDT}</p>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <label style={{ width: 160, paddingTop: 17 }}>Mã nhóm</label>
          <TextField
            className={border}
            fullWidth
            name="maNhom"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.maNhom}
            // label="Mã nhóm"
            variant="outlined"
          />
          {formik.touched.maNhom && (
            <p style={{ color: "red" }}>{formik.errors.maNhom}</p>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <label style={{ width: 160, paddingTop: 17 }}>Chức vụ</label>
          <TextField
            className={border}
            fullWidth
            name="maLoaiNguoiDung"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.maLoaiNguoiDung}
            // label="Loại người dùng"
            variant="outlined"
          />
          {formik.touched.maLoaiNguoiDung && (
            <p style={{ color: "red" }}>{formik.errors.maLoaiNguoiDung}</p>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            onClick={() => {
              if (!formik.isValid) {
                alert("Thông tin chưa cập nhật");
              } else {
                dispatch(
                  fetchEditUser(formik.values, () => {
                    history.push("/dashboard");
                    alert("Cập nhật thành công");
                  })
                );
              }
            }}
          >
            CẬP NHẬT THÀNH CÔNG
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default EditUser;
