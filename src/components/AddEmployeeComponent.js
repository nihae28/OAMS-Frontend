import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {

    const [Email, setEmail] = useState('')
    const [EName, setEName] = useState('')
    const [Address, setAddress] = useState('')
    const [Salary, setSalary] = useState('')
    const [Union_mem_no, setUnionNo] = useState('')
    const [Phone_no, setPhoneNo] = useState('')
    const [ERole, setERole] = useState('')
    const history = useHistory();
    const {Ssn} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {Email, EName, Address, Salary, Union_mem_no, Phone_no, ERole}

        if(Ssn){
            EmployeeService.updateEmployee(Ssn, employee).then((response) => {
                history.push('/employees')
            }).catch(error => {
                console.log(error)
            })

        }else{
            EmployeeService.createEmployee(employee).then((response) =>{

                console.log(response.data)
    
                history.push('/employees');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        EmployeeService.getEmployeeById(Ssn).then((response) =>{
            setEmail(response.data.Email)
            setEName(response.data.EName)
            setAddress(response.data.Address)
            setSalary(response.data.Salary)
            setUnionNo(response.data.Union_mem_no)
            setPhoneNo(response.data.Phone_no)
            setERole(response.data.ERole)
            
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Add Employee</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                            <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "Email"
                                        className = "form-control"
                                        value = {Email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> EName :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Name"
                                        name = "EName"
                                        className = "form-control"
                                        value = {EName}
                                        onChange = {(e) => setEName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Address :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Address"
                                        name = "Address"
                                        className = "form-control"
                                        value = {Address}
                                        onChange = {(e) => setAddress(e.target.value)}
                                    >
                                    </input>
                                </div>

                               

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Salary :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Salary"
                                        name = "Salary"
                                        className = "form-control"
                                        value = {Salary}
                                        onChange = {(e) => setSalary(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Union No :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Union Mem No"
                                        name = "Union_mem_no"
                                        className = "form-control"
                                        value = {Union_mem_no}
                                        onChange = {(e) => setUnionNo(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Phone No :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Phone Number"
                                        name = "Phone_no"
                                        className = "form-control"
                                        value = {Phone_no}
                                        onChange = {(e) => setPhoneNo(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> ERole :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "ERole"
                                        className = "form-control"
                                        value = {ERole}
                                        onChange = {(e) => setERole(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                                <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddEmployeeComponent