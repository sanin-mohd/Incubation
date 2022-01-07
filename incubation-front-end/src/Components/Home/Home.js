import React,{useEffect} from 'react';
import './Home.css';
import axios from 'axios';


import { useNavigate } from 'react-router-dom';
import {Card,Button} from 'react-bootstrap'
export default function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        
    })
    return (
        <div>
            <div className="home" >
                <Card className="text-center">
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Card.Title>Application Status</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        <Button onClick={() => navigate('booking_form/')} variant="primary">Apply</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
                
            </div>
        </div>


    );
}
