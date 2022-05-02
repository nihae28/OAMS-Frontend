import axios from 'axios'

const MODEL_BASE_REST_API_URL = 'http://localhost:8080/airplane_models';

class AirplaneModelService{

    getAllModels(){
        return axios.get(MODEL_BASE_REST_API_URL+"/getmodels",
        {
            headers:{
                authorization: ' .xxxxxxxxx',
                "Content-Type": 'application/json'
            }
        }
        
        );
    }

    createModel(airplanemodel){
        console.log(airplanemodel)
        return axios.post(MODEL_BASE_REST_API_URL+"/insertmodel", airplanemodel,
        {
            headers:{
                "Content-Type": 'application/json'
            }
        }
        );
    }

    
}

export default new AirplaneModelService();
