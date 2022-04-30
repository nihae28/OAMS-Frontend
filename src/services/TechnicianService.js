import axios from 'axios'

const TECHNICIAN_BASE_REST_API_URL = 'http://localhost:8080/technician';

class TechnicianService{

    getAllTech(){
        return axios.get(TECHNICIAN_BASE_REST_API_URL+"/gettechnicians")
    }

    createTech(Technician){
        console.log(Technician)
        return axios.post(TECHNICIAN_BASE_REST_API_URL+"/addtechnician", Technician)
    }
}

export default new TechnicianService();