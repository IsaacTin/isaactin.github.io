import React from 'react';
import {Link, useLocation} from "react-router-dom";
import { motion } from 'framer-motion';

const Resume =({data}) => {
    if(data){
      var skillmessage = data.skillmessage;
      var education = data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    const location = useLocation();
    if (location.state) {
      var root = location.state.root;
    } else {
      var root = 3;
    }

    const pageTransition = 
      root > 3 ? { 
         in: {
            opacity: 1,
            x: 0
         }, 
         out: {
            opacity: 0,
            x: "100vh"
         },
         initial: {
            opacity: 0,
            x: "-100vh"
         }
      } : root < 3 ? {
         in: {
            opacity: 1,
            x: 0
         }, 
         out: {
            opacity: 0,
            x: "100vh"
         },
         initial: {
            opacity: 0,
            x: "100vh"
         }
      } : {
         in: {
            opacity: 1,
            x: 0
         }, 
         out: {
            opacity: 1,
         },
         initial: {
            opacity: 1,
         }
      };

    return (
      <section id="resume">

        <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
         <a className="mobile-btn" href="#resume" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
            <li>
               <Link to={{
                  pathname: "/",
                  state: {
                    root: 3
                  }
               }}><a>Home</a></Link>
            </li>
            <li >
               <Link to={{
                  pathname: "/About",
                  state: {
                     root: 3,
                  }
               }}><a>About</a></Link>
            </li>
            <li className="current">
               <Link to={{
                  pathname: "/Resume",
                  state: {
                     root: 3,
                  }
               }}><a>Resume</a></Link>
            </li>
            <li >
               <Link to={{
                  pathname: "/Portfolio",
                  state: {
                     root: 3,
                  }
               }}><a>Works</a></Link>
            </li>
            <li >
               <Link to={{
                  pathname: "/Media",
                  state: {
                     root: 3,
                  }
               }}><a>Media</a></Link>
            </li>
        </ul>

        </nav>

      <motion.div 
         initial="initial"
         animate="in"
         exit="out"
         variants={pageTransition}
      >
      

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
    </motion.div>

    <p className="scrollright">
      <Link to={{
         pathname: "/Portfolio",
         state: {
            root: 3,
         }
      }}><a><i className="icon-right-circle"></i></a></Link>
      </p>
      <p className="scrollleft">
      <Link to={{
         pathname: "/About",
         state: {
           root: 3
         }
      }}><a><i className="icon-left-circle"></i></a></Link>
      </p>

   </section>
  );
}

export default Resume;
