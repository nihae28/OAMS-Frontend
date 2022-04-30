import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import TechnicianService from '../services/TechnicianService'

const AddTechnicianController = () => {

    const [ssn, setSsn] = useState('')

    const [technician, setTech] = useState([])


    const saveTec = (e) => {
        e.preventDefault();

        const Technician = {ssn}

        
            TechnicianService.createTech(Technician).then((response) =>{

                console.log(response.data)
    
    
            }).catch(error => {
                console.log(error)
            })
        
        
    }
    useEffect(() => {

        getAllTech();
    }, [])

    const getAllTech = () => {
        FAATestService.getAllTech().then((response) => {
            setTech(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const title = () => {

       
        return <h2 className = "text-center">Add new Technician</h2>
  

}
const title2 = () => {

   
    return <h2 className = "text-center">The list of Technician </h2>


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
                                    <label className = "form-label"> SSN :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter SSN"
                                        name = "ssn"
                                        className = "form-control"
                                        value = {ssn}
                                        onChange = {(e) => setSsn(e.target.value)}
                                    >
                                    </input>
                                </div>

                                

                                <button className = "btn btn-success" onClick = {(e) => saveTec(e)} >Submit </button>
                                
                            </form>

                        </div>
                    </div>
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title2()
                       }
                       
                        <div className = "card-body">
                        <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                        <th> SSN </th>
                                
                                        
                    
                                       
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                        {
                                            technician.map(
                                                technician =>
                                                <tr key = {technician.ssn}> 
                                                    <td> {technician.ssn} </td>
                                                    
                                            
                                                
                                                    
                                                    
                                                </tr>
                                            )
                                        }
                                    </tbody>
                        </table>
                        </div>
                        </div>


                </div>

           </div>

        </div>
    )
}

export default AddTechnicianController