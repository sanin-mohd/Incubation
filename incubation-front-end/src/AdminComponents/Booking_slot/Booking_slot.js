import React, { useEffect,useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Tooltip } from '@mui/material';
import axios from 'axios'
import Swal from 'sweetalert2'
import './Booking_slot.css'
// import EventAvailableIcon from '@mui/icons-material/EventAvailable';
// import EventBusyIcon from '@mui/icons-material/EventBusy';


export default function SimplePaper() {
    const [data, setData] = useState()
    const [event, setEvent] = useState(true)
    const [num, setNum] = useState(5)
    

    useEffect(() => {
        const access_token1 = localStorage.getItem('access')
        axios.get('http://localhost:8000/slots/',
        {headers:{"Authorization":`Bearer  ${access_token1}`}})
        .then((response) =>{
            
            console.log("RESPONSE = "+response.data);
            console.log(response.data.length);
            setNum(response.data.length);    
            setData(response.data)
              
        })
       
    }, [num])


    var rows = [];
    
    
    const numslots = num
    console.log("DATA : "+data);
    {data && data.map((obj,index)=>{
        {

            rows.push(
                <Tooltip
                
                 title={'Slot '+obj.serial_number }>
                    <Paper
                        
                        sx={{
                            justifyContent: 'center',
                            
                            backgroundColor: '#ffc229',
                            '&:hover': {
    
                                backgroundColor: 'lightred',
                                opacity: [0.9, 0.8, 0.7],
                                
                            },
                        }
                        }
                        elevation={3} key={index} onClick={(e)=>{
                            const access_token1 = localStorage.getItem('access')
                            axios.get('http://localhost:8000/slots/',
                            {headers:{"Authorization":`Bearer  ${access_token1}`}})
                            .then((response) =>{
                                
                                console.log("RESPONSE = "+response.data);
                                console.log(response.data.length);
                                setNum(response.data.length);    
                                setData(response.data)
                                
                            })
                            const { value: fruit } =  Swal.fire({
                                title: 'Select field validation',
                                input: 'select',
                                inputOptions: {
                                  'Applicants': {

                                    apples: 'Apples',
                                    bananas: 'Bananas',
                                    grapes: 'Grapes',
                                    oranges: 'Oranges'
                                  },
                                  
                                },
                                inputPlaceholder: 'Select a Company',
                                showCancelButton: true,
                                
                              })
                              
                             
                            // Swal.fire({
                            //     title: '<strong>Slot Details</strong>',
                               
                            //     html:
                            //       `Serial Number : ${obj.serial_number}<br>` +
                            //       `Owner : ${obj.user.username}<br>`,
                                  
                                
                            //     showCloseButton: true,
                            //     showCancelButton: true,
                            //     focusConfirm: false,
                            //     confirmButtonText:
                            //       '<i class="fa fa-thumbs-up"></i> Great!',
                            //     confirmButtonAriaLabel: 'Thumbs up, great!',
                            //     cancelButtonText:
                            //       '<i class="fa fa-thumbs-down"></i>',
                            //     cancelButtonAriaLabel: 'Thumbs down'
                            //   }).then((res)=>{
                            //       console.log(res);
                            //   })
                        }} ></Paper>
                </Tooltip>);
        }
        return (
            <div >
                <Typography className="text-center" variant="h4" gutterBottom component="div">
                    Total Slots : {numslots}
                </Typography>
                <div className="">
                
                </div>
                <Box className="modal_pointer" 
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        '& > :not(style)': {
                            m: 1,
                            width: 200,
                            height: 200,
                        },
    
    
                    }}
                >
    
                    {rows}
                    
                    
                </Box>
                
            </div>
        );
    }) 
}

    for (var i = 1; i <= 0; i++) {

        rows.push(
            <Tooltip title={'Slot '+i }>
                <Paper
                    sx={{
                        justifyContent: 'center',
                        backgroundColor: '#0d6efd',
                        '&:hover': {

                            backgroundColor: 'lightred',
                            opacity: [0.9, 0.8, 0.7],
                            
                        },
                    }
                    }
                    elevation={3} key={i} onClick ></Paper>
            </Tooltip>);
    }
    return (
        <div>
            <Typography className="text-center" variant="h4" gutterBottom component="div">
                Total Slots : {numslots}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    '& > :not(style)': {
                        m: 1,
                        width: 200,
                        height: 200,
                    },


                }}
            >

                {rows}
            </Box>
        </div>
    );
    
}
    
