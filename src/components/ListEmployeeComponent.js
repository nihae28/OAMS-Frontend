import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {

        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteEmployee = (employeeId) => {
       EmployeeService.deleteEmployee(employeeId).then((response) =>{
        getAllEmployees();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Employees </h2>
            <Link to = "/add-employee" className = "btn btn-primary mb-2" > Add Employee </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Employee SSN </th>
                    <th> Employee Email </th>
                    <th> Employee Name </th>
                    <th> Employee Address </th>
                    <th> Employee Salary </th>
                    <th> Employee Union No </th>
                    <th> Employee Phone No </th>
                    <th> Employee Role </th>
                    
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key = {employee.Ssn}> 
                                <td> {employee.Ssn} </td>
                                <td> {employee.Email} </td>
                                <td>{employee.EName}</td>
                                <td>{employee.Address}</td>
                                <td>{employee.Salary}</td>
                                <td>{employee.Union_mem_no}</td>
                                <td>{employee.ERole}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-employee/${employee.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteEmployee(employee.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent