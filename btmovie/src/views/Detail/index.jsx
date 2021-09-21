import { withStyles, Box, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../../HOCs/Layout";
import { fetchCourse } from "../../store/actions/course";
import styles from "./style";
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const { biDanh, hinhAnh, maNhom, moTa, ngayKhoiChieu, tenPhim, trailer } =
      this.props.courseDetail || {};
    const { heightImg, box, header } = this.props.classes;
    return (
      <Layout>
        <Card>
          <Box className={box}>
            <Grid md={4}>
              <CardMedia className={heightImg} image={hinhAnh} title={maNhom} />
            </Grid>
            <Grid md={8}>
              <CardContent>
                <CardHeader
                  className={header}
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={tenPhim}
                />
                <Typography paragraph>
                  <b>NGÀY KHỞI CHIẾU:</b> {ngayKhoiChieu}
                </Typography>
                <Typography paragraph>
                  <b>MÔ TẢ:</b>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {moTa}
                </Typography>
                <Typography paragraph>TRAILER:</Typography>
                <iframe width={420} height={315} src={trailer} />
              </CardContent>
            </Grid>
          </Box>
        </Card>
      </Layout>
    );
  }

  componentDidMount() {
    // 1. lấy cái param id trên url => mã khoá học
    const courseId = this.props.match.params.id;

    // 2. dispatch async action fetchCourse lên middleware
    this.props.dispatch(fetchCourse(courseId));
  }
}

const mapStateToProps = (state) => {
  return {
    courseDetail: state.course.courseDetail,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Detail));
