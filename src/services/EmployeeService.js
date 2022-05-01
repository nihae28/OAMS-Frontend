import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/employee-controller';

class EmployeeService{

    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)
    }

}

export default new EmployeeService();
