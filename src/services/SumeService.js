import axios from 'axios';
export default class SumeService {
    constructor(){
        this.baseURL = 'http://localhost:4000';
    }
    getAllTrees(){
        return axios.get(`${this.baseURL}/AllTress`);
    }

    getMonthDeforestation(month){
        return axios.get(`${this.baseURL}/monthCuts`,{mesec:month});
    }
}