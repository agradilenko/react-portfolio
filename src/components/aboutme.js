import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <img
              src="https://sun9-36.userapi.com/c638219/v638219870/4fa05/LF6dRL0BAzk.jpg"
              alt="avatar"
              className="avatar-img"
            />

            <h2>Gradilenko Artem</h2>
            <h4 style={{ color: "grey" }}>Student, Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Russia, Nizhny Novgorod</p>
            <h5>Phone</h5>
            <p>89875308414</p>
            <h5>Email</h5>
            <p>artem.gradilenko@gmail.com</p>
            <h5>Web</h5>
            <a
              href="https://github.com/agradilenko"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="aboutme-right-col" col={8}>
            <h2>About me</h2>
            <article className="aboutme-post">
              <h5>Intro</h5>
              <p>
                My name is Artem. I am studying in the third course at Nizhny
                Novgorod State Technical University.
              </p>
              <p>
                I have been interested in web technologies since I graduated my
                school
              </p>
            </article>
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <article className="aboutme-post">
              <h5>I like</h5>
              <ul>
                <li>Space</li>
                <li>Books</li>
                <li>Summer</li>
                <li>Sci-fi films</li>
                <li>Rock music</li>
              </ul>
            </article>
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <article className="aboutme-post">
              <h5>I dream of</h5>
              <ul>
                <li>doing better</li>
                <li>always finding inspiration</li>
                <li>find a wonderful job</li>
                <li>take a trip around the world</li>
                <li>visit Juventus football match</li>
              </ul>
            </article>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
