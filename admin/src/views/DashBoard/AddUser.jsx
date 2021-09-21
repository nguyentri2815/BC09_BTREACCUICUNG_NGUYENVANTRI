import React from "react";
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
import { useDispatch } from "react-redux";
import { fetchAddUser } from "../../Store/Action/Dashboard";
import userStyle from "./Style";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("User is required"),
  matKhau: yup
    .string()
    .required("User is required")
    .min(5, "At least five characters")
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

const AddUser = () => {
  const { border, title } = userStyle();
  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    validationSchema: schema,
    validateOnMount: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formik.values);
    if (!formik.isValid) return;
    dispatch(
      fetchAddUser(formik.values, () => {
        history.push("/dashboard");
        alert("Đăng ký thành công");
      })
    );
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3" align="center" className={title}>
          NGƯỜI DÙNG MỚI
        </Typography>
        <div>
          <TextField
            className={border}
            fullWidth
            name="taiKhoan"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.taiKhoan}
            label="Tài khoản"
            variant="outlined"
          />
          {formik.touched.taiKhoan && (
            <p style={{ color: "red" }}>{formik.errors.taiKhoan}</p>
          )}
        </div>
        <div>
          <TextField
            className={border}
            fullWidth
            name="matKhau"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.matKhau}
            type="password"
            label="Mật khẩu"
            variant="outlined"
          />
          {formik.touched.matKhau && (
            <p style={{ color: "red" }}>{formik.errors.matKhau}</p>
          )}
        </div>
        <div>
          <TextField
            className={border}
            fullWidth
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            label="Email"
            variant="outlined"
          />
          {formik.touched.email && (
            <p style={{ color: "red" }}>{formik.errors.email}</p>
          )}
        </div>
        <div>
          <TextField
            className={border}
            fullWidth
            name="soDT"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.soDT}
            label="Số điện thoại"
            variant="outlined"
          />
          {formik.touched.soDT && (
            <p style={{ color: "red" }}>{formik.errors.soDT}</p>
          )}
        </div>
        <div>
          <TextField
            className={border}
            fullWidth
            name="maNhom"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.maNhom}
            label="Mã nhóm"
            variant="outlined"
          />
          {formik.touched.maNhom && (
            <p style={{ color: "red" }}>{formik.errors.maNhom}</p>
          )}
        </div>

        {/* <div>
          <TextField
            className={border}
            fullWidth
            name="maLoaiNguoiDung"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.maLoaiNguoiDung}
            label="Loại người dùng"
            variant="outlined"
          />
          {formik.touched.maLoaiNguoiDung && (
            <p style={{ color: "red" }}>{formik.errors.maLoaiNguoiDung}</p>
          )}
        </div> */}

        <div>
          Mã loại người dùng
          <RadioGroup
            aria-label="gender"
            onChange={formik.handleChange}
            name="maLoaiNguoiDung"
          >
            <FormControlLabel
              value="KhachHang"
              control={<Radio />}
              label="Khách hàng"
            />
            <FormControlLabel
              value="QuanTri"
              control={<Radio />}
              label="Quản trị"
            />
          </RadioGroup>
        </div>
        <div>
          <TextField
            className={border}
            fullWidth
            name="hoTen"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.hoTen}
            label="Họ tên"
            variant="outlined"
          />
          {formik.touched.hoTen && (
            <p style={{ color: "red" }}>{formik.errors.hoTen}</p>
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
              dispatch(
                fetchAddUser(formik.value, () => {
                  history.push("/dashboard");
                })
              );
            }}
          >
            Sign Up
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default AddUser;
