import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reg from './Reg';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home';
import add from './add';
import update from './update';
import random from './random';
import App2 from './App2.js';
import App3 from './App3.js';
import Home2 from './Home2.js';
import root from './root.js';



ReactDOM.render(
   <Router>
   <div>
       <Route exact path="/" component={App}/>
     
       <Route path="/home" component={Home} />

       <Route path="/reg" component={Reg} />

       <Route path="/add" component={add} />

       <Route path="/update" component={update} />

       <Route path="/random" component={random} />
       <Route path="/App2" component={App2} />
       <Route path="/App3" component={App3} />
       <Route path="/Home2" component={Home2} />
       <Route path="/root" component={root} />
   </div>
   </Router>,
  document.getElementById('root')
);

reportWebVitals();

