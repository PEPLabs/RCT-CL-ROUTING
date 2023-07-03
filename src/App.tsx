import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomeRouteDemoComponent from './components/demo-components/home-demo-component';
import FeedDemoComponent from './components/demo-components/feed-demo-component';
import SettingsDemoComponent from './components/demo-components/settings-demo-component';
import ProfileTodoComponent from './components/todo-components/profile-todo-component';

function App() {
  return (
    <div className="App">

      {/* In React Router Dom, a "Link" tag is use to change the "route", a route is a predefined URL in your website's domain that renders a specific view. A view is essentially an arrangement of components to create an HTML page. New routes should be set up using "Route" tags, our Route tags are located in the App.tsx file in the src folder. Once there, you can see there that several routes defined inside of the "Routes" tag; note that the Routes tag must be define in the "BrowserRouter" tag, we happened to wrap our entire application in the BrowserRouter tag, you can see that in the index.tsx file. */}

      <a><Link to="/">Home</Link></a>
      <a><Link to="/path/feed">Feed</Link></a>
      <a><Link to="/path/settings">Settings</Link></a>


      <div className="section-container">
        {/* The "path" define the URL that triggers this route. The "element" defines which component displays for this route. */}
        <Routes>
          <Route path="/" element={<HomeRouteDemoComponent></HomeRouteDemoComponent>}></Route>
          <Route path="/path/feed" element={<FeedDemoComponent></FeedDemoComponent>}></Route>
          <Route path="/path/settings" element={<SettingsDemoComponent></SettingsDemoComponent>}></Route>
        </Routes>
      </div>

      <div>
        <a href="https://reactrouter.com/en/main/start/overview">https://reactrouter.com/en/main/start/overview</a>
      </div>

      {/*OPTIONAL PRACTICE: If you want more practice later, try creating a 404 page for incorrect routes/urls.*/}
    </div>
  );
}

export default App;
