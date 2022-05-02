import axios from 'axios'

const EXPERT_BASE_REST_API_URL = 'http://localhost:8080/expert-controller';

class ExpertService{

    getAllExperts(){
        return axios.get(EXPERT_BASE_REST_API_URL+"/getExperts",
        {
            headers:{
                authorization: ' xxxxxxxxx',
                'Content-Type': 'application/json'
            }
        });
    }

    createExpert(expert){
        console.log(expert)
        return axios.post(EXPERT_BASE_REST_API_URL+"/addExpert", expert,

        {
            headers:{
                authorization: ' xxxxxxxxx',
                'Content-Type': 'application/json'
            }
        }
        
        );
    }
}

export default new ExpertService();
