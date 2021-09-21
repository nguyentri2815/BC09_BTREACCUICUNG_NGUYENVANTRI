import {
    Divider,
    List,
    ListItem,
    ListItemText
} from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../../HOCs/Layout";
class Profile extends Component {
  render() {
    return (
      <>
        <Layout>
          <div>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">
              <ListItem button>
                <b>Tài khoản đăng nhập : </b>
                <ListItemText primary={this.props.me?.taiKhoan} />
              </ListItem>
              <ListItem button>
                <b>Họ và tên : </b>
                <ListItemText primary={this.props.me?.hoTen} />
              </ListItem>
              <ListItem button>
                <b>Số điện thoại : </b>
                <ListItemText primary={this.props.me?.soDT} />
              </ListItem>
              <ListItem button>
                <b>Mã loại người dùng : </b>
                <ListItemText primary={this.props.me?.maLoaiNguoiDung} />
              </ListItem>
              <ListItem button>
                <b>Mã nhóm : </b>
                <ListItemText primary={this.props.me?.maNhom} />
              </ListItem>
              <ListItem button>
                <b>Email : </b>
                <ListItemText primary={this.props.me?.email} />
              </ListItem>
            </List>
          </div>
        </Layout>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    me: state.me,
  };
};
export default connect(mapStateToProps)(Profile);
