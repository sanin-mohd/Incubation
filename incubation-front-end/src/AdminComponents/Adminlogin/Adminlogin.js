import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import TextField from '@mui/material/TextField';


export default function Adminlogin() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        const data = {
            username:email,
            password:password
        }
        e.preventDefault()
        console.log(data);
        axios.post("http://127.0.0.1:8000/api/token/",data).then((res)=>{
            console.log(res.data)
            localStorage.setItem('access',res.data['access']);
            localStorage.setItem('refresh',res.data['refresh']);
            navigate('/admin')})
        }
       
    
    return (
        <div>
            <section className="h-100 bg-dark">
                <div className="container py-5 h-100 bg-dark">
                    <div className="row d-flex justify-content-center align-items-center h-100 bg-dark">
                        <div className="col bg-dark">
                            <div className="card card-registration my-4 bg-dark">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black container bg-white">
                                            <h3 className="mb-5 text-uppercase text-center">Admin login</h3>
                                            <form onSubmit={handleLogin}>
                                                <div className="row d-flex justify-content-center">
                                                    <div className="col-8 mb-4">
                                                        <TextField id="outlined-basic" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                                                    </div>
                                                    <div className="col-8 mb-4">
                                                        <div className="form-outline">
                                                            <TextField id="outlined-basic" type={'password'} value={password} onChange={(e)=>{setPassword(e.target.value)}} label="Password" variant="outlined" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-center pt-3">
                                                        <button className="btn btn-outline-success btn-lg ms-2">Register</button>
                                                    </div>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
}
