import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { motion } from 'framer-motion';


const Header = ({data}) => {

    if(data){
      var name = data.name;
      var occupation= data.occupation;
      var description= data.description;
      var nationality= data.address.nationality;
      var networks= data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }


    const pageTransition = 
      { 
         in: {
            opacity: 1,
            x: 0
         }, 
         out: {
            opacity: 0,
         },
         initial: {
            opacity: 0,
            x: "-100vh"
         }
      };

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current">
               <Link to={{
                  pathname: "/",
               }}><a>Home</a></Link>
            </li>
            <li >
               <Link to={{
                  pathname: "/About",
                  state: {
                     root: 1,
                  }
               }}><a>About</a></Link>
            </li>
            <li >
               <Link to={{
                  pathname: "/Resume",
                  state: {
                     root: 1,
                  }
               }}><a>Resume</a></Link>
            </li>
            <li >
               <Link to={{
                  pathname: "/Portfolio",
                  state: {
                     root: 1,
                  }
               }}><a>Works</a></Link>
            </li>
            <li >
               <Link to={{
                  pathname: "/Media",
                  state: {
                     root: 1,
                  }
               }}><a>Media</a></Link>
            </li>
            {/*<li >
               <Link to={{
                  pathname: "/Testimonials",
                  state: {
                     root: 1,
                  }
               }}><a>Testimonials</a></Link>
            </li>
            <li >
               <Link to={{
                  pathname: "/Contact",
                  state: {
                     root: 1,
                  }
               }}><a>Contacts</a></Link>
            </li>*/}
         </ul>

      </nav>
      
      <motion.div
         initial="initial"
         animate="in"
         exit="out"
         variants={pageTransition}
         className="row banner"
      >
         <div className="banner-text">
            <h1 className="responsive-headline"> {name}</h1>
            <h3>I'm a {nationality} based <span>{occupation}</span>, {description}.</h3>
            <hr />
         </div>
      </motion.div>

      <p className="scrollright">
      <Link to={{
         pathname: "/About",
         state: {
            root: 1,
         }
      }}><a><i className="icon-right-circle"></i></a></Link>
      </p>
   </header>
    );
}

export default Header;
