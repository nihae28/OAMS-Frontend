import React, {useState, useEffect} from 'react'
import AirplaneModelService from '../services/AirplaneModelService'

const AddAirplaneModel = () => {

    const [modelNo, setModelNo] = useState('')
    const [capacity, setCapacity] = useState('')
    const [weight, setWeight] = useState('')
    
    const [model, setModel] = useState([])

    const saveModel = (e) => {
        e.preventDefault();

        const airplanemodel = {modelNo, capacity, weight}

        
        AirplaneModelService.createModel(airplanemodel).then((response) =>{

//            alert("Data added succesfully");
            console.log("i addded model");
            console.log(response.data)
            getAllModels()

    
            }).catch(error => {
                console.log(error)
            })
        
        
    }

    useEffect(() => {

        getAllModels();
    }, [])

    const getAllModels = () => {
        AirplaneModelService.getAllModels().then((response) => {
            setModel(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const title = () => {

       
        return <h2 className = "text-center">Add new Airplane Model</h2>
  

}
const title2 = () => {

   
    return <h2 className = "text-center">The list of Airplane Models: </h2>


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
                                    <label className = "form-label"> Modle No :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Modle No"
                                        name = "modelNo"
                                        className = "form-control"
                                        value = {modelNo}
                                        onChange = {(e) => setModelNo(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Capacity :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Capacity"
                                        name = "capacity"
                                        className = "form-control"
                                        value = {capacity}
                                        onChange = {(e) => setCapacity(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Weight :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Weight"
                                        name = "weight"
                                        className = "form-control"
                                        value = {weight}
                                        onChange = {(e) => setWeight(e.target.value)}
                                    >
                                    </input>
                                </div>

                                

                                <button className = "btn btn-success" onClick = {(e) => saveModel(e)} >Add Model </button>
            
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
                                        <th> Model Number </th>
                                        <th> Capacity  </th>
                                        <th> Weight </th>
                                       
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                        {
                                            model.map(
                                                model =>
                                                <tr key = {model.modelNo}> 
                                                    <td> {model.modelNo} </td>
                                                    <td> {model.capacity} </td>
                                                    <td>{model.weight}</td>
                                                    
                                                    
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

export default AddAirplaneModel