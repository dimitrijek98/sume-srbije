import axios from 'axios';
export default class SumeService {
    constructor() {
        this.baseURL = 'http://localhost:4000';
    }
    
    getYearPlantings() {
        return axios.get(`${this.baseURL}/AllPlantings`);
    }
    getMonthDeforestation(month) {
        return axios.get(`${this.baseURL}/monthCuts`, { params: { mesec: month } });
    }
    getRegionsPlantingsAndDeforestation(regId) {
        return axios.get(`${this.baseURL}/regionPlantingsAndCuts`, { params:{ region: regId }});
    }
    getRegionsTreesPlantingsAndDeforestation(regId) {
        return axios.get(`${this.baseURL}/regionTreesPlantingsAndCuts`, { params:{ region: regId }});
    }
    getRegionsTreesSpacePlantingsAndDeforestation(regId) {
        return axios.get(`${this.baseURL}/regionSpaceTreesPlantingsAndCuts`,{ params: { region: regId }});
    }
}