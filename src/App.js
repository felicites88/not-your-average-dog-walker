import React, { Component } from 'react';
import './App.css';
import TabBar from './Components/TabBar/TabBar.js';
// import './images/happydog.png';
import { Route } from 'react-router';
import HomePage from './Components/HomePage/HomePage.js';
import ScheduleForm from './Components/ScheduleForm/ScheduleForm.js';
import ReviewsPage from './Components/ReviewsPage/ReviewsPage.js';
import ContactPage from './Components/ContactPage/ContactPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <header>
         <h1>Not Your Average Dog Walker</h1>
       </header>

        <Route path='/' 
          render={() => 
            <TabBar />
          }
        />

        <Route exact path='/'
          render={() =>
              <HomePage />
          }
        />

        <Route exact path='/reviews'
          render={() =>
            <ReviewsPage />
          }
        />

        <Route exact path='/contact'
          render={() =>
            <ContactPage />
          }
        />
        <Route exact path='/schedule'
          render={() =>
            <ScheduleForm />
          }
        />
        
      </div>
    );
  }
}

export default App;
