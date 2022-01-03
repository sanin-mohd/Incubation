
import React, {useState,useEffect, } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import ModalUnstyledDemo from './ModalUnstyledDemo';

function Dashboard() {
    const navigate = useNavigate()
    const [applicationDetails, setApplicationDetails] = useState()
    const [applications, setApplications] = useState()
    const [event, setEvent] = useState(true)
    useEffect(() => {
      const access = localStorage.getItem('access')  
      try{
        axios.get('http://localhost:8000/adminapplication/',{headers:{"Authorization":`Bearer  ${access}`}}).then((response) => {
            setApplications(response.data)
            console.log(response.data);
        })

      }
      catch(error){
        
            console.log(error);
            return error;
       
      }
        
      }, [event])

    return (
        <div className="MainParentDiv ">



            <div className="container pt-5">
                <h1>New Applications</h1>
                <button onClick={()=>{navigate('/admin/booking_slot')}}  className="btn btn-primary  mr-5 mb-2" style={{float:"right"}} >Slots</button>

                <div className="col-12 container p-3">

                    <table class="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">SL</th>
                                <th scope="col">Company Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Application</th>
                                <th scope="col">Status</th>
                                <th scope="col">Approve</th>
                                <th scope="col">Reject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                applications && applications.map((obj,index)=>{
                                    if(obj.status=='Pending'){
                                    return(
                                        <tr>
                                        <th key={index} scope="row">{index+1}</th>
                                        <td>{obj.companyname}</td>
                                        <td>{obj.phone}</td>
                                        
                                        <td><button onClick={()=>{
                                            const id= obj.id;
                                            console.log(obj);
                                            console.log(obj.phone);
                                            console.log("ID : " + id);
                                            const access = localStorage.getItem('access')
                                            axios.get(`http://127.0.0.1:8000/updateapplication/${id}/`,
                                            {headers:{"Authorization":`Bearer  ${access}`}})
                                            .then((response)=>{
                                                setApplicationDetails(response.data)
                                                console.log("Application Details = "+applicationDetails);
                                                Swal.fire({
                                                    title: '<strong>Application Details</strong>',
                                                   
                                                    html:
                                                      `Company Name : ${applicationDetails.companyname}<br>` +
                                                      `Email : ${applicationDetails.email}<br>`+
                                                      `City : ${applicationDetails.city}<br>`+
                                                      `State : ${applicationDetails.state}<br>`+
                                                      `Team Details : ${applicationDetails.describtion_on_team}<br>`+
                                                      `Problem : ${applicationDetails.describtion_on_company}<br>`+
                                                      `Solution : ${applicationDetails.unique_about_solution}<br>`,
                                                     
                                                    showCloseButton: true,
                                                    showCancelButton: true,
                                                    focusConfirm: false,
                                                    confirmButtonText:
                                                      '<i class="fa fa-thumbs-up"></i> Great!',
                                                    confirmButtonAriaLabel: 'Thumbs up, great!',
                                                    cancelButtonText:
                                                      '<i class="fa fa-thumbs-down"></i>',
                                                    cancelButtonAriaLabel: 'Thumbs down'
                                                  })
                                            })
                                            
                                            
                                            

                                        }} class="btn btn-info">View</button></td>
                                        <td>{obj.status}</td>
                                        <td><button onClick={()=>{

                                            Swal.fire({
                                                title: 'Are you sure?',
                                                text: "You won't be able to revert this!",
                                                icon: 'warning',
                                                showCancelButton: true,
                                                confirmButtonColor: '#3085d6',
                                                cancelButtonColor: '#d33',
                                                confirmButtonText: 'Yes, Approve it!'
                                              }).then((result) => {
                                                if (result.isConfirmed) {
                                                    Swal.fire({
                                                        position: 'top-end',
                                                        icon: 'success',
                                                        title: 'Your work has been saved',
                                                        showConfirmButton: false,
                                                        timer: 1500
                                                      }).then(()=>{
                                                        const access_token1 = localStorage.getItem('access') 
                                                        console.log(access_token1);
                                                        const data = {
                                                            
                                                            
                                                            "name": obj.name,
                                                            "Address": obj.address,
                                                            "city": obj.city,
                                                            "state": obj.state,
                                                            "email": obj.email,
                                                            "phone": obj.phone,
                                                            "companyname": obj.companyname,
                                                            "companylogo": null,
                                                            "describtion_on_team": obj.describtion_on_team,
                                                            "describtion_on_company": obj.describtion_on_company,
                                                            "unique_about_solution": obj.unique_about_solution,
                                                            "value_proportion_for_customer": obj.value_proportion_for_customer,
                                                            "status": "Approved",
                                                            "status_note": null,
                                                            "user": obj.user

                                                                        
                                                    }
                                                    setEvent(!event);
                                                        axios.put(`http://localhost:8000/updateapplication/${obj.id}/`,data,{headers:{"Authorization":`Bearer  ${access_token1}`}})}
                                                      )
                                                      
                                                }
                                              })
                                            
                                        }} className={"btn btn-primary"}>Approve</button></td>
                                        <td><button onClick={()=>{
                                            
                                            Swal.fire({
                                                title: 'Reject ?',
                                                text: 'Do you want to continue',
                                                icon: 'error',
                                                confirmButtonText: 'Continue'
                                              })
                                              .then(()=>{
                                                const access_token2 = localStorage.getItem('access')   
                                                const data = {
                                                            
                                                            
                                                    "name": obj.name,
                                                    "Address": obj.address,
                                                    "city": obj.city,
                                                    "state": obj.state,
                                                    "email": obj.email,
                                                    "phone": obj.phone,
                                                    "companyname": obj.companyname,
                                                    "companylogo": null,
                                                    "describtion_on_team": obj.describtion_on_team,
                                                    "describtion_on_company": obj.describtion_on_company,
                                                    "unique_about_solution": obj.unique_about_solution,
                                                    "value_proportion_for_customer": obj.value_proportion_for_customer,
                                                    "status": "Rejected",
                                                    "status_note": null,
                                                    "user": obj.user

                                                                
                                            }
                                            setEvent(!event)
                                                axios.put(`http://localhost:8000/updateapplication/${obj.id}/`,data,{headers:{"Authorization":`Bearer  ${access_token2}`}})})
                                                
                                        }} className={"btn btn-danger"}>Reject</button></td>
                                    </tr>
                                    )
                                    }
                                })
                            }
                            
                           
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container pt-5">
                <h1>Reviewd Applications</h1>

                <div className="col-12 container p-3">

                    <table class="table table-dark table-striped">
                        <thead>
                        <tr>
                                <th scope="col">SL</th>
                                <th scope="col">Company Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Status</th>
                                <th scope="col">Slot</th>

                            </tr>
                        </thead>
                        <tbody>
                        {
                                applications && applications.map((obj,index)=>{
                                    if(obj.status!=='Pending'){
                                        return(
                                            <tr>
                                            <th key={index} scope="row">{index+1}</th>
                                            <td>{obj.companyname}</td>
                                            <td>{obj.phone}</td>
                                            <td>{obj.status}</td>
                                            <td>{obj.slot}</td>
    
                                        </tr>
                                        )

                                    }
                                    
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;