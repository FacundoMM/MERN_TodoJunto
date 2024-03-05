import React from 'react'

const Resultados = (props) => {
const { name, lastname, email, password, confirm } = props.data;
    return (
        <div>
            <h1>Your Form Data</h1>
            <p>Fist Name: {name}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm password: {confirm}</p>
        </div>
    )
}

export default Resultados
