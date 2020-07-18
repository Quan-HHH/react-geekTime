import React from 'react';
import './App.styl';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Course from './pages/course/Course';
import Discover from './pages/discover/Discover';
import Mine from './pages/mine/Mine';
import Study from './pages/study/Study';
import './assets/font/iconfont.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Discover} />
      <Route path="/course" component={Course} />
      <Route path="/study" component={Study} />
      <Route path="/Mine" component={Mine} />

      <div className="footer">
        <div>
          <Link to="/">
            <div>发现</div>
          </Link>
        </div>
        <div>
          <Link to="/course">
            <div>讲堂</div>
          </Link>
        </div>
        <div>
          <Link to="/study">
            <div>学习</div>
          </Link>
        </div>
        <div>
          <Link to="/mine">
            <div>我的</div>
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
