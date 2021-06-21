import React, { Component } from 'react';
import {Link, useLocation} from "react-router-dom";
import { motion } from 'framer-motion';
import aws from '../Images/aws.png';
import react from '../Images/react.png';
import psql from '../Images/psql.png';
import mongodb from '../Images/mongodb.png';
import express from '../Images/express.png';
import node from '../Images/node.png';
import firebase from '../Images/firebase.png';





const About = ({data}) => {

    if(data){
      var name = data.name;
      var profilepic= "images/"+data.image;
      var bio = data.bio;
      var city = data.address.city;
      var phone= data.phone;
      var email = data.email;
      var resumeDownload = data.resumedownload;
    }

    const location = useLocation();
    if (location.state) {
      var root = location.state.root;
    } else {
      var root = 2;
    }


    const pageTransition = 
      root > 2 ? { 
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
      } : root < 2 ? {
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
   
      <section id="about">

         <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
         <a className="mobile-btn" href="#about" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
         <li >
               <Link to={{
                  pathname: "/",
                  state : {
                     root: 2
                  }
               }}><a>Home</a></Link>
            </li>
            <li className="current">
               <Link to={{
                  pathname: "/About",
                  state: {
                     root: 2,
                  }
               }}><a>About</a></Link>
            </li>
            <li >
               <Link to={{
                  pathname: "/Resume",
                  state: {
                     root: 2,
                  }
               }}><a>Resume</a></Link>
            </li>
            <li >
               <Link to={{
                  pathname: "/Portfolio",
                  state: {
                     root: 2,
                  }
               }}><a>Works</a></Link>
            </li>
            <li >
               <Link to={{
                  pathname: "/Media",
                  state: {
                     root: 2,
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
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Profile pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-eye"></i>View Resume</a>
                  </p>
                  <p>
                     <a href={resumeDownload} download={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{city}</span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
                  
                  <h2>Interests</h2>
                  <p className="logos">
						   <img src={aws}/>
                     <img src={react}/>
                     <img src={psql}/>
                     <img src={mongodb}/>
                     <img src={express}/>
                     <img src={node}/>
                     <img src={firebase}/>
					   </p>
               </div>
            </div>
         </div>
      </motion.div>
      <p className="scrollright">
      <Link to={{
         pathname: "/Resume",
         state: {
            root: 2,
         }
      }}><a><i className="icon-right-circle"></i></a></Link>
      </p>
      <p className="scrollleft">
      <Link to={{
         pathname: "/",
      }}><a><i className="icon-left-circle"></i></a></Link>
      </p>

   </section>
    );
}

export default About;
