import axios from 'axios'

const PLANE_BASE_REST_API_URL = 'http://localhost:8080/plane';

class PlaneService{

    getAllPlanes(){
        return axios.get(PLANE_BASE_REST_API_URL+"/getplanes")
    }

    createPlane(plane){
        console.log(plane)
        return axios.post(PLANE_BASE_REST_API_URL+"/addplane", plane)
    }
}

export default new PlaneService();