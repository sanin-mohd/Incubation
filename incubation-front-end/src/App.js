import "./App.css";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Booking_form from "./Pages/Booking_form";
import Dashboard from "./Pages/Dashboard";
import Booking_slot from "./Pages/Booking_slot";
import Recordlist from "./Pages/Recordlist";
import Adminlogin from "./Pages/Adminlogin";
import { useContext } from "react";
import AuthContext from "./Context/AuthContext";
import {AuthProvider} from './Context/AuthContext';

function App() {
const user=false


  return (
    <div className="App">
      <div>
      
          
          <Router>
          <AuthProvider>
            <Routes>
              
              

              <Route exact path="/home" element={user ? <Navigate to="/login" />: <Home/>} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/booking_form" element={<Booking_form />} />
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/booking_slot" element={<Booking_slot />} />
              {/* <Route path="/admin/record_list" element={<Recordlist />} /> */}
              <Route path="/admin/Adminlogin" element={<Adminlogin />} />
              
              

            </Routes>
            </AuthProvider>
          </Router>
          
      </div>
    </div>
  );
}

export default App;
