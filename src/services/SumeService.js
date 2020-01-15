import axios from 'axios';
export default class SumeService {
    constructor() {
        this.baseURL = 'http://localhost:4000';
    }
    getAllTrees() {
        return axios.get(`${this.baseURL}/AllTress`);
    }
    getAllRegions() {
        return axios.get(`${this.baseURL}/AllRegions`);
    }

    deleteTree(treeID) {
        return axios.post(`${this.baseURL}/deleteTree`, { params:{ drvo: treeID }});
    }

    setNewStatistics(regId, treeId, plantNum, cutsNum, plantSpace, cutsSpace) {
        return axios.post(`${this.baseURL}/newStatistics`,
        { params:{ region: regId, drvo: treeId, brPosecena: cutsNum, brZasadjena: plantNum, povrsPosecena: cutsSpace, povrsZasadjena: plantSpace }});
    }
    setNewTreeAndStatistics(typeId, name, regId, plantNum, cutsNum, plantSpace, cutsSpace) {
        return axios.post(`${this.baseURL}/newTreeAndStatistics`,
        { params:{ tip: typeId, naziv: name, region: regId, brPosecena: cutsNum, brZasadjena: plantNum, povrsPosecena: cutsSpace, povrsZasadjena: plantSpace }});
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