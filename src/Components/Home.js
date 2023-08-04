import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

export default function Home() {

    const [data, setData] = useState([]);
    console.log(data);

    const getUerData = async () => {
        const res = await axios.get("http://localhost:8000/getdata", {
            headers: {
                "Content-Type": "application/json"
            }
        });

        // console.log(res);

        if (res.data.status === 401 || !res.data) {
            console.log("errror")
        } else {
            setData(res.data.getUser);
        }
    }


    useEffect(() => {
        getUerData();
    }, [])

    return (
        <>
            <div className='container mt-2'>
                <h1 className='text-centre mt-2'>MERN Image Upload Projects</h1>
                <div className='text-end'>
                    <Button variant="warning"><NavLink className='text-decoration-none text-black' to='/register'>Add User</NavLink></Button>
                </div>

                <div className="row d-flex justify-content-between align-items-center mt-5">
                    {
                        data.length > 0 ? data.map((el, i) => {
                            return (
                                <>
                                    <Card  style={{ width: '22rem', height: '18rem' }} className='mb-3'>
                                        <Card.Img key={el.id} variant="top" style={{ width: "100px", textAlign: "center", margin: "auto" }} src={`http://localhost:8000/uploads/${el.imgpath}`} className='mt-2' />
                                        <Card.Body className='text-center'>
                                            <Card.Title>User Name : {el.fname}</Card.Title>
                                            <Card.Text>
                                                Date Added : {moment(el.date).format("L")}
                                            </Card.Text>
                                            <Button variant="danger" className='col-lg-6 text-center'>Delete User</Button>
                                        </Card.Body>
                                    </Card>
                                </>
                            )
                        }) : ""
                    }

                </div>
            </div>
        </>
    )
}
