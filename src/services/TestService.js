import axios from 'axios'

const TEST_BASE_REST_API_URL = 'http://localhost:8080/testinfo';

class TestService{

    getAllTest(){
        return axios.get(TEST_BASE_REST_API_URL+"/gettests")
    }

    createTest(test){
        console.log(test)
        return axios.post(TEST_BASE_REST_API_URL+"/addtestinfo", test)
    }

    /*getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }*/
}

export default new TestService();