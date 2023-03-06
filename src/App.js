import "./App.css";

//rcc
import React, { Component } from "react";

import Navbar from "./components/Navbar";
import News from "./components/News.js";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default class App extends Component {
  url="https://newsapi.org/v2/top-headlines?&apiKey=3f430941ba1d4ac5a1b32cf392d821fb";
  country="us";
  pageSize=9;
  //c='john'
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path='/' element={<News pageSize={this.pageSize} url={this.url} key="general" category="general" country={this.country}/>  }></Route>
        <Route exact path='/Business' element={<News pageSize={this.pageSize} url={this.url}  key="business" category="business" country={this.country}/>  }></Route>
        <Route exact path='/Entertainment' element={<News pageSize={this.pageSize} url={this.url}  key="entertainment" category="entertainment" country={this.country}/>  }></Route>
        <Route exact path='/General' element={<News pageSize={this.pageSize} url={this.url}  key="general" category="general" country={this.country}/>  }></Route>
        <Route exact path='/Health' element={<News pageSize={this.pageSize} url={this.url}  key="health" category="health" country={this.country}/>  }></Route>
        <Route exact path='/Science' element={<News pageSize={this.pageSize} url={this.url}  key="science" category="science" country={this.country}/>  }></Route>
        <Route exact path='/Sports' element={<News pageSize={this.pageSize} url={this.url}  key="sports" category="sports" country={this.country}/>  }></Route>
        <Route exact path='/Technology' element={<News pageSize={this.pageSize} url={this.url}  key="technology" category="technology" country={this.country}/>  }></Route>

        {/* {this.c} */}
        </Routes>
        </BrowserRouter>
      </div>
    );  
  }
}
