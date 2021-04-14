import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MainPageTitlebar } from './component/MainPageTitlebar';
import { Footer } from './component/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Index } from './page/Index/Index';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <MainPageTitlebar />
      <div style={{ padding: "150px 100px 0" }}>
        <Switch>
          <Route path="/" exact component={Index} />
          {/* <Route path="/books" component={Books} /> */}
          {/* <Route path="/electronics" component={Electronics} /> */}
        </Switch>
      </div>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
