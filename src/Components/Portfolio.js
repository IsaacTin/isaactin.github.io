import React from 'react';
import {Link, useLocation} from "react-router-dom";
import { motion } from 'framer-motion';

const Portfolio =({data}) => {
    if(data){
      var projects = data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} target="_blank" title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    const location = useLocation();
    if (location.state) {
      var root = location.state.root;
    } else {
      var root = 4;
    }

    const pageTransition = 
      root > 4 ? { 
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
      } : root < 4 ? {
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
      <section id="portfolio">

        <nav id="nav-wrap">

          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#portfolio" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
            <li>
              <Link to={{
                  pathname: "/",
                  state: {
                    root: 4
                  }
              }}><a>Home</a></Link>
            </li>
            <li >
              <Link to={{
                  pathname: "/About",
                  state: {
                    root: 4,
                  }
              }}><a>About</a></Link>
            </li>
            <li >
              <Link to={{
                  pathname: "/Resume",
                  state: {
                    root: 4,
                  }
              }}><a>Resume</a></Link>
            </li>
            <li className="current">
              <Link to={{
                  pathname: "/Portfolio",
                  state: {
                    root: 4,
                  }
              }}><a>Works</a></Link>
            </li>
            <li >
              <Link to={{
                  pathname: "/Media",
                  state: {
                    root: 4,
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
        className="row"
      >

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </motion.div>

      <p className="scrollright">
      <Link to={{
         pathname: "/Media",
         state: {
            root: 4,
         }
      }}><a><i className="icon-right-circle"></i></a></Link>
      </p>
      <p className="scrollleft">
      <Link to={{
         pathname: "/Resume",
         state: {
           root: 4,
         }
      }}><a><i className="icon-left-circle"></i></a></Link>
      </p>
   </section>
  );
}

export default Portfolio;
