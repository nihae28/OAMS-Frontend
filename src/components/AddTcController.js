import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import TCService from '../services/TCService'

const AddTcController = () => {

    const [ssn, setSsn] = useState('')
    const [exam_date, setExamDate] = useState('')
    
    const [tc, setTC] = useState([])
    
    

    const saveTC = (e) => {
        e.preventDefault();

        const trafficcontroller = {ssn, exam_date}

       
            TCService.createTC(trafficcontroller).then((response) =>{

                console.log(response.data)
    

    
            }).catch(error => {
                console.log(error)
            })
        
        
    }

    useEffect(() => {

        getAllTC();
    }, [])

    const getAllTC = () => {
        FAATestService.getAllTC().then((response) => {
            setTC(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

 
    const title = () => {

       
        return <h2 className = "text-center">Add new Traffic Controller</h2>
  

}
const title2 = () => {

   
    return <h2 className = "text-center">The list of Traffic Controller </h2>


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

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Exam Date :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Exam Date"
                                        name = "exam_date"
                                        className = "form-control"
                                        value = {exam_date}
                                        onChange = {(e) => setExamDate(e.target.value)}
                                    >
                                    </input>
                                </div>

                    
                                

                                <button className = "btn btn-success" onClick = {(e) => saveTC(e)} >Submit </button>
                                
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
                                        <th> Exam Date  </th>
                                        
                    
                                       
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                        {
                                            tc.map(
                                                tc =>
                                                <tr key = {tc.ssn}> 
                                                    <td> {tc.ssn} </td>
                                                    <td> {tc.exam_date} </td>
                                            
                                                
                                                    
                                                    
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

export default AddTcController