import React, { useContext } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
function Header() {
    const navigate = useNavigate()
    let {user} = useContext(AuthContext)
    return (
        <div className="headerParentDiv">
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <div className="container container-fluid col-10">


                    <strong i onClick={() => navigate('/')} className="navbar-brand jus">INCUBATION</strong>



                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" onClick={() => navigate('booking_form/')} aria-current="page" >Application</a>
                            </li>
                            
                        </ul>
                    </div>


                   {user && 
                    <div className="d-flex align-items-center" >
                        <div className="">
                        
                        <h5 className="" style={{margin:"0px"}}>Welcome {user.username}..!!</h5>
                        
                        
                        </div>
                        
                        <div className="">
                            <b className="btn btn-danger"onClick={() => {
                                navigate('/logout')}}>Logout</b>
                        </div>
                    </div>
                    
                   }
                    
                    {!user && 
                        <div className="d-flex">
                        <div className="mr-3">
                            <b className="mr-3" onClick={() => {
                                navigate('/login')}}>Login&nbsp;|</b>
                        </div>
                        <div className="">
                            <b className=""onClick={() => {
                                navigate('/register')}}>&nbsp;Register</b>
                        </div>
                        </div>

                    }
                </div>

            </nav>
        </div>

    );
}

export default Header;
