import React, { Component } from 'react';
import { regions } from '../shared/Regions';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, Bar, BarChart, Legend, PieChart, Pie, } from "recharts";
import SumeService from '../../services/SumeService';

class Regions extends Component {
    constructor(props) {
        super(props);
        this.SumeService = new SumeService();
        this.state = {
            selectedRegion: 'Vojvodina',
            regionData: [],
            treesNumData: [],
            treesSpaceData: [],
        }
    }
    componentDidMount() {
        this.getRegionData(1);
        this.getTreesNumData(1);
        this.getTreesSpaceData(1);
    }

    getRegionData = (regId) => {
        this.SumeService.getRegionsPlantingsAndDeforestation(regId)
            .then(response => {
                let data = response.data.map(reg => {
                    return { ...reg }
                })
                this.setState({ regionData: data });
            })
    }
    getTreesNumData = (regId) => {
        this.SumeService.getRegionsTreesPlantingsAndDeforestation(regId)
            .then(response => {
                let data = response.data.map(reg => {
                    return { ...reg }
                })
                this.setState({ treesNumData: data });
            })
    }
    getTreesSpaceData = (regId) => {
        this.SumeService.getRegionsTreesSpacePlantingsAndDeforestation(regId)
            .then(response => {
                let data = [{ name: "zasađeno", value: Math.round(response.data.zasadjeno*100)/100 }, { name: "posečeno", value: Math.round(response.data.poseceno*100)/100 }];
                this.setState({ treesSpaceData: data });
            })
    }

    onRegionSelected = (region) => {
        let regionId = regions.filter(reg => reg.name === region);//ovo ti vraca niz, pa ti je region id u regionId[0]
        this.setState({ selectedRegion: region });
        this.getRegionData(regionId[0].id);
        this.getTreesNumData(regionId[0].id);
        this.getTreesSpaceData(regionId[0].id);
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
                                    className={this.state.selectedRegion === 'Vojvodina' ? 'region-card-chosen' : 'region-card'}>
                                    Vojvodina
                                </div>
                            </div>
                            <div className='col-lg-2 p-5'>
                                <div onClick={() => this.onRegionSelected('Zapadna Srbija')}
                                    className={this.state.selectedRegion === 'Zapadna Srbija' ? 'region-card-chosen' : 'region-card'}>
                                    Zapadna Srbija
                                </div>
                            </div>
                            <div className='col-lg-2 p-5'>
                                <div onClick={() => this.onRegionSelected('Centralna Srbija')}
                                    className={this.state.selectedRegion === 'Centralna Srbija' ? 'region-card-chosen' : 'region-card'}>
                                    Centralna Srbija
                                </div>
                            </div>
                            <div className='col-lg-2 p-5'>
                                <div onClick={() => this.onRegionSelected('Istocna Srbija')}
                                    className={this.state.selectedRegion === 'Istocna Srbija' ? 'region-card-chosen' : 'region-card'}>
                                    Istocna Srbija
                                </div>
                            </div>
                            <div className='col-lg-2 p-5'>
                                <div onClick={() => this.onRegionSelected('Juzna Srbija')}
                                    className={this.state.selectedRegion === 'Juzna Srbija' ? 'region-card-chosen' : 'region-card'}>
                                    Juzna Srbija
                                </div>
                            </div>
                            <div className='col-lg-2 p-5'>
                                <div onClick={() => this.onRegionSelected('Kosovo i Metohija')}
                                    className={this.state.selectedRegion === 'Kosovo i Metohija' ? 'region-card-chosen' : 'region-card'}>
                                    Kosovo i Metohija
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
                                            <stop offset="5%" stopColor="#ffc259" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#ffc259" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="mesec" />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip />
                                    <Area type="monotone" name="posečeno" dataKey="brojP" stroke="#ffa914" fillOpacity={1} fill="url(#colorUv)" />
                                    <Area type="monotone" name="zasađeno" dataKey="brojZ" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                                </AreaChart>
                            </div>
                            <div className='col-md-6 align-items-center justify-content-center d-flex'>
                                <p>Grafički prikaz seče i pošumljavanja u konkretnoj oblasti u toku prošle godine.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-12'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <BarChart width={600} height={350} data={this.state.treesNumData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="ime" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar name="Ukupno zasađeno" dataKey="zasadjeno" fill="#82ca9d" />
                                    <Bar name="Ukupno posečeno" dataKey="poseceno" fill="#ffa914" />
                                </BarChart>
                            </div>
                            <div className='col-md-6 align-items-center justify-content-center d-flex'>
                                <p>Stubičasti prikaz odnosa seče i pošumljavanja u konkretnoj oblasti u toku prošle godine za konkretnu vrstu drva.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <PieChart width={400} height={400}>
                                    <Pie dataKey="value" isAnimationActive={true} data={this.state.treesSpaceData} cx={200} cy={200} outerRadius={150} fill="#82ca9d" label />
                                    <Tooltip />
                                </PieChart>
                            </div>
                            <div className='col-md-6 align-items-center justify-content-center d-flex'>
                                <p>Poređenje površine seče i pošumljavanja u km^2.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Regions;