import { Button, Container, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useHistory } from "react-router";
import { fetchLogin } from "../../Store/Action/Login";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    margin: "25px 0",
  },
});

const schema = yup.object().shape({
  taiKhoan: yup.string().required("Vui lòng nhập tài khoàn "),
  matKhau: yup.string().required("Vui lòng nhập mật khẩu"),
});

const Login = () => {
  const [initValue, setinitValue] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: initValue,
    validationSchema: schema,
    validateOnMount: true,
  });

  const handleSumit = (e) => {
    e.preventDefault();
    dispatch(
      fetchLogin(initValue, () => {
        history.push("/dashboard");
      })
    );
  };

  const setDefaultAdmin = () => {
    setinitValue({
      ...initValue,
      taiKhoan: "123@admin",
      matKhau: "123123",
    });
  };
  const setDefaultUser = () => {
    setinitValue({
      ...initValue,
      taiKhoan: "1233211",
      matKhau: "1111111",
    });
  };

  const { title } = useStyles();
  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h3" align="center" className={title}>
          Đăng Nhập
        </Typography>
        <form onSubmit={handleSumit}>
          <div style={{ marginBottom: 30 }}>
            <TextField
              name="taiKhoan"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={initValue.taiKhoan}
              fullWidth
              label="Tài khoản"
              variant="outlined"
            />
            {formik.touched.taiKhoan && (
              <p style={{ color: "red" }}>{formik.errors.taiKhoan}</p>
            )}
          </div>
          <div style={{ marginBottom: 30 }}>
            <TextField
              name="matKhau"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={initValue.matKhau}
              type="password"
              fullWidth
              label="Mật khẩu"
              variant="outlined"
            />
            {formik.touched.matKhau && (
              <p style={{ color: "red" }}>{formik.errors.matKhau}</p>
            )}
          </div>
          <div>
            <Button type="submit" variant="contained" color="primary">
              Đăng Nhập
            </Button>
          </div>
        </form>
        <div
          style={{
            marginTop: 10,
          }}
        >
          <Button
            type="btn"
            onClick={setDefaultAdmin}
            variant="outlined"
            color="primary"
          >
            Set default admin
          </Button>
          <Button
            onClick={setDefaultUser}
            type="btn"
            variant="outlined"
            color="primary"
            style={{
              marginLeft: 10,
            }}
          >
            Set default user
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
