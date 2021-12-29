import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {
  Navigation,
  Footer,
  Metadata_CNDL,
} from "./components";



ReactDOM.render(
<Router>
<Routes>
  {/* Routes with navbar can go in App */}
  <Route path="/" element={<App />} />
  <Route path="/about" element={<App />} />
  {/* Routes without navbar can go below */}
  <Route path="/cndl/metadata.json" element={<Metadata_CNDL />} />
</Routes>
</Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


{/* <React.StrictMode>
<App />
</React.StrictMode>, */}