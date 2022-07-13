import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/General/Header';
import Footer from './components/General/Footer';
import TaskCard from './components/TaskCard';
import TaskDetails from './components/TaskDetails';
import Login from './components/Login';

import PostTaskPage from './pages/PostTaskPage/PostTaskPage'
import Button from './components/Button/Button';
import Modal from './components/Modal';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
    show:false,
    showPostTask:false,
    showLogIn:false,
    token:null,
    userName:null,
    }
  }

  showModal = e => {
      this.setState({
        show: !this.state.show
      })
    }
  // showPostTask=(e)=>{
  //     this.setState({
  //       showPostTask: !this.state.showPostLogIn
  //     })
  // }
  // showPostLogIn=(e)=>{
  //     this.setState({
  //       showLogIn: !this.state.showLogin
  //     })
  // }


  render(){
    return(    
    <div>
      <main>
        <Router>
          <Switch>
            <Route path="/stella" exact component={TaskCard} />
            <Route path="/td" exact component={TaskDetails} />
            <Route path="/md" exact component={Modal} />
          </Switch>
        </Router>
          <button onClick={(e) => {this.showModal()}}> Log in </button>
          <br/>
          
            <div>
              User Name:{this.state.userName}<br/>
              Token:{this.state.token}              
            </div>

          {/* <br/>
          <button onClick={(e) => {this.showLogIn()}}> Log in </button>
          <br/> */}
          <br/>
          
          <Modal onClose={this.showModal} show={this.state.show}
          title={"Log in"} type={"logIn"} content={<Login/>} />

          {/* <Modal onClose={this.showModal} show={this.state.showModal&&this.state.showPostTask}
          title={"Post a task"} type={"postTask"} content={<PostTaskPage/>} /> */}
      </main>
    </div>
    );
  }
}
export default App;
