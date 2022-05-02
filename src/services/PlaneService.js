import axios from 'axios'

const PLANE_BASE_REST_API_URL = 'http://localhost:8080/plane-controller';

class PlaneService{

    getAllPlanes(){
        return axios.get(PLANE_BASE_REST_API_URL+"/getplanes",
        {
            headers:{
                authorization: ' xxxxxxxxx',
                'Content-Type': 'application/json'
            }
        });
    }

    createPlane(plane){
        console.log(plane)
        return axios.post(PLANE_BASE_REST_API_URL+"/insertplane", plane,
        
        {
            headers:{
                authorization: ' xxxxxxxxx',
                "Content-Type": 'application/json'
            }
        }
        );
    }
}

export default new PlaneService();