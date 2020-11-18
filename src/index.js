import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
// import { ContentProvider } from './components/ContentContext'

ReactDOM.render(
  <React.StrictMode>
      {/* <ContentProvider> */}
          <BrowserRouter>
            {/* <App /> */}

            <Switch>
              <Route path='/about-me'><AboutMe /></Route>
              <Route exact path='/'><App /></Route>
            </Switch>
          </BrowserRouter>
      {/* </ContentProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
