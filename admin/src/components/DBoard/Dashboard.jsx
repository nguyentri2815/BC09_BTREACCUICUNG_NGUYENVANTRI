import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router";
import { Box, Container, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { fetchDelUser } from "../../Store/Action/Dashboard";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  title: {
    margin: "25px 0",
  },
  pagi: {
    margin: "25px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  th: {
    fontWeight: "bolder",
    fontSize: 20,
  },
  span: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 12,
  },
});

const DashBoard = ({ user, setUsePage }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  return (
    <Container>
      <Box display="flex" alignItems="center">
        <Typography
          variant="h4"
          align="center"
          className={classes.title}
        >
          DANH SÁCH NGƯỜI DÙNG
        </Typography>
        <Button
          color="primary"
          variant="contained"
          style={{ marginLeft: 10 }}
          onClick={() => {
            history.push("/add");
          }}
        >
          Thêm mới
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className={classes.th}>
                STT
              </TableCell>
              <TableCell align="center" className={classes.th}>
                Tài khoản
              </TableCell>
              <TableCell align="center" className={classes.th}>
                Mật khẩu
              </TableCell>
              <TableCell align="center" className={classes.th}>
                Số điện thoại
              </TableCell>
              <TableCell align="center" className={classes.th}>
                Email
              </TableCell>
              <TableCell align="center" className={classes.th}>
                Loại người dùng
              </TableCell>
              <TableCell align="center" className={classes.th}>
                Chỉnh sửa
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user?.items?.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{item.taiKhoan}</TableCell>
                <TableCell align="center">{item.matKhau}</TableCell>
                {(item.soDT === "") & (item.soDT === null) ? (
                  <TableCell align="center">{item.soDT}</TableCell>
                ) : (
                  <span className={classes.span}>Đang cập nhật</span>
                )}
                {/* <TableCell align="center">{item.soDT}</TableCell> */}
                <TableCell align="center">{item.email}</TableCell>
                <TableCell align="center">{item.maLoaiNguoiDung}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: 10 }}
                    onClick={() => {
                      history.push(`/edit/${item.taiKhoan}`);
                    }}
                  >
                    sửa
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      if (dispatch(fetchDelUser(item.taiKhoan))) {
                        alert("Xóa thành công");
                        window.location.reload();
                      }
                    }}
                  >
                    xóa
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        className={classes.pagi}
        count={user?.totalPages}
        onChange={(e) => setUsePage(e.target.textContent)}
      />
    </Container>
  );
};

export default DashBoard;
