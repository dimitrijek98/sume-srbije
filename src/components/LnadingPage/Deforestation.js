import React, {Component} from 'react';
import {Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart} from "recharts";
import {regions} from '../shared/Regions';
import SumeService from '../../services/SumeService';

class Deforestation extends Component {
    constructor(props){
        super(props);
        this.SumeService = new SumeService();
        this.state = {
            regionData:[],
            month:'Januar'
        }

    }

    componentDidMount = () => {
       this.getData();
    }

    getData = () => {
        this.SumeService.getMonthDeforestation(this.state.month)
        .then(response => {
            let data = response.data.map(reg => {
                return {...reg, name:regions[reg.region-1].short}
            })
            this.setState({regionData:data});
        })
    }

    selectMonth = (e) => {
        let month = e.target.value;
        this.setState({month}, () => {
            this.getData();
        }); // posto je async funkcija mora ovako da bi se get data izvrsilo posle setovanja state-a

    }
    render() {
        return (
            <div ref={this.props.deforestation} className='row region-container p-5 mb-5'>
                <div className='col-md-6 align-items-center justify-content-center d-flex'>
                    <p>Mesečni podaci o seči šuma u toku prethodne godine po regionima.</p>
                </div>
                <div className='col-md-6'>
                    <RadarChart outerRadius={90} width={730} height={350} data={this.state.regionData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="name" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                        <Radar name="Broj stabala" dataKey="broj" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                    <select onChange={this.selectMonth} className="form-control">
                        <option value='Januar'>Januar</option>
                        <option value='Februar'>Februar</option>
                        <option value='Mart'>Mart</option>
                        <option value='April'>April</option>
                        <option value='Maj'>Maj</option>
                        <option value='Jun'>Jun</option>
                        <option value='Jul'>Jul</option>
                        <option value='Avgust'>Avgust</option>
                        <option value='Septembar'>Septembar</option>
                        <option value='Oktobar'>Oktobar</option>
                        <option value='Novembar'>Novembar</option>
                        <option value='Decembar'>Decembar</option>
                    </select>
                </div>

            </div>
        );
    }
}

export default Deforestation;