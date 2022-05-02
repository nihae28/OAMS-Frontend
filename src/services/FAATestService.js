import axios from 'axios'

const FAA_BASE_REST_API_URL = 'http://localhost:8080/tests-controller';

class FAATestService{

    getAllFAATests(){
        return axios.get(FAA_BASE_REST_API_URL+"/gettests",
        {
            headers:{
                authorization: ' xxxxxxxxx',
                'Content-Type': 'application/json'
            }
        });
    }

    createFAATest(faa_test){
        console.log(faa_test)
        return axios.post(FAA_BASE_REST_API_URL+"/inserttest", faa_test,
        {
            headers:{
                authorization: ' xxxxxxxxx',
                'Content-Type': 'application/json'
            }
        });
    }
}

export default new FAATestService();