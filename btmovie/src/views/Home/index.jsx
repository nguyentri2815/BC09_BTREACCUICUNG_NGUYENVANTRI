import React, { Component } from "react";
import { Container, Typography, Grid, withStyles} from "@material-ui/core";
import Course from "../../components/Course";
import Pagination from '@material-ui/lab/Pagination';

import { connect } from "react-redux";
import { fetchCourses } from "../../store/actions/course";
import Layout from "../../HOCs/Layout";
import styles from "./style";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      page:1
    }
  }
  
  handleChange = (event, value) => {
    this.setState({
      page:value
    })
    this.props.dispatch(fetchCourses(value));
  };
  render() {
    const { spacingPage } = this.props.classes;
    return (
      <Layout>
        <Typography component="h1" variant="h3" align="center">
          Danh sách phim
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {this.props.courses.items?.map((item) => {
              return (
                <Grid key={item.maKhoaHoc} item xs={12} sm={6} md={3}>
                  <Course item={item} />
                </Grid>
              );
            })}
          </Grid>
          <Pagination className={spacingPage } color="primary" size="large" count={this.props.totalPages} page={this.state.page} onChange={this.handleChange} />
        </Container>
      </Layout>
    );
  }

  //async await : biến asynchronous thành synchronous

  async componentDidMount() {
    this.props.dispatch(fetchCourses(1));
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.course.courses,
    totalPages:state.course.courses.totalPages,
  };
};

export default connect(mapStateToProps)((withStyles(styles)(Home)));
