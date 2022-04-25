import React, {useState,useEffect} from 'react'
import TestService from '../services/TestService';
const Test_info = () => {


    const [faa_no, setFaano] = useState('')
    const [reg_no, setRegno] = useState('')
    const [ssn, setSsn] = useState('')
    const [hours, setHours] = useState('')
    const [tdate, setTDate] = useState('')
    const [score, setScore] = useState('')
    
    const [testsinfo, setTestsinfo] = useState([])

    const saveTest = (e) => {
        e.preventDefault();

        const test = {faa_no, reg_no, ssn,hours, tdate,score}

            TestService.createTest(test).then((response) =>{
                alert("Data added succesfully");
                console.log(response.data)
                getAllTests()
    
            }).catch(error => {
                console.log(error)
            })
        
        
    }
    useEffect(() => {

        getAllTests();
    }, [])
    

    const getAllTests = () => {
        TestService.getAllTest().then((response) => {
            setTestsinfo(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }



    const title = () => {

       
            return <h2 className = "text-center">Add new FAA test information</h2>
      
   
    }
    const title2 = () => {

       
        return <h2 className = "text-center">The current list of FAA tests done are: </h2>
  

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
                                    <label className = "form-label"> FAA Test Number :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Test no"
                                        name = "Testno"
                                        className = "form-control"
                                        value = {faa_no}
                                        onChange = {(e) => setFaano(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Reg Number :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Reg name"
                                        name = "Regno"
                                        className = "form-control"
                                        value = {reg_no}
                                        onChange = {(e) => setRegno(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label">  SSN of technician :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter technician ssn"
                                        name = "ssn"
                                        className = "form-control"
                                        value = {ssn}
                                        onChange = {(e) => setSsn(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label">  Hours :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter Hours taken"
                                        name = "hours"
                                        className = "form-control"
                                        value = {hours}
                                        onChange = {(e) => setHours(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label">  Date of test:</label>
                                    <input 
                                        type="date" 
                                        placeholder = "YYYY-MM-DD"
                                        name = "date"
                                        className = "form-control"
                                        value = {tdate}
                                        required pattern="\d{4}-\d{2}-\d{2}"
                                        onChange = {(e) => setTDate(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label">  Score :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter Score "
                                        name = "hours"
                                        className = "form-control"
                                        value = {score}
                                        onChange = {(e) => setScore(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveTest(e)} >Add test </button>
                                
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
                                        <th> Test Number </th>
                                        <th> Plane Registration number  </th>
                                        <th> Technician Ssn </th>
                                        <th> Hours </th>
                                        <th> Date </th>
                                        <th> Score </th>
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                        {
                                            testsinfo.map(
                                                testinfo =>
                                                <tr key = {testinfo.id}> 
                                                    <td> {testinfo.faa_no} </td>
                                                    <td> {testinfo.reg_no} </td>
                                                    <td>{testinfo.ssn}</td>
                                                    <td>{testinfo.hours}</td>
                                                    <td>{testinfo.tdate}</td>
                                                    <td>{testinfo.score}</td>
                                                    
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

export default Test_info