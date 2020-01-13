import React, {Component} from 'react';
import {Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart} from "recharts";
import {regions} from '../shared/Regions';
import SumeService from '../../services/SumeService';
const data = [
    {
        "subject": "Vojvodina",
        "A": 11000,
        "B": 11000,
        "fullMark": 15000
    },
    {
        "subject": "Zapadna Srbija",
        "A": 9800,
        "B": 13000,
        "fullMark": 15000
    },
    {
        "subject": "Centralna Srbija",
        "A": 8600,
        "B": 13000,
        "fullMark": 15000
    },
    {
        "subject": "Istocna Srbija",
        "A": 9900,
        "B": 10000,
        "fullMark": 15000
    },
    {
        "subject": "Juzna Srbija",
        "A": 8500,
        "B": 9000,
        "fullMark": 15000
    },
    {
        "subject": "Kosovo",
        "A": 6500,
        "B": 8500,
        "fullMark": 15000
    }
]
class Deforestation extends Component {
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
        this.SumeService.getMonthDeforestation(this.state.month)
        .then(response => {
            let data = response.data.map(region => {
                return {...region, name:regions[region.regId].short}
            })
            this.setState({regionData:data});
        })
    }

    selectMonth = (e) => {
        let month = e.target.value;
        this.setState({month}, () => {
            this.getData()
        }); // posto je async funkcija mora ovako da bi se get data izvrsilo posle setovanja state-a

    }
    render() {
        return (
            <div ref={this.props.deforestation} className='row region-container p-5 mb-5'>
                <div className='col-md-6 align-items-center justify-content-center d-flex'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi fugit nam neque
                        odit pariatur quasi quos suscipit. At earum et fuga itaque, iusto libero! Doloremque dolores ea
                        impedit nesciunt.</p>
                </div>
                <div className='col-md-6'>
                    <RadarChart outerRadius={90} width={730} height={350} data={this.state.regionData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="name" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                        <Radar name="Broj stabala" dataKey="posecenabr" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                    <select onChange={this.selectMonth} class="form-control">
                        <option value='Jan'>Jan</option>
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                    </select>
                </div>

            </div>
        );
    }
}

export default Deforestation;