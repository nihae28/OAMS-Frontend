import axios from 'axios'

const MODEL_BASE_REST_API_URL = 'http://localhost:8080/airplane_models';

class AirplaneModelService{

    getAllModels(){
        return axios.get(MODEL_BASE_REST_API_URLL+"/getmodels")
    }

    createModel(airplanemodel){
        console.log(airplanemodel)
        return axios.post(MODEL_BASE_REST_API_URL+"/addmodel", airplanemodel)
    }

    
}

export default new AirplaneModelService();