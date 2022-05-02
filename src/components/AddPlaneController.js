import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import PlaneService from '../services/PlaneService'

const AddPlaneController = () => {

    const [regNo, setRegNo] = useState('')
    const [modelNo, setModelNo] = useState('')

    const [plane, setPlane] = useState([])
    


    const savePlane = (e) => {
        e.preventDefault();

        const plane = {regNo, modelNo}

        
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
        PlaneService.getAllPlanes().then((response) => {
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
                                        name = "regNo"
                                        className = "form-control"
                                        value = {regNo}
                                        onChange = {(e) => setRegNo(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Model No :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Model No"
                                        name = "modelNo"
                                        className = "form-control"
                                        value = {modelNo}
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
                                                <tr key = {plane.regNo}> 
                                                    <td> {plane.regNo} </td>
                                                    <td> {plane.modelNo} </td>
                                            
                                                
                                                    
                                                    
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
