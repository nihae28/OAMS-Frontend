import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import FAATestService from '../services/FAATestService'

const AddFAATestController = () => {

    const [FAA_no, setFAANo] = useState('')
    const [Tname, setTName] = useState('')
    const [max_score, setMaxScore] = useState('')
    
    const [faa_test, setFAATest] = useState([])


    const saveFAATest = (e) => {
        e.preventDefault();

        const faa_test = {FAA_no, Tname, max_score}

    
        FAATestService.createFAATest(faa_test).then((response) =>{

            console.log(response.data)
            getAllFAATests()
    
    
            }).catch(error => {
                console.log(error)
            })
        
        
    }

    useEffect(() => {

        getAllFAATests();
    }, [])

    const getAllFAATests = () => {
        FAATestService.getAllFAATests().then((response) => {
            setFAATest(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

   
    const title = () => {

       
        return <h2 className = "text-center">Add new FAA Test</h2>
  

}
const title2 = () => {

   
    return <h2 className = "text-center">The list of FAA Tests </h2>


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
                                    <label className = "form-label"> FAA No :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Modle No"
                                        name = "FAA_no"
                                        className = "form-control"
                                        value = {FAA_no}
                                        onChange = {(e) => setFAANo(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Test Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Test Name"
                                        name = "TName"
                                        className = "form-control"
                                        value = {Tname}
                                        onChange = {(e) => setTName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Max Score :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Max Score"
                                        name = "max_score"
                                        className = "form-control"
                                        value = {max_score}
                                        onChange = {(e) => setMaxScore(e.target.value)}
                                    >
                                    </input>
                                </div>

                                

                                <button className = "btn btn-success" onClick = {(e) => saveFAATest(e)} >Submit </button>
                                
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
                                        <th> FAA Number </th>
                                        <th> Test Name  </th>
                                        <th> Max Score  </th>
                    
                                       
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                        {
                                            faa_test.map(
                                                faa_test =>
                                                <tr key = {faa_test.FAA_no}> 
                                                    <td> {faa_test.FAA_no} </td>
                                                    <td> {faa_test.Tname} </td>
                                                    <td> {faa_test.max_score} </td>
                                                
                                                    
                                                    
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

export default AddFAATestController