import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const AddEmployee = () => {
    const [inputs, setInputs] = useState({
        ename: "",
        eage: "",
        eposition: "",
        esalary: ""
    })

    const inputHandler = (e) => {
        const { name, value } = e.target
        setInputs((prevData) => ({ ...prevData, [name]: value }))
        console.log(inputs)
    }

    const addHandler = () => {
        console.log("button clicked");
        axios.post("http://localhost:3005/create", inputs)
            .then((response) => {
                console.log(response.data)
                alert(response.data)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div style={{ paddingTop: "80px" }}>
            <Typography variant='h4'>
                Add Employee form
            </Typography>
            <br /><br />
            <TextField
                label='Employee Name'
                variant='outlined'
                name='ename'
                value={inputs.ename}
                onChange={inputHandler}
            />
            <br /><br />
            <TextField
                label='Employee Age'
                variant='outlined'
                name='eage'
                value={inputs.eage}
                onChange={inputHandler}
            />
            <br /><br />
            <TextField
                label='Employee position'
                variant='outlined'
                name='eposition'
                value={inputs.eposition}
                onChange={inputHandler}
            />
            <br /><br />
            <TextField
                label='Employee salary'
                variant='outlined'
                name='esalary'
                value={inputs.esalary}
                onChange={inputHandler}
            />
            <br /><br />
            <Button variant='contained' color='secondary' onClick={addHandler}>submit</Button>
        </div>
    )
}

export default AddEmployee
