import axios from 'axios'

const EXPERT_BASE_REST_API_URL = 'http://localhost:8080/Expert';

class ExpertService{

    getAllExperts(){
        return axios.get(EXPERT_BASE_REST_API_URL+"/getexperts")
    }

    createExpert(Expert){
        console.log(Expert)
        return axios.post(EXPERT_BASE_REST_API_URL+"/addexpert", Expert)
    }
}

export default new ExpertService();
