import { Button, Container, TextField } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import { signIn } from "../../store/actions/auth";

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValue: {
        taiKhoan: "",
        matKhau: "",
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

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(
      signIn(this.state.formValue, () => {
        this.props.history.push("/");
      })
    );
  };

  handleSetDefaultLogin = () => {
    const userLogin = {
      taiKhoan: "van t",
      matKhau: "123",
    };

    this.setState({
      formValue: {
        taiKhoan: userLogin.taiKhoan,
        matKhau: userLogin.matKhau,
      },
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div>
          <h1 style={{ textAlign: "center" }}>Đăng Nhập</h1>
          <Container maxWidth="sm">
            <form onSubmit={this.handleSubmit}>
              <div style={{ marginBottom: 30 }}>
                <TextField
                  name="taiKhoan"
                  onChange={this.handleChange}
                  value={this.state.formValue.taiKhoan}
                  fullWidth
                  label="Tài khoản"
                  variant="outlined"
                />
              </div>
              <div style={{ marginBottom: 30 }}>
                <TextField
                  name="matKhau"
                  onChange={this.handleChange}
                  value={this.state.formValue.matKhau}
                  type="password"
                  fullWidth
                  label="Mật khẩu"
                  variant="outlined"
                />
              </div>

              <div>
                <Button type="submit" variant="contained" color="primary">
                  Đăng Nhập
                </Button>
                <Button
                  onClick={this.handleSetDefaultLogin}
                  type="button"
                  variant="contained"
                  color="secondary"
                >
                  Set người dùng mặc định
                </Button>
              </div>
            </form>
          </Container>
        </div>
      </div>
    );
  }
}

export default connect()(Signin);
