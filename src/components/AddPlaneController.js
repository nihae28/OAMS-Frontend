import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import PlaneService from '../services/PlaneService'

const AddPlaneController = () => {

    const [Reg_no, setRegNo] = useState('')
    const [Model_no, setModelNo] = useState('')

    const [plane, setPlane] = useState([])
    


    const savePlane = (e) => {
        e.preventDefault();

        const plane = {Reg_no, Model_no}

        
            PlaneService.createPlane(plane).then((response) =>{

                console.log(response.data)
    
    
            }).catch(error => {
                console.log(error)
            })
        
        
    }

    useEffect(() => {

        getAllPlanes();
    }, [])

    const getAllPlanes = () => {
        FAATestService.getAllPlanes().then((response) => {
            setPlane(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const title = () => {

       
        return <h2 className = "text-center">Add new Plane details</h2>
  

}
const title2 = () => {

   
    return <h2 className = "text-center">The list of Planes </h2>


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
                                    <label className = "form-label"> Reg No :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Modle No"
                                        name = "Reg_no"
                                        className = "form-control"
                                        value = {Reg_no}
                                        onChange = {(e) => setRegNo(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Model No :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Model No"
                                        name = "Model_no"
                                        className = "form-control"
                                        value = {Model_no}
                                        onChange = {(e) => setModelNo(e.target.value)}
                                    >
                                    </input>
                                </div>


                                

                                <button className = "btn btn-success" onClick = {(e) => savePlane(e)} >Submit </button>
                                
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
                                        <th> Reg No </th>
                                        <th> Model Number  </th>
                                        
                    
                                       
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                        {
                                            plane.map(
                                                plane =>
                                                <tr key = {plane.Reg_no}> 
                                                    <td> {plane.Reg_no} </td>
                                                    <td> {plane.Model_no} </td>
                                            
                                                
                                                    
                                                    
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

export default AddPlaneController