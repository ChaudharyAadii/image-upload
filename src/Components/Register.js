import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {useNavigate} from "react-router-dom";   

export default function Register() {

    const [fname, setFname] = useState("");
    // console.log(fname);
    const [file, setFile] = useState("");
    // console.log(file);

    const history = useNavigate();

    const setData = (e) => {
        const { value } = e.target;
        // console.log(value); 
        setFname(value);
    }
    const setImgFile = (e) => {
        // console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    }
 

    const addUserData = async (e) => {
        e.preventDefault();

        var formData = new FormData();
        formData.append("photo", file);
        formData.append("fname", fname);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

        const res = await axios.post("http://localhost:8000/register", formData, config);

        // console.log(res);
        if (res.data.status === 401 || !res.data) {
          console.log("errror")
        } else {
          history("/") 
        }
    }

    return (
        <>
            <div className="container mt-3">
                <h1>Upload Your Image Here</h1>
                <Form className='mt-3'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" name='fname' onChange={setData} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Select Your Image</Form.Label>
                        <Form.Control type="file" name='photo' onChange={setImgFile} placeholder="" />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={addUserData}>
                        Submit
                    </Button>
                </Form>
            </div>

        </>
    )
}
