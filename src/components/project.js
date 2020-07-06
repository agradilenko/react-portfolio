import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  Cell,
} from "react-mdl";
import {Link} from "@material-ui/core";

class Project extends Component {
  render() {
    return (
        <Cell col={4}>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <Link href = {this.props.demoUrl}>
            <CardTitle
              style={{
                color: "black",
                height: "450px",
                padding: "10px",
                background: `url(${this.props.backgroundUrl}) center / cover`,
              }}
            >
              {this.props.projectName}
            </CardTitle>
            </Link>
            <CardText>{this.props.projectDescription}</CardText>
            <CardActions border>
              <Link href = {this.props.gitUrl}>
              <Button colored>GitHub</Button>
              </Link>
              <Link href = {this.props.demoUrl}>
              <Button colored>Live Demo</Button>
              </Link>
            </CardActions>
          </Card>
        </Cell>
    );
  }
}

export default Project;