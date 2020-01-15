import React, {Component} from 'react';
import {Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
import SumeService from '../../services/SumeService';


class NewForests extends Component {
    constructor(props){
        super(props);
        this.SumeService = new SumeService();
        this.state = {
            regionData:[],
            month:'Jan'
        }

    }

    componentDidMount = () => {
       this.getData();
    }

    getData = () => {
        this.SumeService.getYearPlantings()
        .then(response => {
            let data = response.data.map(reg => {
                return {...reg}
            })
            this.setState({regionData:data});
        })
    }

    
    render() {
        return (
            <div ref={this.props.newForests} className='row region-container p-5 mb-5'>
                <div className='col-md-6'>
                    <BarChart width={600} height={350} data={this.state.regionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="mesec" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar name="Broj stabala" dataKey="broj" fill="#8884d8" />
                    </BarChart>
                </div>

                <div className='col-md-6 align-items-center justify-content-center d-flex'>
                    <p>Reprezentacija pošumljavanja Republike Srbije u toku prošle godine.</p>
                </div>
            </div>
        );
    }
}

export default NewForests;