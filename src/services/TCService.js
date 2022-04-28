import axios from 'axios'

const TC_BASE_REST_API_URL = 'http://localhost:8080/trafficcontroller';

class TCService{

    getAllTC(){
        return axios.get(TC_BASE_REST_API_URL+"/getTCs")
    }

    createTC(trafficcontroller){
        console.log(trafficcontroller)
        return axios.post(TC_BASE_REST_API_URL+"/addTC", trafficcontroller)
    }
}

export default new TCService();