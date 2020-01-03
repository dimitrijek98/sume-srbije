import React, {Component} from 'react';
import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";

const data = [
    {
        "name": "Jan",
        "poseceno": 4000,
        "zasadjeno": 2400,
        "amt": 2400
    },
    {
        "name": "Feb",
        "poseceno": 3000,
        "zasadjeno": 1398,
        "amt": 2210
    },
    {
        "name": "Mar",
        "poseceno": 2000,
        "zasadjeno": 9800,
        "amt": 2290
    },
    {
        "name": "Apr",
        "poseceno": 2780,
        "zasadjeno": 3908,
        "amt": 2000
    },
    {
        "name": "Maj",
        "poseceno": 1890,
        "zasadjeno": 4800,
        "amt": 2181
    },
    {
        "name": "Jun",
        "poseceno": 2390,
        "zasadjeno": 3800,
        "amt": 2500
    },
    {
        "name": "Jul",
        "poseceno": 3490,
        "zasadjeno": 4300,
        "amt": 2100
    },
    {
        "name": "Avg",
        "poseceno": 2390,
        "zasadjeno": 3800,
        "amt": 2500
    },
    {
        "name": "Sep",
        "poseceno": 3490,
        "zasadjeno": 4300,
        "amt": 2100
    },
    {
        "name": "Okt",
        "poseceno": 3490,
        "zasadjeno": 4300,
        "amt": 2100
    },
    {
        "name": "Nov",
        "poseceno": 2390,
        "zasadjeno": 3800,
        "amt": 2500
    },
    {
        "name": "Dec",
        "poseceno": 3490,
        "zasadjeno": 4300,
        "amt": 2100
    },
]
class Regions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRegion: 'Vojvodina',
            regionData: [],
        }
    }
    componentDidMount() {
        this.setState({regionData: data});
    }

    onRegionSelected = (region) => {
        this.setState({selectedRegion: region});
    }

    render() {
        return (
            <div className='row region-container pb-5' ref={this.props.regions}>
                <div className='col-12'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-2 p-5'>
                                <div
                                    onClick={() => this.onRegionSelected('Vojvodina')}
                                    className={this.state.selectedRegion === 'Vojvodina'?'region-card-chosen':'region-card'}>
                                    Vojvodina
                                </div>
                            </div>
                            <div className='col-lg-2 p-5'>
                                <div onClick={() => this.onRegionSelected('Zapadna Srbija')}
                                     className={this.state.selectedRegion === 'Zapadna Srbija'?'region-card-chosen':'region-card'}>
                                    Zapadna Srbija
                                </div>
                            </div>
                            <div className='col-lg-2 p-5'>
                                <div onClick={() => this.onRegionSelected('Centralna Srbija')}
                                     className={this.state.selectedRegion === 'Centralna Srbija'?'region-card-chosen':'region-card'}>
                                    Centralna Srbija
                                </div>
                            </div>
                            <div className='col-lg-2 p-5'>
                                <div onClick={() => this.onRegionSelected('Istocna Srbija')}
                                     className={this.state.selectedRegion === 'Istocna Srbija'?'region-card-chosen':'region-card'}>
                                    Istocna Srbija
                                </div>
                            </div>
                            <div className='col-lg-2 p-5'>
                                <div onClick={() => this.onRegionSelected('Juzna Srbija')}
                                     className={this.state.selectedRegion === 'Juzna Srbija'?'region-card-chosen':'region-card'}>
                                    Juzna Srbija
                                </div>
                            </div>
                            <div className='col-lg-2 p-5'>
                                <div onClick={() => this.onRegionSelected('Kosovo')}
                                     className={this.state.selectedRegion === 'Kosovo'?'region-card-chosen':'region-card'}>
                                    Kosovo
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-12'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <AreaChart width={700} height={350} data={this.state.regionData}
                                           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#ffc259" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#ffc259" stopOpacity={0}/>
                                        </linearGradient>
                                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="poseceno" stroke="#ffa914" fillOpacity={1} fill="url(#colorUv)" />
                                    <Area type="monotone" dataKey="zasadjeno" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                                </AreaChart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Regions;