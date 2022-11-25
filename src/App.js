/** React Imports */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/** Component Imports */
import Login from './components/Login/Login';
import QueryForm from './components/QueryForm/QueryForm'

const App = () => {
  return(
    <Router>
        <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/queryForm" element={<QueryForm />}></Route>
        </Routes>
    </Router>
  )
}

export default App;
