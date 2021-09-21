import { Button, Container, TextField, withStyles } from "@material-ui/core";
import React, { Component, Fragment } from "react";
import Header from "../../components/Header";
import styles from "./style";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDT: "",
        maNhom: "GP01",
      },
    };
  }

  handleChange = (event) => {
    this.setState({
      formValue: {
        ...this.state.formValue,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios({
        method: "POST",
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        data: this.state.formValue,
      });
      alert("Đăng kí thành công!!");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { formInput } = this.props.classes;
    return (
      <Fragment>
        <Header />
        <Container maxWidth="sm">
          <h1>Đăng Ký</h1>
          <form onSubmit={this.handleSubmit}>
            <div className={formInput}>
              <TextField
                name="taiKhoan"
                onChange={this.handleChange}
                fullWidth
                label="Tài khoản"
                variant="outlined"
              />
            </div>
            <div className={formInput}>
              <TextField
                name="matKhau"
                type="password"
                onChange={this.handleChange}
                fullWidth
                label="Mật khẩu"
                variant="outlined"
              />
            </div>
            <div className={formInput}>
              <TextField
                name="hoTen"
                onChange={this.handleChange}
                fullWidth
                label="Họ Tên"
                variant="outlined"
              />
            </div>
            <div className={formInput}>
              <TextField
                name="email"
                onChange={this.handleChange}
                fullWidth
                label="Email"
                variant="outlined"
              />
            </div>
            <div className={formInput}>
              <TextField
                name="soDT"
                onChange={this.handleChange}
                fullWidth
                label="Số ĐT"
                variant="outlined"
              />
            </div>
            <div>
              <Button type="submit" variant="contained" color="primary">
                Đăng Ký
              </Button>
            </div>
          </form>
        </Container>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Signup);

