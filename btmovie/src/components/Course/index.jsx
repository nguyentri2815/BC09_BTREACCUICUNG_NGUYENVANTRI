import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  withStyles,
} from "@material-ui/core";
import styles from "./style";
import { NavLink } from "react-router-dom";

class Course extends Component {
  render() {
    const { hinhAnh, biDanh, moTa, maPhim } = this.props.item;
    const { img, title } = this.props.classes;

    return (
      <Card>
        <CardActionArea>
          <CardMedia className={img} image={hinhAnh} title={biDanh} />
          <CardContent>
            <Typography
              className={title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {biDanh}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {moTa.substr(0, 100) + "..."}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <NavLink to={"/detail/" + maPhim}>
            <Button size="small" color="primary">
              Chi tiết
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Course);
