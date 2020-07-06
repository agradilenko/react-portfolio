import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={4} style = {{border: "solid 1px rgba(160,160,160,0.3)"}}>
            <Link to="/resume">
            <img
              src="https://sun9-36.userapi.com/c638219/v638219870/4fa05/LF6dRL0BAzk.jpg"
              alt="avatar"
              className="avatar-img"
            />
          </Link>

            <h2 style={{paddingTop: '1em'}}>Gradilenko Artem</h2>
            <h4 style={{color: 'grey'}}>Student, Programmer</h4>
          </Cell>
          <Cell col={8}>
            <article className="post" id="index">
              <header>
                <div className="title">
                  <p style={{fontSize: "36px", fontWeight: "bold"}}> React app written with modern Javascript.</p>
                </div>
              </header>
              <p style={{fontSize: "24px", fontWeight: "italic", paddingTop: "10px"}}> Welcome to my website. Please feel free to read more <Link to="/aboutme">about me</Link>,
                or you can check out my {' '}
                <Link to="/resume">resume</Link>, {' '}
                <Link to="/projects">projects</Link>, {' '}
              </p></article>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
