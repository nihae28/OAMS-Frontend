import React, {useState, useEffect} from 'react'

import ExpertService from '../services/ExpertService'

const AddExpertController = () => {

    const [modelNo, setModelNo] = useState('')
    const [ssn, setSsn] = useState('')
    
    const [expert, setExpert] = useState([])
    

    const saveExpert = (e) => {
        e.preventDefault();

        const Expert = {modelNo, ssn}

        
        ExpertService.createExpert(Expert).then((response) =>{

            console.log(response.data)
            getAllExperts()
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    

    useEffect(() => {

        getAllExperts();
    }, [])

    const getAllExperts = () => {
        ExpertService.getAllExperts().then((response) => {
            setExpert(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
        

    const title = () => {

       
        return <h2 className = "text-center">Add new Expert</h2>
  

}
const title2 = () => {

   
    return <h2 className = "text-center">The list of Experts </h2>


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
                                        type = "email"
                                        placeholder = "Enter Modle No"
                                        name = "modelNo"
                                        className = "form-control"
                                        value = {modelNo}
                                        onChange = {(e) => setModelNo(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Ssn :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter SSN"
                                        name = "ssn"
                                        className = "form-control"
                                        value = {ssn}
                                        onChange = {(e) => setSsn(e.target.value)}
                                    >
                                    </input>
                                </div>

            

                                

                                <button className = "btn btn-success" onClick = {(e) => saveExpert(e)} >Submit </button>
                                
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
                                        <th> SSN  </th>
                    
                                       
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                        {
                                            expert.map(
                                                expert =>
                                                <tr key = {expert.modelNo}> 
                                                    <td> {expert.modelNo} </td>
                                                    <td> {expert.ssn} </td>
                                                    
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

export default AddExpertController