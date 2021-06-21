import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Media from './Components/Media';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import {AnimatePresence, motion } from 'framer-motion';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
          <AnimatePresence>
            <Switch>
              <Route exact path="/" render={(props) => <Header data={this.state.resumeData.main}/>}/>
              <Route path="/About" render={(props) => <About data={this.state.resumeData.main}/> } />
              <Route path="/Resume" render={(props) => <Resume data={this.state.resumeData.resume}/> } />
              <Route path="/Portfolio" render={(props) => <Portfolio data={this.state.resumeData.portfolio}/>} />
              <Route path="/Testimonials" render={(props) => <Testimonials data={this.state.resumeData.testimonials}/> } />
              <Route path="/Media" render={(props) => <Media data={this.state.resumeData.main}/> } />
              <Route path="/Footer" render={(props) => <Footer data={this.state.resumeData.main}/> } />
            </Switch>
          </AnimatePresence>
      </div>
    );
  }
}

export default App;
