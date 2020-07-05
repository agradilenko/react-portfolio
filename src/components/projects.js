import React, { Component } from 'react';
import { Tabs, Tab, Grid} from 'react-mdl';
import Project from "./project";


class Projects extends Component {
  render() {
    return(
      <div>
        <Tabs>
          <Tab>My React Projects</Tab>
        </Tabs>
              {/*<div className="content">*/}
                <div className="projects-grid">
                  <Grid>
                  <Project
                  backgroundUrl = "https://calculators-online.ru/assets/images/Canon-HS-121TGA.jpg"
                  projectName = "Calculator"
                  projectDescription = "Simple calculator built with React"
                  gitUrl ="https://github.com/agradilenko/react-calculator"
                  demoUrl ="https://agradilenko.github.io/react-calculator/"
                />
                <Project
                  backgroundUrl = "https://e7.pngegg.com/pngimages/761/436/png-clipart-round-white-stop-watch-stopwatch-icon-stopwatch-photography-interiors.png"
                  projectName = "Stopwatch"
                  projectDescription = "Simple stopwatch built with React"
                  gitUrl ="https://github.com/agradilenko/react-stopwatch"
                  demoUrl ="https://agradilenko.github.io/react-stopwatch/index.html"

                />
                <Project
                  backgroundUrl = "https://www.tnado.com/includes/medias/2019/06/javascript-move-div-element-tnado-seo-and-amp-cms.jpg"
                  projectName = "React-moving-div"
                  projectDescription = "Simple block, that follows the cursor"
                  gitUrl ="https://github.com/agradilenko/react-moving-div"
                  demoUrl = "https://agradilenko.github.io/react-moving-div/"
                />
                <Project
                  backgroundUrl = "https://almin.js.org/docs/assets/todomvc.png"
                  projectName = "Redux-todos"
                  projectDescription = "Simple todos app built with React-Redux"
                  gitUrl ="https://github.com/agradilenko/redux-todos"
                  demoUrl ="https://agradilenko.github.io/redux-todos/"
                />
              {/*</div>*/}
          </Grid>
  </div>
      </div>
    )
  }
}

export default Projects;
