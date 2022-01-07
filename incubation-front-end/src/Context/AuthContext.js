import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
const AuthContext = createContext();
export default AuthContext

export const AuthProvider = ({ children }) => {

  const Tokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):null

  const [user, setUser] = useState(localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')):null)
  const [authTokens, setAuthTokens] = useState(Tokens)

  let navigate = useNavigate()

  let loginUser = async(username,password) => {
    let response = await fetch('http://localhost:8000/api/token/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'username':username, 'password':password})
    }
    )
    console.log("Form submitted successfully");
    let data = await response.json();
    console.log(data);
    console.log(response);
    if(response.status === 200){
      setAuthTokens(data);
      setUser(jwt_decode(data.access))
      console.log(jwt_decode(data.access));
      localStorage.setItem('authTokens',JSON.stringify(data))
      localStorage.setItem('user',JSON.stringify(jwt_decode(data.access)))
      
      console.log("Login Page Saved User : "+localStorage.getItem('user').username);
      navigate( '/home' )
      
      
    }
    else{
      alert("Invalid credentials")
    }

  }
  let contextData = { 
    'loginUser': loginUser,
    'user':user

  }
  return (
    <AuthContext.Provider value={contextData} >
      {children}
    </AuthContext.Provider>
  );
};
