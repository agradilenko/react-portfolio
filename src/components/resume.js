import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <img
            src="https://sun9-36.userapi.com/c638219/v638219870/4fa05/LF6dRL0BAzk.jpg"
            alt="avatar"
            className="avatar-img"
            />

            <h2>Gradilenko Artem</h2>
            <h4 style={{color: 'grey'}}>Student, Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Russia, Nizhny Novgorod</p>
            <h5>Phone</h5>
            <p>89875308414</p>
            <h5>Email</h5>
            <p>artem.gradilenko@gmail.com</p>
            <h5>Web</h5>
            <a href="https://github.com/agradilenko" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2006}
              endYear={2017}
              schoolName="Gymnasium No. 184"
              schoolDescription="School where I studied for 11 years, found many friends and decided to become a programmer"
               />

               <Education
                 startYear={2017}
                 endYear={2021}
                 schoolName="Nizhny Novgorod State Technical University"
                 schoolDescription="Nizhny Novgorod State Technical University (Russian: Нижегородский государственный технический университет им. Р. Е. Алексеева, NNSTU) is a public technical university in Nizhny Novgorod, Russia, founded in 1917. The university was renamed in honour of a famous alumnus, engineer Rostislav Alexeyev, in 1992."
                  />
            <Education
              startYear={2019}
              endYear={2019}
              schoolName="FPK UNN"
              schoolDescription="Full javascript course"
            />

            <Education
              startYear={2020}
              endYear={2020}
              schoolName="NIIT"
              schoolDescription="NIIT React course"
            />
            <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="HTML/CSS"
                progress={50}
                />
                <Skills
                  skill="Javascript"
                  progress={40}
                  />
                  <Skills
                    skill="React"
                    progress={25}
                    />
                    <Skills
                      skill="SQL"
                      progress={40}
                      />
            <Skills
              skill="English"
              progress={50}
            />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
